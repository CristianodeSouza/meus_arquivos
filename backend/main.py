from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from typing import Optional, List, Dict
import os
from pathlib import Path
from ranking_engine import RankingEngine
from datetime import datetime

app = FastAPI(title="Crediclass Dashboard API")

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Caminho base para dados
DADOS_DIR = Path(__file__).parent.parent / "dados"
ARQUIVO_BASE = DADOS_DIR / "Mapa_de_Grupos_3.0_Novo_2026_Cristiano_1.xlsx"


def carregar_dataframe_grupos() -> pd.DataFrame:
    """Carrega o dataframe principal de grupos do arquivo Excel."""
    if not ARQUIVO_BASE.exists():
        raise FileNotFoundError(f"Arquivo de dados não encontrado: {ARQUIVO_BASE}")

    try:
        # Tentar ler a aba "Mapa de grupos (oficial)"
        df = pd.read_excel(ARQUIVO_BASE, sheet_name="Mapa de grupos (oficial)")
        return df
    except Exception as e:
        # Fallback: ler primeira aba
        df = pd.read_excel(ARQUIVO_BASE)
        return df


def obter_ranking_grupos(filtro_adm: Optional[str] = None) -> Dict:
    """
    Calcula e retorna o ranking de grupos.

    Args:
        filtro_adm: Opcional - filtrar por ADM específico

    Returns:
        Dicionário com ranking e estatísticas
    """
    # Carregar dados
    df = carregar_dataframe_grupos()

    # Filtrar por ADM se especificado
    if filtro_adm:
        df = df[df['Adm.'].str.upper() == filtro_adm.upper()]
        if df.empty:
            return {"erro": f"Nenhum grupo encontrado para ADM: {filtro_adm}"}

    # Inicializar engine de ranking
    engine = RankingEngine(df)

    # Gerar ranking
    df_ranking = engine.gerar_ranking()

    # Preparar resposta
    top_grupos = df_ranking.nlargest(10, 'Score Final (0-100)')[
        ['Adm.', 'Grup0', 'Taxa\nAdm Original', 'Prazo\nRestante',
         'Score Final (0-100)', 'Ranking Geral', 'Top 3?', 'Motivo Recomendação']
    ].to_dict('records')

    resumo = engine.obter_resumo_ranking()

    return {
        "data_calculo": datetime.now().isoformat(),
        "versao": "1.0",
        "total_grupos": resumo['total_grupos'],
        "score_medio": round(resumo['score_medio'], 2),
        "score_maximo": resumo['score_maximo'],
        "score_minimo": resumo['score_minimo'],
        "grupos_top_3": resumo['grupos_top_3'],
        "distribuicao_adm": resumo['adms_principais'],
        "top_10_grupos": top_grupos
    }


# Endpoints da API

@app.get("/")
async def root():
    """Health check."""
    return {
        "status": "ok",
        "app": "Crediclass Dashboard API",
        "version": "1.0"
    }


@app.get("/api/ranking")
async def get_ranking(adm: Optional[str] = None):
    """
    Obtém o ranking de grupos de consórcios.

    Args:
        adm: Opcional - filtrar por ADM (ex: ITAÚ, CAIXA, PORTO)

    Returns:
        Ranking com top 10 grupos e estatísticas
    """
    try:
        resultado = obter_ranking_grupos(adm)
        if "erro" in resultado:
            raise HTTPException(status_code=404, detail=resultado["erro"])
        return resultado
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao processar ranking: {str(e)}")


@app.get("/api/ranking/completo")
async def get_ranking_completo(adm: Optional[str] = None):
    """
    Obtém o ranking completo de todos os grupos (não apenas top 10).

    Args:
        adm: Opcional - filtrar por ADM

    Returns:
        Lista completa de todos os grupos com ranking
    """
    try:
        df = carregar_dataframe_grupos()

        if adm:
            df = df[df['Adm.'].str.upper() == adm.upper()]
            if df.empty:
                raise HTTPException(status_code=404, detail=f"Nenhum grupo encontrado para ADM: {adm}")

        engine = RankingEngine(df)
        df_ranking = engine.gerar_ranking()

        # Ordenar por ranking
        df_sorted = df_ranking.sort_values('Ranking Geral')

        return {
            "data_calculo": datetime.now().isoformat(),
            "total_grupos": len(df_sorted),
            "grupos": df_sorted[[
                'Adm.', 'Grup0', 'Taxa\nAdm Original', 'Prazo\nRestante',
                'Score Final (0-100)', 'Ranking Geral', 'Top 3?',
                'Score Taxa Adm', 'Score Prazo', 'Score Contemp.',
                'Score Compat.', 'Score Vida Grupo', 'Score Fundo RSV',
                'Motivo Recomendação'
            ]].to_dict('records')
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao processar ranking: {str(e)}")


@app.get("/api/ranking/adms")
async def get_adms_disponiveis():
    """
    Lista todos os ADMs disponíveis no banco de dados.

    Returns:
        Lista de ADMs com contagem de grupos
    """
    try:
        df = carregar_dataframe_grupos()
        adms = df['Adm.'].value_counts().to_dict()

        return {
            "total_adms": len(adms),
            "adms": adms
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao listar ADMs: {str(e)}")


@app.get("/api/grupo/{grupo_id}")
async def get_grupo_detalhes(grupo_id: str):
    """
    Obtém detalhes completos de um grupo específico com seu score.

    Args:
        grupo_id: ID do grupo (Grup0)

    Returns:
        Detalhes completos do grupo incluindo todos os scores
    """
    try:
        df = carregar_dataframe_grupos()

        # Buscar grupo
        grupo = df[df['Grup0'].astype(str) == grupo_id]
        if grupo.empty:
            raise HTTPException(status_code=404, detail=f"Grupo {grupo_id} não encontrado")

        # Gerar ranking para obter scores
        engine = RankingEngine(df)
        df_ranking = engine.gerar_ranking()

        grupo_ranking = df_ranking[df_ranking['Grup0'].astype(str) == grupo_id].iloc[0]

        return {
            "grupo_id": grupo_id,
            "adm": grupo_ranking['Adm.'],
            "tipo_bem": grupo_ranking.get('Tipo de Bem', 'N/A'),
            "taxa_adm": grupo_ranking.get('Taxa\nAdm Original', 0),
            "prazo_restante": grupo_ranking.get('Prazo\nRestante', 0),
            "scores": {
                "taxa_adm": int(grupo_ranking.get('Score Taxa Adm', 0)),
                "prazo": int(grupo_ranking.get('Score Prazo', 0)),
                "contemplacao": int(grupo_ranking.get('Score Contemp.', 0)),
                "compatibilidade": int(grupo_ranking.get('Score Compat.', 0)),
                "vida_grupo": int(grupo_ranking.get('Score Vida Grupo', 0)),
                "fundo_rsv": int(grupo_ranking.get('Score Fundo RSV', 0)),
                "final": int(grupo_ranking.get('Score Final (0-100)', 0))
            },
            "ranking_geral": int(grupo_ranking.get('Ranking Geral', 0)),
            "top_3": bool(grupo_ranking.get('Top 3?', False)),
            "motivo_recomendacao": grupo_ranking.get('Motivo Recomendação', '')
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao obter detalhes do grupo: {str(e)}")


# Health check
@app.get("/health")
async def health():
    """Endpoint de health check para monitoramento."""
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

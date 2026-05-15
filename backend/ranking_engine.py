# backend/ranking_engine.py
"""
Engine de Scoring e Ranking para Grupos de Consórcios
Calcula scores baseado em múltiplos critérios e gera ranking recomendado.
"""

import pandas as pd
import numpy as np
from typing import Dict, List, Tuple, Optional
from datetime import datetime


class RankingEngine:
    """Motor de scoring e ranking para grupos de consórcios."""

    # Pesos para cálculo do score final (devem somar 100%)
    PESOS = {
        'taxa': 0.30,           # 30% - taxa de administração (quanto menor, melhor)
        'prazo': 0.20,          # 20% - prazo restante (quanto maior, melhor)
        'contemplacao': 0.15,   # 15% - velocidade de contemplação (mais lances = melhor)
        'compatibilidade': 0.15,# 15% - compatibilidade/saúde do grupo
        'vida': 0.10,           # 10% - fase do grupo (novo/meio melhor que velho)
        'rsv': 0.10             # 10% - fundo de reserva
    }

    def __init__(self, df_grupos: pd.DataFrame):
        """
        Inicializa engine com dataframe de grupos.

        Args:
            df_grupos: DataFrame com dados dos grupos
        """
        self.df = df_grupos.copy()
        self.scores_dict = {}

        # Converter colunas numéricas esperadas
        colunas_numericas = [
            'Taxa\nAdm Original', 'Prazo\nRestante', '% Vida Grupo',
            'Fundo\nRSV', 'Média\nLance', 'Média Contemp'
        ]

        for col in colunas_numericas:
            if col in self.df.columns:
                self.df[col] = pd.to_numeric(self.df[col], errors='coerce')

    def calcular_score_taxa(self) -> pd.Series:
        """
        Score da taxa de administração.
        Quanto MENOR a taxa, MELHOR o score.

        Normaliza entre 0-100 onde 0 = taxa máxima, 100 = taxa mínima.
        """
        taxa_col = 'Taxa\nAdm Original'

        if taxa_col not in self.df.columns:
            return pd.Series([50] * len(self.df))

        taxa = self.df[taxa_col].fillna(self.df[taxa_col].median())

        taxa_min = taxa.min()
        taxa_max = taxa.max()

        if taxa_max == taxa_min:
            return pd.Series([50] * len(self.df))

        # Inverso: taxa baixa = score alto
        score = 100 * (1 - (taxa - taxa_min) / (taxa_max - taxa_min))

        self.scores_dict['taxa'] = score
        return score

    def calcular_score_prazo(self) -> pd.Series:
        """
        Score do prazo restante.
        Quanto MAIOR o prazo restante, MELHOR.

        Grupos com muito tempo ainda disponível recebem scores maiores.
        """
        prazo_col = 'Prazo\nRestante'

        if prazo_col not in self.df.columns:
            return pd.Series([50] * len(self.df))

        prazo = self.df[prazo_col].fillna(self.df[prazo_col].median())
        prazo_max = prazo.max()

        if prazo_max == 0:
            return pd.Series([50] * len(self.df))

        # Direto: mais prazo = score maior
        score = 100 * (prazo / prazo_max)

        # Ajuste: grupos com prazo > 50% do máximo recebem boost
        score = score.apply(lambda x: x * 1.1 if x > 50 else x)
        score = score.clip(0, 100)

        self.scores_dict['prazo'] = score
        return score

    def calcular_score_contemplacao(self) -> pd.Series:
        """
        Score de velocidade de contemplação.
        Grupos com mais lances/contemplações = melhor liquidez.

        Conta contemplações dos últimos 12 meses.
        """
        # Procurar colunas com "Qtd" que indicam quantidade de contemplações
        colunas_qtd = [col for col in self.df.columns if 'Qtd' in col]

        if not colunas_qtd:
            return pd.Series([50] * len(self.df))

        # Somar contemplações dos últimos meses
        qtd_contemplacoes = self.df[colunas_qtd].sum(axis=1)
        qtd_max = qtd_contemplacoes.max()

        if qtd_max == 0:
            return pd.Series([50] * len(self.df))

        score = 100 * (qtd_contemplacoes / qtd_max)

        # Grupos com muitos lances recebem boost
        score = score.apply(lambda x: x * 1.15 if x > 60 else x)
        score = score.clip(0, 100)

        self.scores_dict['contemplacao'] = score
        return score

    def calcular_score_compatibilidade(self) -> pd.Series:
        """
        Score de compatibilidade e saúde do grupo.

        Fatores considerados:
        - ADM (ITAÚ/CAIXA = principais)
        - Média de lances (indica confiabilidade)
        - Tipo de bem (imóvel = mais importante)
        """
        score = pd.Series([70] * len(self.df), index=self.df.index)

        # Bonus para ADMs principais
        if 'Adm.' in self.df.columns:
            adms_principais = self.df['Adm.'].isin(['ITAÚ', 'CAIXA', 'PORTO'])
            score[adms_principais] = 100

        # Bonus para grupos com média de lances alta
        if 'Média\nLance' in self.df.columns:
            try:
                media_lances = pd.to_numeric(self.df['Média\nLance'], errors='coerce').fillna(0)
                media_max = media_lances.max()
                if media_max > 0:
                    lance_score = (media_lances / media_max) * 20
                    score = score + lance_score
            except:
                pass

        # Tipo de bem (imóvel = mais importante)
        if 'Tipo de Bem' in self.df.columns:
            eh_imovel = self.df['Tipo de Bem'] == 'Imóvel'
            score[eh_imovel] = score[eh_imovel] + 5

        score = score.clip(0, 100)
        self.scores_dict['compatibilidade'] = score
        return score

    def calcular_score_vida_grupo(self) -> pd.Series:
        """
        Score baseado na fase do grupo.

        Grupos novos (0-30%) e em meio (30-60%) são melhores que grupos velhos.
        """
        vida_col = '% Vida Grupo'

        if vida_col not in self.df.columns:
            return pd.Series([50] * len(self.df))

        # % Vida Grupo vem em decimal (0.5 = 50%)
        vida_pct = self.df[vida_col].fillna(0.5)

        # Converter para percentual e criar scoring
        def score_func(pct):
            if pct < 0.20:
                return 100  # Grupo novo (0-20%) - Ótimo
            elif pct < 0.40:
                return 90   # Muito novo (20-40%) - Muito bom
            elif pct < 0.60:
                return 80   # Meio (40-60%) - Bom
            elif pct < 0.80:
                return 60   # Segunda metade (60-80%) - Regular
            else:
                return 40   # Quase terminando (80%+) - Ruim

        score = vida_pct.apply(score_func)
        self.scores_dict['vida'] = score
        return score

    def calcular_score_fundo_rsv(self) -> pd.Series:
        """
        Score do fundo de reserva.
        Maior fundo = mais segurança.
        """
        rsv_col = 'Fundo\nRSV'

        if rsv_col not in self.df.columns:
            return pd.Series([50] * len(self.df))

        fundo = self.df[rsv_col].fillna(0.03)

        # Esperado: 3% mínimo, 5% é ótimo
        score = (fundo * 100) / 5 * 100
        score = score.clip(0, 100)

        self.scores_dict['rsv'] = score
        return score

    def calcular_score_final(self) -> pd.DataFrame:
        """
        Calcula score final como média ponderada de todos os scores.

        Retorna DataFrame com todos os scores parciais.
        """
        scores = pd.DataFrame({
            'score_taxa': self.calcular_score_taxa(),
            'score_prazo': self.calcular_score_prazo(),
            'score_contemplacao': self.calcular_score_contemplacao(),
            'score_compatibilidade': self.calcular_score_compatibilidade(),
            'score_vida': self.calcular_score_vida_grupo(),
            'score_rsv': self.calcular_score_fundo_rsv(),
        })

        # Calcular score final ponderado
        score_final = (
            scores['score_taxa'] * self.PESOS['taxa'] +
            scores['score_prazo'] * self.PESOS['prazo'] +
            scores['score_contemplacao'] * self.PESOS['contemplacao'] +
            scores['score_compatibilidade'] * self.PESOS['compatibilidade'] +
            scores['score_vida'] * self.PESOS['vida'] +
            scores['score_rsv'] * self.PESOS['rsv']
        )

        scores['score_final'] = score_final.round(0).astype(int)

        return scores

    def gerar_ranking(self) -> pd.DataFrame:
        """
        Gera ranking completo com motivos de recomendação.

        Retorna DataFrame original com colunas adicionadas de ranking.
        """
        # Calcular todos os scores
        scores = self.calcular_score_final()

        # Adicionar ao dataframe original
        self.df['Score Final (0-100)'] = scores['score_final']

        # Gerar ranking (1 = melhor)
        self.df['Ranking Geral'] = scores['score_final'].rank(
            ascending=False,
            method='dense'
        ).astype(int)

        # Marcar top 3
        self.df['Top 3?'] = self.df['Ranking Geral'] <= 3

        # Gerar motivos de recomendação
        self.df['Motivo Recomendação'] = self.df.apply(
            self._gerar_motivo, axis=1, scores=scores
        )

        # Adicionar metadata
        self.df['Data Cálculo'] = datetime.now().strftime('%d/%m/%Y')
        self.df['Versão Ranking'] = '1.0'

        # Adicionar scores parciais (para análise)
        self.df['Score Taxa Adm'] = scores['score_taxa'].round(0).astype(int)
        self.df['Score Prazo'] = scores['score_prazo'].round(0).astype(int)
        self.df['Score Contemp.'] = scores['score_contemplacao'].round(0).astype(int)
        self.df['Score Compat.'] = scores['score_compatibilidade'].round(0).astype(int)
        self.df['Score Vida Grupo'] = scores['score_vida'].round(0).astype(int)
        self.df['Score Fundo RSV'] = scores['score_rsv'].round(0).astype(int)

        return self.df

    def _gerar_motivo(self, row, scores) -> str:
        """
        Gera texto explicativo do motivo da recomendação.

        Prioriza os 2-3 maiores scores do grupo.
        """
        idx = row.name

        # Extrair scores do grupo
        scores_grupo = {
            'Taxa': scores.loc[idx, 'score_taxa'],
            'Prazo': scores.loc[idx, 'score_prazo'],
            'Lances': scores.loc[idx, 'score_contemplacao'],
            'Saúde': scores.loc[idx, 'score_compatibilidade'],
            'Vida': scores.loc[idx, 'score_vida'],
        }

        # Ordenar por score (top 2-3)
        top_motivos = sorted(scores_grupo.items(), key=lambda x: x[1], reverse=True)[:3]

        textos = {
            'Taxa': 'Menor taxa',
            'Prazo': 'Prazo longo',
            'Lances': 'Alta liquidez',
            'Saúde': 'Grupo saudável',
            'Vida': 'Grupo novo',
        }

        motivos = [textos[k] for k, _ in top_motivos if top_motivos[0][1] - _ < 30]

        if not motivos:
            motivos = ['Boa compatibilidade geral']

        return ' + '.join(motivos)

    def obter_top_n(self, n: int = 10) -> pd.DataFrame:
        """
        Retorna os top N grupos ordenados por score.
        """
        return self.df.nlargest(n, 'Score Final (0-100)')[
            ['Adm.', 'Grup0', 'Taxa\nAdm Original', 'Prazo\nRestante',
             'Score Final (0-100)', 'Ranking Geral', 'Motivo Recomendação']
        ]

    def obter_resumo_ranking(self) -> Dict:
        """
        Retorna resumo estatístico do ranking.
        """
        return {
            'total_grupos': len(self.df),
            'score_medio': self.df['Score Final (0-100)'].mean(),
            'score_maximo': self.df['Score Final (0-100)'].max(),
            'score_minimo': self.df['Score Final (0-100)'].min(),
            'grupos_top_3': len(self.df[self.df['Top 3?']]),
            'adms_principais': self.df['Adm.'].value_counts().to_dict()
        }

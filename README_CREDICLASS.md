# 🏆 Crediclass Dashboard - Ranking de Consórcios

Plataforma inteligente para ranking e recomendação de grupos de consórcios baseado em múltiplos critérios de scoring.

## 📋 Visão Geral

O Crediclass Dashboard implementa a **Fase 1.1: Ranking de ADM e Recomendação** usando um motor de scoring ponderado que avalia grupos de consórcios em 6 critérios:

- **Taxa de Administração** (30% peso) - Quanto menor, melhor
- **Prazo Restante** (20% peso) - Quanto maior, melhor
- **Velocidade de Contemplação** (15% peso) - Mais lances = melhor liquidez
- **Compatibilidade/Saúde** (15% peso) - Saúde financeira do grupo
- **Fase do Grupo** (10% peso) - Grupos novos/meio melhor que velhos
- **Fundo de Reserva** (10% peso) - Maior fundo = mais segurança

## 🚀 Estrutura do Projeto

```
crediclass-dashboard-grupos/
├── backend/
│   ├── main.py                  # FastAPI backend com endpoints
│   ├── ranking_engine.py        # Motor de scoring e ranking
│   └── requirements.txt         # Dependências Python
├── frontend/
│   ├── index.html              # Interface principal
│   ├── css/
│   │   └── style.css           # Estilos customizados
│   └── js/
│       └── app.js              # Lógica de interação
├── dados/
│   └── Mapa_de_Grupos_3.0_*.xlsx  # Arquivo base com dados
├── vercel.json                 # Configuração Vercel
└── README_CREDICLASS.md        # Este arquivo
```

## 🔧 Instalação Local

### Pré-requisitos
- Python 3.11+
- pip
- git

### Passos

1. **Clonar o repositório:**
```bash
git clone https://github.com/CristianodeSouza/meus_arquivos.git
cd meus_arquivos
git checkout claude/crediclass-dashboard-grupos-GKeR7
```

2. **Preparar ambiente Python:**
```bash
# Criar ambiente virtual
python -m venv venv

# Ativar (Linux/Mac)
source venv/bin/activate
# ou (Windows)
venv\Scripts\activate

# Instalar dependências
pip install -r backend/requirements.txt
```

3. **Preparar dados:**
- Copiar arquivo `Mapa_de_Grupos_3.0_Novo_2026_Cristiano_1.xlsx` para `dados/`

4. **Iniciar backend:**
```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

5. **Abrir frontend:**
- Abre `frontend/index.html` no navegador ou
- Usa live server: `python -m http.server 3000` na pasta `frontend/`

## 📡 API Endpoints

### GET `/api/ranking`
Obtém ranking dos top 10 grupos com estatísticas.

**Parâmetros:**
- `adm` (opcional): Filtrar por ADM (ITAÚ, CAIXA, PORTO)

**Resposta:**
```json
{
  "total_grupos": 342,
  "score_medio": 44.95,
  "score_maximo": 73,
  "score_minimo": 22,
  "grupos_top_3": 5,
  "top_10_grupos": [
    {
      "Ranking Geral": 1,
      "Adm.": "CAIXA",
      "Grup0": 1042,
      "Score Final (0-100)": 73,
      "Motivo Recomendação": "Grupo saudável + Prazo longo"
    }
  ]
}
```

### GET `/api/ranking/completo`
Retorna ranking completo de todos os grupos (não apenas top 10).

### GET `/api/ranking/adms`
Lista todos os ADMs disponíveis com contagem de grupos.

### GET `/api/grupo/{grupo_id}`
Obtém detalhes completos de um grupo específico com seus scores parciais.

### GET `/health`
Health check da API.

## 💻 Frontend - Interface

### Filtros
- **ADM**: Filtrar por administradora (ITAÚ, CAIXA, PORTO)
- **Tipo de Bem**: Filtrar por tipo (Imóvel, Automóvel)
- **Botão Carregar**: Dispara cálculo do ranking

### Tabela de Resultados
Mostra:
- **#**: Posição no ranking
- **Grupo**: ID do grupo + badge TOP 3 (se aplicável)
- **ADM**: Administradora com badge colorida
- **Taxa ADM**: Taxa de administração em percentual
- **Prazo**: Prazo restante em meses
- **Score**: Score final 0-100 com código de cor
- **Motivo**: Razão da recomendação

### Modal de Detalhes
Clique em qualquer linha para ver:
- Todos os 6 scores parciais
- Informações do grupo
- Explicação detalhada da recomendação

## 📊 Motor de Scoring (RankingEngine)

### Como Funciona

1. **Carregamento**: Lê dados do Excel
2. **Normalização**: Converte valores para escala 0-100
3. **Cálculo de Scores**: Avalia cada critério
4. **Ponderação**: Aplica pesos definidos
5. **Ranking**: Ordena por score final
6. **Recomendação**: Gera texto explicativo

### Exemplo de Cálculo

Para um grupo com:
- Score Taxa: 85 (taxa baixa = bom)
- Score Prazo: 90 (prazo longo = bom)
- Score Contemplação: 75 (muitos lances)
- Score Compatibilidade: 100 (CAIXA = principal)
- Score Vida: 90 (grupo novo)
- Score RSV: 60 (fundo médio)

**Score Final** = 85×0.30 + 90×0.20 + 75×0.15 + 100×0.15 + 90×0.10 + 60×0.10 = **86.5**

## 🎨 Customização

### Alterar Pesos do Scoring

Em `backend/ranking_engine.py`, classe `RankingEngine`:

```python
PESOS = {
    'taxa': 0.30,           # Alterar percentual
    'prazo': 0.20,
    'contemplacao': 0.15,
    'compatibilidade': 0.15,
    'vida': 0.10,
    'rsv': 0.10             # Total deve ser 1.0
}
```

### Alterar Cores das Badges

Em `frontend/css/style.css`:

```css
.score-badge.excellent {
    background-color: var(--success-green);  /* ≥70 pontos */
}
.score-badge.good {
    background-color: #3b82f6;              /* 50-69 pontos */
}
```

### Adicionar Novas ADMs

Em `backend/ranking_engine.py`, método `calcular_score_compatibilidade()`:

```python
adms_principais = self.df['Adm.'].isin(['ITAÚ', 'CAIXA', 'PORTO', 'BANCO_XYZ'])
```

## 📈 Próximos Passos (Fases 1.2 - 1.5)

- **Fase 1.2**: Filtros avançados (por prazo, taxa, tipo de bem)
- **Fase 1.3**: Exportação para Excel/PDF com ranking
- **Fase 1.4**: Integração com Google Sheets API
- **Fase 1.5**: Dashboard com gráficos e análises

## 🚀 Deploy na Vercel

1. **Push para GitHub:**
```bash
git add .
git commit -m "Feat: Implement Phase 1.1 - Ranking Engine"
git push -u origin claude/crediclass-dashboard-grupos-GKeR7
```

2. **Conectar Vercel:**
- Vá para https://vercel.com/new
- Conecte seu repositório GitHub
- Selecione este projeto
- Vercel detecta `vercel.json` automaticamente
- Clique "Deploy"

3. **Variáveis de Ambiente:**
- Não necessário para esta fase

## 🐛 Troubleshooting

### "Arquivo de dados não encontrado"
- Certifique-se que `Mapa_de_Grupos_3.0_Novo_2026_Cristiano_1.xlsx` está em `dados/`

### "CORS error"
- Backend está rodando em outra porta?
- Verifique `API_BASE` em `frontend/js/app.js`

### "Scores todos iguais"
- Dados incompletos? Verifique se colunas esperadas existem
- Use coluna de fallback com valores padrão

### API respondendo "500 Internal Server Error"
- Verifique os logs do backend
- Certifique-se todas as dependências estão instaladas

## 📝 Documentação Técnica

- [RankingEngine Documentation](./backend/ranking_engine.py) - Leia docstrings dos métodos
- [API Endpoints](./backend/main.py) - Todos os endpoints estão documentados
- [Frontend Architecture](./frontend/js/app.js) - Explicações de funções principais

## 📄 Versão

**Crediclass Dashboard v1.0**
- Data: Maio 2026
- Status: Fase 1.1 - Completa
- Próxima revisão: Junho 2026

## 👨‍💻 Autor

Desenvolvido para Crediclass - Plataforma de Consórcios Inteligentes

## 📧 Suporte

Para dúvidas ou sugestões sobre o ranking:
1. Verifique a coluna "Score Final" no Excel
2. Consulte "Motivo Recomendação" para entender o cálculo
3. Veja os 6 scores parciais no modal de detalhes

---

**Dica**: O ranking é recalculado sempre que você clica em "Carregar Ranking", garantindo dados sempre atualizados!

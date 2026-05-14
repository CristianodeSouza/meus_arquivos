# 📋 PADRÃO TÉCNICO KPG LP SENSORIAL
## Especificação Técnica Completa e Definitiva

**Data de Criação:** 14/05/2026  
**Status:** PADRÃO OFICIAL  
**Versão:** 1.0 Final  
**Autor:** Claude (Anthropic)  
**Cliente:** KPG Imóveis  

---

## 🎯 FILOSOFIA CENTRAL

Esta LP não vende imóvel. Vende **memória futura** e **dias que serão lembrados**.

**Fio Condutor Invisível:** Medo de envelhecer sem ter vivido.

**Audiência:** Mista, sem segmentação óbvia. Todos se identificam porque a dor é universal.

---

## 📐 ARQUITETURA HTML/CSS

### Estrutura de Seções (Ordem Imutável)

1. **Hero** — Memória futura + Preview do material
2. **Provocação** — Expõe a dor (rotina, adiamento, tempo passando)
3. **A Cena** — Momentos sensoriais específicos (horários, cheiros, sons)
4. **Jornada** — Clareza sobre o processo (4 passos)
5. **Imóveis** — 4 propriedades com vidas possíveis
6. **Convite/PDF** — Material de 50+ imóveis (previsibilidade)
7. **Website** — Site principal diferenciado
8. **Final** — Encerramento do ciclo emocional
9. **Modal** — Formulário de captura (email, phone, momento)
10. **Footer** — Dados KPG (time, CRECI, contato)

### Paleta de Cores (Imutável)

```css
--navy: #0f1e2e;              /* Fundo principal (hero, final) */
--navy-soft: #1a2a3a;         /* Alternativa navy */
--gold: #c9a961;              /* Destaque e ênfase */
--gold-warm: #d4b574;         /* Variação ouro (hover) */
--cream: #f5f3f0;             /* Fundo claro */
--text: #2a3a4a;              /* Texto principal */
--muted: #7a8a9a;             /* Texto secundário */
--white: #ffffff;             /* Branco puro */
--whatsapp: #25d366;          /* Botão WhatsApp */
--ease: cubic-bezier(0.4, 0, 0.2, 1);  /* Transição padrão */
```

### Tipografia (Hierarquia Fixa)

**Serif (Georgia) — Títulos e Corpo Principal:**
- H1 (Hero): 44px (mobile) → 64px (desktop)
- H2 (Seções): 36px (mobile) → 48/56px (desktop)
- H3 (Cards): 18px (fixo)
- Corpo: 16-17px
- Pequeno: 12-14px

**Sans-serif (-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif) — Botões, Labels, Técnico:**
- Labels: 11px, uppercase, letter-spacing 3px, font-weight 600/700
- Botões: 13px, uppercase, letter-spacing 1.5-2px, font-weight 700
- Técnico (forms, footer): 13-14px

**Font Weight Distribution:**
- Serif: 400 (normal) ou italic
- Sans-serif: 600-700 (bold em labels/buttons)

### Line Height

- Títulos: 1.15-1.25
- Corpo: 1.7-1.9
- Labels: 1.6-1.7

### Espaçamento

**Seções:**
- Padding horizontal: 20px (mobile) → 40px (tablet) → 60px (desktop)
- Padding vertical: 100px (seções padrão)

**Cards/Elementos:**
- Padding interno: 24-36px
- Gap (grid): 24-40px
- Margin entre blocos: 32-56px

### Animações

**Fade In (Hero Elements):**
```css
animation: fadeIn 1s var(--ease) [0.3s / 0.6s / 0.9s / 1.2s / 1.5s];
```
Cria efeito de revelação escalonada.

**Transições Padrão:**
```css
transition: all 0.3s-0.4s var(--ease);
```

**No Hover (Cards):**
```css
transform: translateY(-4px);
```

**No Active (Botões):**
```css
transform: translateY(-2px) / scale(0.92);
background-color: var(--gold-warm);
```

### Breakpoints (Mobile-First)

- **Mobile:** 320px - 759px
- **Tablet:** 760px+
- **Desktop:** 1024px+

**Ajustes de Layout:**
- @media (min-width: 760px): Container padding 40px, grid 2 cols, Hero/Final actions 2 cols
- @media (min-width: 1024px): Container max-width 1200px, Scene moments 3 cols

---

## ✍️ COPY — REGRAS IMUTÁVEIS

### Tom de Voz

**Nunca:**
- Acadêmico ("cognitive anchoring", "perceived value")
- Corporativo ("otimizar", "sinergia", "experiência única")
- Clichê imobiliário ("melhor localização", "oportunidade imperdível", "oferta relâmpago")
- Categorizante ("você é o investidor / executivo / aporentado")
- Frio ("propriedade", "ativo", "retorno")

**Sempre:**
- Sensorial (cheiros, sons, temperaturas, cenas visuais)
- Emocional (memória, medo, transformação)
- Narrativo (histórias, momentos, vidas possíveis)
- Direto (sem floreio, sem rodeios)
- Cinematográfico (como em um filme)
- Provocador (expõe verdades desconfortáveis)

### Estrutura de Copy por Seção

#### HERO
```
[Whisper — label técnico em maiúsculas, 11px gold]

[Headline — proposição sensorial com futuro]
Padrão: "Você não vai lembrar de [coisa mundana]. 
Vai lembrar de [sensação/momento/pessoa em Gramado]."

Exemplo: "Você não vai lembrar do escritório. 
Vai lembrar das *manhãs* em que acordou aqui."

[Subhead — contexto emocional + universalidade]
Padrão: Exposição clara de que a vida passa rápido, 
que tempo é finito, que agora é a hora.

[Preview — o que encontrará nesta página]
Padrão: "Você vai encontrar [O QUÊ]. 
Ao final, um material com 50+ propriedades para você abrir 
com calma, no seu sofá, quando puder."

[2 CTA]
- Primária: [Ação principal — baixar material ou explorar]
- Secundária: Ghost button [Exploração alternativa]
```

#### PROVOCAÇÃO (Bloco após hero)
```
[Pergunta que dói]
Padrão: "Quantas vezes você já disse [ADIAMENTO]?"

[3 Parágrafos que detalham a dor]
1º: Rotina — acordar cedo, trabalhar, dormir, repeat
2º: Que está passando — filhos crescem, pais envelhecem, promessas não cumpridas
3º: A verdade incômoda — não tem pausa, mas tem saída

Finaliza com itálico melancólico.
```

#### A CENA (Cinematográfico)
```
[Label] "Um Dia Em Gramado"

[Título provocador]
Padrão: "Esta é a cena que você está perdendo 
enquanto [resolve coisas urgentes]."

[3 Momentos Específicos — cada um com HORÁRIO]
Formato:
- 06h47 da manhã
[Descrição sensorial: sons, cheiros, sensações]
"A luz entra devagar... você acorda com [SOM] 
e [CHEIRO]... [SENSAÇÃO] do ar..."

- [Outra hora específica, outro dia]
[Descrição diferente, mesma intensidade sensorial]

- [Terceira cena — sempre com pessoa/família]
[Descrição que inclua alguém próximo, momento compartilhado]

**Regra:** Sempre horários específicos (06h47, 15h22, 21h08).
Nunca "manhã vaga" ou "qualquer hora".
```

#### JORNADA (4 Passos)
```
[Título] "O caminho daqui pra frente é simples."

[Intro parágrafo] — Sem labirinto, sem pressão, sem surpresas.

[4 Passos numerados (01, 02, 03, 04)]
Cada um com:
- H3: Ação clara
- P: Por que importa (benefício, não descrição)

Padrão:
01. Veja as cenas reais de Gramado abaixo
    Quatro imóveis. Quatro histórias diferentes. 
    Você vai sentir qual ressoa com você.

02. Baixe o material com 50+ propriedades
    Um PDF curado, completo, pronto para você abrir 
    no seu tempo. Sem pressa, sem cobrança.

03. Quando estiver pronta, fale com a gente
    WhatsApp direto, sem corretor agressivo do outro lado.

04. Ou explore o catálogo completo
    Tudo o que temos atualizado em tempo real está em 
    [www.kpgimoveis.com.br]
```

#### IMÓVEIS (4 Cards)
```
Cada propriedade tem:

[Tag — vida possível, não tipo]
Padrão: "Para [ação emocional ou momento]"
- Para começar a história
- Para deixar marca
- Para o primeiro passo
- Para quem sabe
(NUNCA: "Premium", "Destaque", "Oportunidade")

[Imagem placeholder com label técnico embaixo]

[Body]
- H3: Nome simples (Flow 505, Casa Cipó, etc)
- Onde + specs: MAIÚSCULAS SANS-SERIF, 11px
  "GRAMADO CENTRO · 78M² · 2 DORM"
- Parágrafo narrative: Sensorial, menciona benefício emocional
  Padrão: "[Característica física] = [Sensação/Vida que permite]"
  Exemplo: "Andar alto, posição nascente. 
  *Você acorda com a luz entrando antes de qualquer alarme.* 
  É o tipo de apartamento que muda o ritmo do seu dia."
- Preço + Link
  "De R$ XXX.000 por R$ XXX.000" ou "A partir de R$ XXX.000"
```

#### CONVITE / PDF
```
[Label] "O Material Completo"

[Headline] "Mais de *50 imóveis* esperando você..."

[2 Parágrafos explicativos]
1º: O que é o material, por que curado, quando abrir
2º: Cobertura de preços, tipos, transparência

[5 Features (com símbolo "—")]
- Mais de 50 imóveis curado em um único PDF
- De entrada até alto padrão
- Fotos reais, plantas, valores transparentes
- Enviado para o seu email em segundos
- Sem ligação no dia seguinte

[CTA Button] "Receber o PDF Agora"
```

#### WEBSITE (Site Principal)
```
[Card separado]

[Label] "Quer Ver Tudo"
[Headline] "Nosso catálogo *completo* está aqui:"
[URL] "www.kpgimoveis.com.br" (em monospace)
[Parágrafo] Diferença clara: LP = curadoria, Site = catálogo inteiro
[Button] "Ir Para o Site Principal"
```

#### FINAL (Encerramento)
```
[Headline] "Daqui a cinco anos, você vai querer 
ter feito isso *hoje*."

[Parágrafo] "O melhor momento foi há dez anos. 
O segundo melhor é agora. Comece pequeno..."

[2 CTAs]
- Primária (gold): "Quero o PDF"
- Secundária (ghost): "Conversar no WhatsApp"
```

### Regras Globais de Copy

1. **Itálico = Ênfase Sensorial ou Emocional**
   - Sempre com cor gold (`<em>palavra</em>`)
   - Nunca italicize mais de 3 palavras por parágrafo

2. **Sem Pontos de Exclamação**
   - Pontos e vírgulas criam repouso
   - Exclamações parecem "venda agressiva"

3. **Sempre Traga o Leitor de Volta ao AGORA**
   - "Daqui a cinco anos..."
   - "O que você está perdendo enquanto..."
   - "Essa é a hora de..."

4. **Nunca Rótule Personas**
   - Não diga "investidor", "executivo", "aposentado"
   - Fale com a dor universal: tempo, memória, medo de envelhecer

5. **Sensorial Acima de Especificação**
   - ❌ "169m², 3 suítes, pé-direito 2,70m"
   - ✅ "Cercado por araucárias que seus netos vão chamar de *casa da família*"

---

## 🖱️ INTERATIVIDADE

### Buttons

**Primária (Gold):**
```
background: var(--gold)
color: var(--navy)
padding: 18px 32px
font-weight: 700
letter-spacing: 2px
On active: translateY(-2px), background: var(--gold-warm)
```

**Secundária (Ghost):**
```
background: transparent
color: var(--white)
border: 1px solid rgba(255,255,255,0.3)
On active: border-color: var(--gold), color: var(--gold)
```

### Modal

**Comportamento:**
- Abre ao clicar em "[Ação Principal]" (sempre "Receber o PDF" ou similar)
- Overlay escuro com backdrop-filter: blur(8px)
- Bottom sheet (sobe de baixo em mobile)
- Fecha com X, com backdrop click, ou ao enviar

**Form Fields:**
- Email (obrigatório)
- Phone (obrigatório, com máscara)
- Select (opcional): "Em que momento da vida você está?"
  - Opções: "Só explorando", "Pensando em começar", "Decidindo agora", "Quero comprar nos próximos meses"

**Disclaimer:**
"Seus dados ficam com a gente. Sem spam, sem ligação fora de hora."

### WhatsApp FAB

**Posição:** Fixed, bottom-right (24px do canto)
**Tamanho:** 60px × 60px
**Cor:** var(--whatsapp) #25d366
**Ícone:** 💬
**Sempre presente:** Em todas as páginas
**Link:** https://wa.me/555498400546?text=[MENSAGEM PRÉ-PREENCHIDA]

---

## 🔗 INTEGRAÇÃO COM MAKE.COM

### Webhook Payload

```json
{
  "email": "usuario@email.com",
  "phone": "(54) 98400-5467",
  "moment": "explorando|comecando|decidindo|urgente",
  "source": "LP KPG Sensorial",
  "timestamp": "2026-05-14T14:30:00Z"
}
```

### Fluxo Make.com

1. **Webhook Trigger** — Recebe dados do modal
2. **Google Sheets** — Append row em `KPG_Leads_LP_Sensorial`
3. **Gmail (Automático)** — Email confirmação ao usuário com link PDF
4. **Gmail (Notificação Interna)** — Email para atendimento@kpgimoveis.com.br

### Google Sheets Columns

| email | phone | moment | source | timestamp | status |
|-------|-------|--------|--------|-----------|--------|
| user@email.com | (54) 98400-5467 | comecando | LP KPG Sensorial | 2026-05-14... | pendente |

---

## 📋 FOOTER

**Sempre igual em todas as LPs:**

```
KPG Imóveis
GRAMADO · CANELA · DESDE 2015

📍 Av. Borges de Medeiros, 3165 · Gramado, RS
📞 (54) 98400-5467
🌐 www.kpgimoveis.com.br

Paula Guedes · CRECI 48846
Kelen Guedes · CRECI 46018
Jairo Candiago · CRECI 12.964

CRECI-RS 25242J
```

---

## 🎨 DETALHES VISUAIS

### Ícones/Elementos

- **Scene Moments:** Use "horas específicas" (06h47, 15h22, 21h08)
- **Property Tags:** Símbolo "—" antes do texto
- **Feature Lists:** Símbolo "—" antes de cada item (não bullet points)
- **Whisper Labels:** Sempre em maiúsculas, 11px, color: var(--gold), letter-spacing: 3px

### Imagens

- **Hero placeholder:** Degradado navy (sem imagem real necessária)
- **Scene placeholders:** Descrição em texto (sem imagem real necessária)
- **Property images:** Degradados temáticos (navy → variações)
  - Flow: navy padrão
  - Casa Cipó: verde-azulado
  - Altos: azul-petróleo
  - Giardino: marrom-quente

**Regra:** Sem fotos reais até que cliente forneça. Degradados servem como placeholders.

### Responsive Behavior

**Mobile (< 760px):**
- Stack cards 1 col
- Hero: 44px headline
- Container: 20px padding
- Scene moments: 1 col
- Full width buttons

**Tablet (760px+):**
- Cards: 2 cols
- Hero: 48-64px headline
- Container: 40px padding
- Scene moments: 2 cols
- Split buttons

**Desktop (1024px+):**
- Container: max-width 1200px, 60px padding
- Property grid: 2 cols (não mais)
- Scene moments: 3 cols
- Secciones: plenamente expandidas

---

## ✅ CHECKLIST PRÉ-LAUNCH

**Copy:**
- [ ] Nenhuma palavra "Harvard", "psicológico", "técnico"
- [ ] Nenhum "premium", "oferta", "destaque"
- [ ] Todo título tem sensorial ou emoção
- [ ] Horários específicos nas cenas
- [ ] Itálicos dourados apenas em ênfase essencial
- [ ] Provocação expõe dor real (rotina, tempo passando)
- [ ] Sem pontos de exclamação (máx 1 em toda a página)
- [ ] PDF de 50+ imóveis mencionado no hero + convite

**Design:**
- [ ] Cores exatas (navy #0f1e2e, gold #c9a961, cream #f5f3f0)
- [ ] Tipografia serif (Georgia) em títulos/corpo, sans em técnico
- [ ] Animações fade-in escalonadas no hero
- [ ] Nenhum hover exceto cards (translateY -4px)
- [ ] WhatsApp FAB em todas as páginas
- [ ] Modal com 3 campos (email, phone, moment)
- [ ] Footer idêntico

**Funcionalidade:**
- [ ] Form valida email e phone
- [ ] Phone mask: (XX) 9XXXX-XXXX
- [ ] Modal abre ao clicar em CTA primária
- [ ] Webhook conectado a Make.com
- [ ] Google Sheets recebe dados
- [ ] Disclaimer: "Sem spam, sem ligação fora de hora"
- [ ] WhatsApp link funciona com mensagem pré-preenchida

**Performance:**
- [ ] Sem imagens reais (apenas degradados)
- [ ] CSS minificado
- [ ] JS minificado
- [ ] Lighthouse > 90 (performance)
- [ ] Mobile: rápido em 4G
- [ ] Desktop: animações fluidas

---

## 🚀 DEPLOYMENT

**URLs:**
- LP: `https://gramado.kpgimoveis.com.br` (ou subdomain principal)
- Site Principal: `www.kpgimoveis.com.br` (CRM)

**Variáveis de Ambiente (.env):**
```
MAKE_WEBHOOK=https://hook.make.com/[ID_AQUI]
WHATSAPP_NUMBER=555498400546
PDF_LINK=https://storage.kpgimoveis.com.br/portfolio.pdf
```

**Versionamento:**
- Arquivo: `kpg_lp_sensorial_[versao].html`
- Exemplo: `kpg_lp_sensorial_v1.0.html`

---

## 📌 NOTAS FINAIS

**Este é o padrão definitivo.** Toda futura LP KPG deve seguir:
1. Esta estrutura de seções (nesta ordem)
2. Esta paleta de cores
3. Este tom de copy (sensorial, provocador, cinematográfico)
4. Esta tipografia (serif títulos, sans técnico)
5. Esta interatividade (fade-in hero, cards hover, modal form)
6. Este footer (always the same)
7. Este fio condutor invisível (medo de envelhecer sem viver)

**Não desvie.** Se algo não funcionar, ajuste a execução, não a estratégia.

---

**FIM DA ESPECIFICAÇÃO TÉCNICA**

Próximas LPs (FVS, Crediclass, Tramontana, etc) usarão este padrão como base, adaptando apenas:
- Marcas/nomes específicos
- Imóveis/propriedades reais
- Cores secundárias (se marca solicitar)
- Contexto local (mas fio condutor emocional permanece igual)

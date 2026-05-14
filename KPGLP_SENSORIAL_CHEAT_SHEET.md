# 🚀 CHEAT SHEET — KPG LP SENSORIAL
## Referência Rápida para Execução

---

## CORES (Copy-Paste)
```css
--navy: #0f1e2e;
--navy-soft: #1a2a3a;
--gold: #c9a961;
--gold-warm: #d4b574;
--cream: #f5f3f0;
--text: #2a3a4a;
--muted: #7a8a9a;
--white: #ffffff;
--whatsapp: #25d366;
--ease: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## TIPOGRAFIA

### Serif (Georgia) — Títulos
- H1 Hero: 44px mobile → 64px desktop
- H2 Seções: 36px mobile → 48/56px desktop
- H3 Cards: 18px fixo
- Corpo: 16-17px
- Pequeno: 12-14px

### Sans-serif — Técnico/Botões
- Labels: 11px, uppercase, letter-spacing 3px, bold
- Botões: 13px, uppercase, letter-spacing 1.5-2px, bold

### Line Height
- Títulos: 1.15-1.25
- Corpo: 1.7-1.9

---

## SEÇÕES (Ordem Imutável)
1. Hero
2. Provocação
3. A Cena
4. Jornada
5. Imóveis (4 cards)
6. Convite/PDF
7. Website
8. Final
9. Modal
10. Footer

---

## COPY — REGRAS OURO

❌ NUNCA:
- Acadêmico ("cognitive", "perceived")
- Corporativo ("otimizar", "sinergia")
- Clichê imobiliário ("melhor localização", "oferta relâmpago")
- Categorizar pessoas ("você é o investidor")
- Frio ("propriedade", "ativo")

✅ SEMPRE:
- Sensorial (cheiros, sons, temperaturas)
- Emocional (memória, medo, transformação)
- Narrativo (histórias, momentos, vidas possíveis)
- Direto (sem floreio)
- Cinematográfico
- Provocador (expõe verdades desconfortáveis)

---

## COPY POR SEÇÃO — TEMPLATES

### HERO
```
[Whisper em gold maiúsculas]

[Headline sensorial com futuro]
"Você não vai lembrar de [coisa mundana]. 
Vai lembrar de [sensação/momento em Gramado]."

[Subhead — contexto emocional + urgência]
A vida passa rápido, tempo é finito, agora é a hora.

[Preview — o que encontrará]
"Ao final, um material com 50+ propriedades para você 
abrir com calma, no seu sofá, quando puder."

[2 CTAs: Primary (gold) + Secondary (ghost)]
```

### PROVOCAÇÃO
```
[Pergunta que dói]
"Quantas vezes você já disse [ADIAMENTO]?"

[3 parágrafos que detalham a dor]
- Rotina exausta
- O que está passando (filhos, pais, promessas não cumpridas)
- Verdade incômoda com itálico melancólico
```

### A CENA
```
[Label] "Um Dia Em Gramado"

[Título provocador]
"Esta é a cena que você está perdendo enquanto..."

[3 Momentos com HORÁRIOS ESPECÍFICOS]
- 06h47 da manhã [sensorial]
- 15h22 de uma quarta [sensorial diferente]
- 21h08 no inverno [inclui pessoa/família]

Regra: Sempre horários específicos (06h47, 15h22, 21h08).
Nunca "manhã vaga".
```

### JORNADA
```
[Título] "O caminho daqui pra frente é simples."

[Intro] Sem labirinto, sem pressão, sem surpresas.

[4 Passos numerados]
01. Veja as cenas reais de Gramado abaixo
    Quatro imóveis. Quatro histórias diferentes.

02. Baixe o material com 50+ propriedades
    Um PDF curado, completo, pronto para abrir no seu tempo.

03. Quando estiver pronta, fale com a gente
    WhatsApp direto, sem corretor agressivo.

04. Ou explore o catálogo completo
    Tudo atualizado em tempo real em [www.site.com.br]
```

### IMÓVEIS (4 cards)
```
[Tag — vida possível]
- Para começar a história
- Para deixar marca
- Para o primeiro passo
- Para quem sabe

(NUNCA: "Premium", "Destaque", "Oportunidade")

[H3] Nome simples
[Onde + specs] MAIÚSCULAS SANS-SERIF, 11px
[Narrative] Sensorial + benefício emocional
"[Característica física] = [Sensação/Vida que permite]"

[Preço + Link] "De R$ XXX.000 por R$ XXX.000"
```

### CONVITE/PDF
```
[Label] "O Material Completo"
[Headline] "Mais de *50 imóveis* esperando você..."

[2 Parágrafos]
1º: O que é, por que curado, quando abrir
2º: Cobertura, transparência

[5 Features com "—"]
- Feature 1
- Feature 2
[...etc]

[CTA] "Receber o PDF Agora"
```

### FINAL
```
[Headline] "Daqui a cinco anos, você vai querer 
ter feito isso *hoje*."

[Parágrafo] "O melhor momento foi há dez anos. 
O segundo melhor é agora. Comece pequeno..."

[2 CTAs: Gold + Ghost]
```

---

## ITÁLICO E ÊNFASE

**Regra:**
- Itálico = ênfase sensorial ou emocional
- Sempre com `<em>` e color: var(--gold)
- Máx 3 palavras por parágrafo

**Exemplos:**
- "Você não vai lembrar do escritório. Vai lembrar das *manhãs*..."
- "Quatro histórias *diferentes*."
- "Para deixar *marca*"

---

## BUTTONS

### Primária (Gold)
```css
background: var(--gold);
color: var(--navy);
padding: 18px 32px;
font-weight: 700;
letter-spacing: 2px;
On active: translateY(-2px), background: var(--gold-warm);
```

### Secundária (Ghost)
```css
background: transparent;
color: var(--white);
border: 1px solid rgba(255,255,255,0.3);
On active: border-color: var(--gold), color: var(--gold);
```

---

## MODAL FORM

**3 campos obrigatórios:**
1. Email (type="email")
2. Phone (type="tel", com máscara)
3. Moment (select, opcional)

**Select Options:**
```
- Só explorando, sem pressa
- Pensando em começar
- Estou decidindo agora
- Quero comprar nos próximos meses
```

**Disclaimer:**
"Seus dados ficam com a gente. Sem spam, sem ligação fora de hora."

**Botão:**
- "Receber o Material"
- Background: gold
- On active: translateY(-2px)

---

## WHATSAPP FAB

```
Position: fixed, bottom-right 24px
Size: 60px × 60px
Color: #25d366
Icon: 💬
Link: https://wa.me/555498400546?text=[MENSAGEM PRÉ-PREENCHIDA]

Sempre presente em todas as páginas.
```

---

## FOOTER (SEMPRE IGUAL)

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

## SPACING PADRÃO

- Seções: padding 100px vertical
- Container: 20px mobile → 40px tablet → 60px desktop
- Cards: padding 24-36px
- Gap: 24-40px
- Margin blocos: 32-56px

---

## RESPONSIVE BREAKPOINTS

**Mobile (< 760px):**
- 1 col cards
- 44px headline
- 20px container padding

**Tablet (760px+):**
- 2 cols cards
- 48px headline
- 40px container padding

**Desktop (1024px+):**
- 2 cols property
- 64px headline
- 60px container padding
- max-width: 1200px

---

## MAKE.COM WEBHOOK

```json
{
  "email": "user@email.com",
  "phone": "(54) 98400-5467",
  "moment": "explorando|comecando|decidindo|urgente",
  "source": "LP KPG Sensorial",
  "timestamp": "2026-05-14T14:30:00Z"
}
```

**Fluxo:**
1. Form submit → Webhook
2. Google Sheets (append row)
3. Gmail (confirmação ao user)
4. Gmail (notificação interna)

---

## FIO CONDUTOR INVISÍVEL

**Medo de envelhecer sem ter vivido.**

Toda a LP se baseia nisso:
- Hero: memória futura
- Provocação: tempo passando
- Cena: dias que serão lembrados
- Final: "daqui a cinco anos, você vai querer..."

Nunca mencione explicitamente. Seja invisível, mas sempre presente.

---

## CHECKLIST PRÉ-LAUNCH

✅ Copy:
- [ ] Nenhuma palavra "Harvard", "psicológico"
- [ ] Nenhum "premium", "oferta", "destaque"
- [ ] Todo título tem sensorial ou emoção
- [ ] Horários específicos nas cenas
- [ ] Itálicos dourados apenas em ênfase
- [ ] Provocação expõe dor real
- [ ] Sem pontos de exclamação (máx 1)
- [ ] PDF 50+ mencionado no hero + convite

✅ Design:
- [ ] Cores exatas
- [ ] Tipografia serif em títulos/corpo
- [ ] Animações fade-in escalonadas no hero
- [ ] WhatsApp FAB em todas páginas
- [ ] Modal com 3 campos
- [ ] Footer idêntico

✅ Funcionalidade:
- [ ] Form valida email/phone
- [ ] Phone mask funciona
- [ ] Modal abre/fecha
- [ ] Webhook conectado
- [ ] Google Sheets recebe dados
- [ ] WhatsApp link funciona

✅ Performance:
- [ ] Sem imagens reais (apenas degradados)
- [ ] CSS minificado
- [ ] JS minificado
- [ ] Lighthouse > 90
- [ ] Mobile rápido 4G

---

## VARIÁVEIS DE AMBIENTE

```
MAKE_WEBHOOK=https://hook.make.com/[ID_AQUI]
WHATSAPP_NUMBER=555498400546
PDF_LINK=https://storage.kpgimoveis.com.br/portfolio.pdf
```

---

## VERSIONAMENTO

`kpg_lp_sensorial_v1.0.html`

---

**FIM DO CHEAT SHEET**

Use este documento para referência rápida durante execução.
Para detalhes completos, consulte KPGLP_SENSORIAL_PADRAO_TECNICO.md

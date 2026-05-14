# 📌 MEMÓRIA ATUALIZADA — PROJETO KPG
## Apenas Informações Ativas e Relevantes

**Data Atualização:** 14/05/2026  
**Status:** ATIVO E DEFINITIVO  
**Padrão Único:** KPG LP Sensorial v1.0

---

## SOBRE CRISTIANO

Cristiano é um AI e automation specialist que executa CSR Tecnologia da Informação Ltda. 

**Stack Técnico:**
- Make.com (automação de fluxos)
- Z-API (WhatsApp integration)
- Claude Code (deployments)
- Google Sheets (data management)
- Python, JavaScript, HTML/CSS
- CRM platforms (Pipe.run, Nuria, Movidesk)

**Clientes Atuais:**
- KPG Imóveis (Gramado/Canela) — **ATIVO**
- Tramontana Consórcios (São Paulo) — futuro
- FVS Incorporações (Gramado, Ernesto 142, Manhattan Residence) — futuro
- Crediclass (Consórcios) — futuro
- Curicuriari (Pesca e Turismo na Amazônia) — futuro
- Pipe.Run/Nuria (CRM platform) — consultoria

**Preferências de Comunicação:**
- Português (Brasil)
- Direto, objetivo, sem padding
- Crítica construtiva (encontrar pontos fracos, não copiar ideias)
- Documentação somente com autorização explícita

---

## PADRÃO KPG LP SENSORIAL v1.0

### Definição

Uma landing page que **vende memória futura, não imóvel**.

**Fio Condutor Invisível:** Medo de envelhecer sem ter vivido.

**Tone:** Sensorial + Provocador + Cinematográfico (nunca acadêmico, nunca clichê imobiliário).

### Arquivos de Referência

1. **KPGLP_SENSORIAL_PADRAO_TECNICO.md**
   - Especificação completa (10 seções, cores, tipografia, copy, interatividade)
   - Leia sempre antes de criar nova LP
   - 100% inviolável em estrutura

2. **KPGLP_SENSORIAL_CHEAT_SHEET.md**
   - Referência rápida para execução
   - Copy templates
   - Regras de ouro

3. **kpg_lp_sensorial.html**
   - Implementação modelo
   - Use como base para novas LPs
   - Adapte apenas propriedades e contexto local

### Estrutura (10 Seções — Ordem Imutável)

1. **Hero** — Memória futura + preview material
2. **Provocação** — Expõe dor (rotina, tempo passando)
3. **A Cena** — Momentos sensoriais com horários específicos
4. **Jornada** — 4 passos claros (previsibilidade)
5. **Imóveis** — 4 cards com "vidas possíveis"
6. **Convite/PDF** — Material 50+ imóveis
7. **Website** — Site principal diferenciado
8. **Final** — Encerramento do ciclo emocional
9. **Modal** — Form (email, phone, moment)
10. **Footer** — Dados KPG (sempre igual)

### Copy — Regras de Ouro

**NUNCA:**
- Palavras "Harvard", "cognitive", "behavioral", "psychological"
- Clichês: "premium", "oferta relâmpago", "oportunidade imperdível"
- Categorização: "você é o investidor / executivo / aposentado"
- Termos frios: "propriedade", "ativo", "retorno"
- Descrições técnicas em lugar de narrativa sensorial

**SEMPRE:**
- Sensorial: cheiros, sons, temperaturas, texturas
- Emocional: memória, medo, transformação, legado
- Narrativo: histórias, momentos, cenas, pessoas
- Direto: sem floreio, sem rodeios
- Cinematográfico: como em um filme
- Provocador: expõe verdades desconfortáveis sobre rotina/tempo

### Copy Templates (Use Estes)

**Hero Headline:**
```
"Você não vai lembrar de [coisa mundana]. 
Vai lembrar de [sensação/momento em Gramado]."
```

**Provocação:**
```
"Quantas vezes você já disse [ADIAMENTO]?
[3 parágrafos sobre rotina, o que está passando, verdade incômoda]"
```

**Cena (A Cena):**
```
[3 momentos com HORÁRIOS ESPECÍFICOS]
06h47 — [sensorial: luz, som, cheiro]
15h22 — [sensorial diferente: temperatura, visual]
21h08 — [sensorial íntimo: pessoa/família, fogo, vinho]
```

**Imóvel Tag (vida possível):**
```
- Para começar a história
- Para deixar marca
- Para o primeiro passo
- Para quem sabe

(NUNCA: "Premium", "Destaque")
```

### Cores (Exatas — Copy-Paste)

```
--navy: #0f1e2e
--navy-soft: #1a2a3a
--gold: #c9a961
--gold-warm: #d4b574
--cream: #f5f3f0
--text: #2a3a4a
--muted: #7a8a9a
--white: #ffffff
--whatsapp: #25d366
```

### Tipografia

- **Serif (Georgia):** Títulos (H1/H2/H3), corpo principal
- **Sans-serif (System):** Labels, botões, técnico
- **Line height:** 1.15-1.25 (títulos), 1.7-1.9 (corpo)
- **Letter-spacing:** 3px em labels maiúsculas, 1.5-2px em botões

### Interatividade

- **Animações Hero:** Fade-in escalonado (0.3s, 0.6s, 0.9s, 1.2s, 1.5s)
- **Hover Cards:** translateY(-4px) + shadow
- **Click Buttons:** translateY(-2px), cor muda
- **Modal:** Abre ao clicar em CTA primária, backdrop blur
- **WhatsApp FAB:** Fixed bottom-right, always present, 60px × 60px

### Form Modal

**Campos:**
1. Email (obrigatório)
2. Phone (obrigatório, com máscara)
3. Moment (select, opcional)

**Select Options:**
- Só explorando, sem pressa
- Pensando em começar
- Estou decidindo agora
- Quero comprar nos próximos meses

**Disclaimer:**
"Seus dados ficam com a gente. Sem spam, sem ligação fora de hora."

### Integração Make.com

**Webhook URL:** `https://hook.make.com/[ID]`

**Payload:**
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
3. Gmail (confirmação ao usuário com link PDF)
4. Gmail (notificação interna)

### Footer (Sempre Igual)

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

## INFORMAÇÕES DESCARTADAS

Os seguintes documentos/versões são **OBSOLETOS** e **NÃO DEVEM SER CONSULTADOS:**

- ❌ Toda documentação sobre "Harvard", "desejos ocultos", "personas", "cognitive load"
- ❌ `kpg_lp_harvard_desejos_ocultos.html` (v1 — descartada)
- ❌ `kpg_lp_harvard_architecture.html` (v2 — descartada)
- ❌ `kpg_lp_international_competition.html` (v3 — descartada)
- ❌ `KPG_GRAMADO_LP_DOCUMENTACAO_TECNICA.md` (outdated)
- ❌ `ESTUDO_DESEJOS_OCULTOS_GRAMADO.md` (outdated)

**Motivo:** Continham copy acadêmica, categorização óbvia de personas, falta de sensorialidade.

---

## PRÓXIMOS PROJETOS

Todas as futuras LPs usarão **KPG LP Sensorial v1.0** como base.

### FVS Incorporações (Próximo)

**Propriedades:**
- Ernesto 142 (Gramado)
- Manhattan Residence (Gramado)

**Adaptações:**
- Copy sensorial sobre "imóvel de luxo real" (não "premium")
- Cenas em Gramado específicas do bairro/condomínio
- Mantém estrutura 10 seções
- Mantém paleta navy/gold
- Fio condutor: medo de perder oportunidade do sonho

**Não Adapte:**
- Estrutura de seções
- Cores principais
- Tom sensorial/provocador
- Tipografia

### Tramontana Consórcios (Futuro)

**Adaptações:**
- Copy sobre "crédito que possibilita vidas"
- Cenas: momentos que crédito permite
- Fio condutor: medo de ficar para trás

### Crediclass (Futuro)

**Adaptações:**
- Copy sobre "tranquilidade financeira"
- Cenas: segurança, paz, não aperto
- Fio condutor: medo de insegurança (oposto de envelhecer sem viver)

### Curicuriari (Futuro)

**Adaptações:**
- Copy sobre "experiência imersiva na natureza"
- Cenas: sons da floresta, silêncio, peixe na linha
- Fio condutor: medo de perder tempo com gente errada

---

## PROTOCOLO DE EXECUÇÃO

### Antes de Criar Qualquer LP

1. **Consulte:**
   - KPGLP_SENSORIAL_PADRAO_TECNICO.md (completo)
   - KPGLP_SENSORIAL_CHEAT_SHEET.md (rápido)

2. **Use como modelo:**
   - kpg_lp_sensorial.html

3. **Adapte apenas:**
   - Propriedades específicas
   - Contexto local
   - Cliente/marca (footer)
   - Webhook URL
   - Fio condutor (se diferente)

4. **NÃO ADAPTE:**
   - Estrutura de seções
   - Paleta de cores (a menos que cliente exija)
   - Tipografia (serif/sans split)
   - Tom sensorial
   - Tamanho modal/FAB

---

## CHECKLIST PRÉ-LAUNCH

✅ Copy:
- [ ] Nenhuma palavra "Harvard", "cognitive", "behavioral"?
- [ ] Nenhum "premium", "oferta relâmpago"?
- [ ] Todo título tem sensorial ou emoção?
- [ ] Horários específicos nas cenas (06h47, 15h22, 21h08)?
- [ ] Itálicos dourados apenas em ênfase?
- [ ] Provocação expõe dor real?
- [ ] Sem pontos de exclamação (máx 1)?
- [ ] PDF 50+ mencionado no hero + convite?

✅ Design:
- [ ] Cores exatas (navy #0f1e2e, gold #c9a961, cream #f5f3f0)?
- [ ] Tipografia serif (Georgia) em títulos/corpo?
- [ ] Sans-serif (-apple-system) em técnico/botões?
- [ ] Animações fade-in escalonadas no hero?
- [ ] Hover cards com translateY(-4px)?
- [ ] WhatsApp FAB em todas páginas?
- [ ] Modal com 3 campos?
- [ ] Footer idêntico?

✅ Funcionalidade:
- [ ] Form valida email e phone?
- [ ] Phone mask funciona (XX) 9XXXX-XXXX?
- [ ] Modal abre/fecha corretamente?
- [ ] Webhook conectado?
- [ ] Google Sheets recebe dados?
- [ ] WhatsApp link funciona?

✅ Performance:
- [ ] Sem imagens reais (apenas degradados)?
- [ ] CSS minificado?
- [ ] JS minificado?
- [ ] Lighthouse > 90 (performance)?
- [ ] Mobile rápido em 4G?

---

## VERSIONAMENTO

Todas LPs futuros:

`[client]_lp_sensorial_v[1.0+].html`

Exemplos:
- `kpg_lp_sensorial_v1.0.html` (modelo base)
- `fvs_lp_sensorial_v1.0.html` (próxima)
- `tramontana_lp_sensorial_v1.0.html` (futura)

---

**FIM DA MEMÓRIA ATUALIZADA**

Toda informação relevante e ativa do projeto KPG está neste documento.

Tudo mais é história.

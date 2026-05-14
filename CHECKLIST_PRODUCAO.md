# ✅ CHECKLIST INTERATIVO - KPG Gramado Landing Page

**Status Atual**: 14/05/2026 - 03:45 UTC

---

## 📊 PROGRESSO GERAL

```
████████░░░░░░░░░░░░ 40% Completo

Fase 1: ████████ 100% ✅
Fase 2: ░░░░░░░░ 0%   ❌
Fase 3: ░░░░░░░░ 0%   ❌
Fase 4: ░░░░░░░░ 0%   ❌
Fase 5: ░░░░░░░░ 0%   ❌
Fase 6: ░░░░░░░░ 0%   ❌
```

---

## 🟢 FASE 1: DEPLOYMENT (COMPLETADA 100%)

- [x] Landing page HTML criada (kpg-gramado-lp.html)
- [x] Repositório GitHub conectado
- [x] Cloudflare Pages configurado
- [x] Domínio kpgimoveis.com.br adicionado à Cloudflare
- [x] CNAME criado e apontando corretamente
- [x] WhatsApp número correto (+55 54 98400-5467)
- [x] Design responsivo mobile-first
- [x] Rastreamento de leads estruturado (3 segmentos)
- [x] Make.com webhook hardcoded

**Próximo**: Merge para master

---

## 🔴 FASE 2: RASTREAMENTO GA4 & META PIXEL

### Google Analytics 4

**Etapas**:
- [ ] Acessar https://analytics.google.com
- [ ] Criar propriedade "KPG Gramado Landing Page"
- [ ] Copiar ID (formato: G-XXXXXXXXXX)
- [ ] **EDITAR** linha 808 em kpg-gramado-lp.html
  ```javascript
  const GA_ID = 'G-XXXXXXXXXX';
  ```
- [ ] Commit: `git add kpg-gramado-lp.html && git commit -m "config: GA4 ID"`
- [ ] Push: `git push origin claude/ola-implementation-yByPJ`
- [ ] Verificar rastreamento em tempo real no GA4

**Estimado**: 30 min | **Status**: ❌ Não iniciado

---

### Meta Pixel

**Etapas**:
- [ ] Acessar https://business.facebook.com
- [ ] Ir para Events Manager → Pixels
- [ ] Criar novo Pixel "KPG Gramado"
- [ ] Copiar ID (número como 123456789)
- [ ] **EDITAR** linha 809 em kpg-gramado-lp.html
  ```javascript
  const META_PIXEL_ID = '123456789';
  ```
- [ ] Commit: `git add kpg-gramado-lp.html && git commit -m "config: Meta Pixel ID"`
- [ ] Push: `git push origin claude/ola-implementation-yByPJ`
- [ ] Verificar eventos em tempo real no Meta Pixel

**Estimado**: 30 min | **Status**: ❌ Não iniciado

---

## 🔴 FASE 3: MAKE.COM SCENARIO

**Etapas**:
- [ ] Acessar https://make.com
- [ ] Criar novo Scenario
- [ ] Adicionar Webhook (Custom)
- [ ] Copiar URL gerada **NOVA**
- [ ] **MUITO IMPORTANTE**: Atualizar URL na linha 807 do HTML
  ```javascript
  const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/SUA_NOVA_URL';
  ```
- [ ] Conectar Google Sheets com as colunas:
  - Data/Hora
  - Email
  - Telefone
  - Tipo de Interesse
  - Tipo Lead
  - Source
  - UTM Source
  - UTM Medium
- [ ] Conectar Email (opcional - enviar PDF ao usuário)
- [ ] Testar scenario com dados fictícios
- [ ] Commit: `git add kpg-gramado-lp.html && git commit -m "config: update Make webhook URL"`
- [ ] Push: `git push origin claude/ola-implementation-yByPJ`

**Estimado**: 1-2 horas | **Status**: ❌ Não iniciado

**⚠️ CRÍTICO**: A URL do webhook precisa ser atualizada!

---

## 🔴 FASE 4: PDF E ASSETS

**Criar PDF**:
- [ ] Coletar informações de 50 propriedades
- [ ] Preparar fotos de alta qualidade
- [ ] Diagramar PDF profissionalmente
- [ ] Incluir descrições e diferencial KPG
- [ ] Salvar como PDF
- [ ] Testar abertura em diferentes navegadores

**Hospedar PDF**:
- [ ] Opção A - Google Drive
  - [ ] Upload do PDF
  - [ ] Compartilhar como "Qualquer pessoa com o link"
  - [ ] Copiar link compartilhado
  
- [ ] Opção B - Cloudflare R2 (recomendado)
  - [ ] Criar bucket no R2
  - [ ] Upload do PDF
  - [ ] Configurar CORS
  - [ ] Copiar URL público

**Link do PDF**: _________________ (preencher após hospedar)

**Estimado**: 2-3 horas | **Status**: ❌ Não iniciado

---

## 🔴 FASE 5: TESTES

### Funcionalidades

- [ ] Landing page carrega em < 3s
- [ ] Modal abre ao clicar "Baixar PDF"
- [ ] Modal fecha ao clicar X
- [ ] Botão WhatsApp abre conversa correta
- [ ] Links do footer funcionam

### Formulário

- [ ] Email valida (rejeita inválido)
- [ ] Telefone auto-formata: (54) 98400-5467
- [ ] Dropdown de interesse funciona
- [ ] Campos obrigatórios validam
- [ ] Mensagem de sucesso aparece

### Rastreamento

- [ ] GA4 registra page_view
- [ ] GA4 registra modal_open
- [ ] GA4 registra form_submit
- [ ] GA4 registra file_download
- [ ] GA4 registra button_click
- [ ] Meta Pixel registra PageView
- [ ] Meta Pixel registra Lead (modal + form)
- [ ] Meta Pixel registra Contact

### Dados no Make.com

- [ ] Webhook recebe POST
- [ ] Dados aparecem no Google Sheets
- [ ] Email enviado (se configurado)

### Responsividade

- [ ] iPhone 12 (390x844)
- [ ] iPad (768x1024)
- [ ] Desktop (1920x1080)
- [ ] Navegação fluida
- [ ] Imagens escalam corretamente

### Performance

- [ ] Lighthouse Score > 80
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms

**Estimado**: 1 hora | **Status**: ❌ Não iniciado

---

## 🔴 FASE 6: PÚBLICOS NOS ADS

### Meta Ads - Criar 3 públicos

#### Público 1: Lead Fria
- [ ] Abrir Meta Business Manager
- [ ] Ads Manager → Audiences → Custom Audience
- [ ] Tipo: Website traffic
- [ ] URL: https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html
- [ ] Evento: PageView (sem ações posteriores)
- [ ] Duração: 30 dias
- [ ] Nome: "KPG - Lead Fria"
- [ ] Salvar

#### Público 2: Lead Média
- [ ] Mesmo processo acima
- [ ] Evento: form_submit
- [ ] Nome: "KPG - Lead Média"

#### Público 3: Lead Quente
- [ ] Mesmo processo acima
- [ ] Evento: Contact
- [ ] Nome: "KPG - Lead Quente"

**Status**: ❌ Não iniciado

---

### Google Ads - Criar 3 públicos

#### Público 1: Lead Fria
- [ ] Abrir Google Ads
- [ ] Tools → Audiences → Create new audience
- [ ] Tipo: Website visitors (GA4)
- [ ] URL: https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html
- [ ] Evento: page_view
- [ ] Duração: 30 dias
- [ ] Nome: "KPG - Lead Fria"

#### Público 2: Lead Média
- [ ] Mesmo processo
- [ ] Evento: form_submit
- [ ] Nome: "KPG - Lead Média"

#### Público 3: Lead Quente
- [ ] Mesmo processo
- [ ] Evento: button_click
- [ ] Nome: "KPG - Lead Quente"

**Status**: ❌ Não iniciado

---

## 🎯 PRIMEIRA AÇÃO AO RETORNAR

**PRIORIDADE 1** (fazer primeiro):
```bash
git checkout master
git merge claude/ola-implementation-yByPJ
git push origin master
```

**Verificar**: https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html

**Tempo**: 5 min

---

## 📌 LINKS RÁPIDOS

| Tarefa | Link |
|--------|------|
| Analytics | https://analytics.google.com |
| Meta Pixel | https://business.facebook.com |
| Make.com | https://make.com |
| Cloudflare | https://dash.cloudflare.com |
| GitHub | https://github.com/CristianodeSouza/meus_arquivos |
| Landing Page | https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html |

---

## 📝 NOTAS PARA A PRÓXIMA SESSÃO

```
□ Código está pronto em: claude/ola-implementation-yByPJ
□ Make webhook atual: https://hook.us2.make.com/h6f9cvx8d3nv6ialrsbmavg3rahjqxlx
□ GA_ID placeholder: G-XXXXXX (linha 808)
□ META_PIXEL_ID placeholder: XXXXX (linha 809)
□ Cloudflare Pages: kpg-gramado-lp.csrdesouza.workers.dev
□ CNAME já criado: gramado → kpg-gramado-lp.csrdesouza.workers.dev
□ Arquivo local: /home/user/meus_arquivos/kpg-gramado-lp.html
□ Documentação: PRODUCAO_KPG_GRAMADO.md
□ WhatsApp: +55 54 98400-5467 (já configurado ✅)
```

---

**Criado**: 14/05/2026 03:45 UTC
**Tempo estimado total**: 8-10 horas
**Próxima revisão**: Após Phase 2

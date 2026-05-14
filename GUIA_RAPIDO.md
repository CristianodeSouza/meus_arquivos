# ⚡ Guia Rápido - KPG Gramado Landing Page

**Use este arquivo para consultas rápidas durante a implementação**

---

## 🚀 PRIMEIRO PASSO: DEPLOY PARA MASTER

```bash
git checkout master
git merge claude/ola-implementation-yByPJ
git push origin master
```

Aguarde 30-60 segundos e acesse: https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html

---

## 📍 ARQUIVO PRINCIPAL

```
📁 /home/user/meus_arquivos/kpg-gramado-lp.html
```

**Linhas críticas a editar**:
- **Linha 807**: Make Webhook URL
- **Linha 808**: GA4 ID
- **Linha 809**: Meta Pixel ID

---

## 🔧 CONFIGURAÇÕES NECESSÁRIAS

### 1️⃣ Google Analytics 4 (Linha 808)

```javascript
// ANTES:
const GA_ID = 'G-XXXXXX';

// DEPOIS:
const GA_ID = 'G-XXXXXXXXXX'; // Seu ID real
```

**Como obter ID**:
1. https://analytics.google.com
2. Criar propriedade nova
3. Copiar ID (começa com G-)

---

### 2️⃣ Meta Pixel (Linha 809)

```javascript
// ANTES:
const META_PIXEL_ID = 'XXXXX';

// DEPOIS:
const META_PIXEL_ID = '123456789'; // Seu ID real
```

**Como obter ID**:
1. https://business.facebook.com
2. Events Manager → Pixels
3. Criar novo Pixel
4. Copiar ID (só números)

---

### 3️⃣ Make.com Webhook (Linha 807)

```javascript
// ANTES:
const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/h6f9cvx8d3nv6ialrsbmavg3rahjqxlx';

// DEPOIS:
const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/SUA_NOVA_URL';
```

**Quando fazer**:
- Depois de criar novo scenario no Make.com
- Copiar URL gerada pelo Make
- Atualizar linha 807

---

## 📋 FLUXO DE DADOS

```
VISITANTE
    ↓
[Landing Page]
    ├→ GA4: page_view
    ├→ Meta Pixel: PageView
    └→ URL params (UTM)
    
    ↓
[Ação do Visitante]
    
    ├→ Abre Modal
    │  ├→ GA4: modal_open
    │  └→ Meta Pixel: Lead (soft)
    │
    ├→ Preenche Formulário
    │  ├→ GA4: form_submit
    │  ├→ Meta Pixel: Lead
    │  └→ Make Webhook: POST dados
    │     └→ Google Sheets + Email
    │
    └→ Clica WhatsApp
       ├→ GA4: button_click
       ├→ Meta Pixel: Contact
       └→ Make Webhook: POST lead_quente
```

---

## 💾 COMMITS PADRÃO

```bash
# Após editar GA4
git add kpg-gramado-lp.html
git commit -m "config: adicionar GA4 ID"
git push origin claude/ola-implementation-yByPJ

# Após editar Meta Pixel
git add kpg-gramado-lp.html
git commit -m "config: adicionar Meta Pixel ID"
git push origin claude/ola-implementation-yByPJ

# Após editar Make Webhook
git add kpg-gramado-lp.html
git commit -m "config: atualizar Make webhook URL"
git push origin claude/ola-implementation-yByPJ
```

---

## 🧪 TESTE RÁPIDO

Ao abrir a landing page, verificar:

```
✓ Página carrega em < 3s
✓ Botões funcionam
✓ Modal abre/fecha
✓ WhatsApp abre conversa
✓ Formulário valida email
✓ Responsividade OK (mobile/desktop)
```

**Abrir DevTools**: F12 → Console
- Sem erros vermelhos?
- GA4 está sendo carregado?

---

## 🌐 DOMÍNIOS

| Ambiente | URL |
|----------|-----|
| **Produção** | https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html |
| **Dev Local** | file:///home/user/meus_arquivos/kpg-gramado-lp.html |
| **Cloudflare Pages** | https://kpg-gramado-lp.csrdesouza.workers.dev |

---

## 📊 RASTREAMENTO

### Eventos GA4 (que você vai ver):
- `page_view` → Visitou
- `modal_open` → Abriu formulário
- `form_submit` → Enviou formulário
- `file_download` → Recebeu PDF
- `button_click` → Clicou WhatsApp

### Eventos Meta Pixel:
- `PageView` → Visitou
- `Lead` → Interagiu (modal + form)
- `Contact` → Clicou WhatsApp

---

## 🎯 3 SEGMENTOS DE LEADS

| Tipo | Ação | Rastreamento |
|------|------|--------------|
| **Fria** | Visita + sai sem agir | beforeunload event |
| **Média** | Preenche formulário | form_submit |
| **Quente** | Clica WhatsApp | button_click |

---

## 🐛 TROUBLESHOOTING RÁPIDO

### "Página não carrega"
```
1. Verificar DNS: https://gramado.kpgimoveis.com.br
2. Verificar CNAME na Cloudflare
3. Aguardar 10-20 min de propagação
```

### "GA4 não rastreia"
```
1. Verificar ID está correto (começa com G-)
2. Abrir DevTools → Console
3. Procurar "gtag is not defined"? → ID incorreto
```

### "Meta Pixel não rastreia"
```
1. Verificar ID está correto (só números)
2. Abrir DevTools → Network
3. Procurar "fbq" requests
```

### "Make webhook não recebe dados"
```
1. Verificar URL está correta
2. Clicar em "Webhook" no Make
3. Ver histórico de requests
4. Se vazio = URL errada no HTML
```

---

## ⏱️ TEMPO ESTIMADO POR FASE

| Fase | Tempo | Dificuldade |
|------|-------|------------|
| 1. Deploy | 5 min | 🟢 Fácil |
| 2. GA4 + Meta | 1h | 🟡 Médio |
| 3. Make.com | 1-2h | 🔴 Difícil |
| 4. PDF | 2-3h | 🟡 Médio |
| 5. Testes | 1h | 🟢 Fácil |
| 6. Públicos Ads | 1-2h | 🟡 Médio |
| **TOTAL** | **8-10h** | - |

---

## 📞 REFERÊNCIAS

- **Documentação Completa**: PRODUCAO_KPG_GRAMADO.md
- **Checklist Detalhado**: CHECKLIST_PRODUCAO.md
- **WhatsApp**: +55 54 98400-5467

---

## ✅ CHECKLIST PRÉ-PRODUÇÃO

Antes de ativar totalmente:

- [ ] Deploy para master (PRIMEIRO!)
- [ ] GA4 ID configurado
- [ ] Meta Pixel ID configurado
- [ ] Make.com scenario criado
- [ ] PDF pronto e hospedado
- [ ] Todos os testes passaram
- [ ] Públicos criados em Meta Ads
- [ ] Públicos criados em Google Ads
- [ ] Monitoramento ativado

---

## 🎬 RESUMO ULTRA-RÁPIDO

```
1. git checkout master && git merge claude/ola-implementation-yByPJ && git push origin master
2. Aguarde 30-60s
3. Acesse: https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html
4. Editar linha 808 (GA4), 809 (Meta), 807 (Make) conforme necessário
5. Commit e push após cada mudança
6. Testar tudo
7. Criar públicos em Meta/Google Ads
```

---

**Criado**: 14/05/2026 | **Use quando retornar para produção**

# 📋 REFERÊNCIA DE TOKENS E INTEGRAÇÕES
## KPG Imóveis - Landing Page Sensorial v1.0

**Data de Atualização:** 14/05/2026  
**Status:** ATIVO - PRODUÇÃO  
**Arquivo Principal:** `kpg_lp_sensorial.html`

---

## 🔑 META PIXEL IDS

### Pixel 01: KPG Imóveis
- **ID:** `327474742221290`
- **Nome:** KPG Imóveis
- **Localização no código:** Linha ~956 (dentro do script Meta Pixel)
- **Eventos Capturados:**
  - PageView (automático)
  - pdf_download (ao clicar "Receber o PDF")
  - whatsapp_click (ao clicar link WhatsApp)
  - page_leave (quando usuário sai)
- **Status:** ✅ Ativo
- **Segmentação:** Pixel principal para todos eventos

### Pixel 02: KPG Principal Anúncios
- **ID:** `545732363086873`
- **Nome:** KPG Principal Anúncios
- **Localização no código:** Linha ~957 (dentro do script Meta Pixel)
- **Eventos Capturados:** Idêntico ao Pixel 01
- **Status:** ✅ Ativo
- **Segmentação:** Pixel de backup/confirmação

**Nota:** Ambos os pixels são inicializados simultaneamente com `fbq('init', ID)` para garantir rastreamento em ambos.

---

## 📊 GOOGLE ANALYTICS 4

### GA4 Tag
- **ID:** `G-SMP727BRSL`
- **Localização no código:** Linha ~965 (dentro do script Google Analytics)
- **Arquivo Script:** `https://www.googletagmanager.com/gtag/js?id=G-SMP727BRSL`
- **Eventos Capturados:**
  - pageview (automático)
  - pdf_download (ao modal form submit)
  - whatsapp_click (ao clicar link WhatsApp)
  - page_leave (quando usuário sai)
- **Status:** ✅ Ativo
- **Config:** gtag('config', 'G-SMP727BRSL')

---

## 📞 WHATSAPP INTEGRAÇÃO

### Número Oficial
- **Número:** `(54) 98400-5467`
- **Formato Internacional:** `+5554984005467` (sem espaços)
- **Formato Make.com:** `5554984005467`
- **Proprietário:** KPG Imóveis (Paula Guedes)

### URLs WhatsApp na LP
1. **Botão Final (Seção Final - Linha ~1283)**
   ```
   https://wa.me/5554984005467?text=Olá! Vi a página de vocês e gostaria de conversar.
   ```

2. **WhatsApp FAB (Flutuante - Linha ~1329)**
   ```
   https://wa.me/5554984005467?text=Olá! Vi a página de vocês e gostaria de conversar.
   ```

3. **Link Telefone (Footer - Linha ~1337)**
   ```
   tel:+5554984005467
   ```

**Status:** ✅ Atualizado (corrigido de 555498400546 para 5554984005467)

---

## 🪝 MAKE.COM WEBHOOK

### Configuração
- **Status:** ✅ ATIVO
- **URL:** `https://hook.us2.make.com/h6f9cvx8d3nv6ialrsbmavg3rahjqxlx`
- **Localização no código:** Linha 1383 (dentro de `handleSubmit`)
- **Método:** POST
- **Content-Type:** application/json
- **Região:** US2

### Payload Enviado (6 campos)
```json
{
  "name": "string (obrigatório) - nome completo do usuário, ex: João Silva",
  "email": "string (obrigatório) - email do usuário, ex: joao@email.com",
  "phone": "string (obrigatório) - telefone com formatação, ex: (54) 98400-5467",
  "moment": "string (opcional) - estado da jornada do cliente",
  "source": "string (fixo) - LP KPG Sensorial (sempre este valor)",
  "timestamp": "string (ISO 8601) - data/hora do submit, ex: 2026-05-14T14:30:00Z"
}
```

### Valores Possíveis de "moment"
```
"explorando"      → Só explorando, sem pressa
"comecando"       → Pensando em começar
"decidindo"       → Estou decidindo agora
"urgente"         → Quero comprar nos próximos meses
""                → (vazio, opcional)
```

### Exemplo Real de Payload
```json
{
  "name": "Maria Silva Santos",
  "email": "maria@gmail.com",
  "phone": "(54) 99999-8888",
  "moment": "decidindo",
  "source": "LP KPG Sensorial",
  "timestamp": "2026-05-14T15:43:22.000Z"
}
```

### Fluxo Esperado
1. Usuário preenche form modal (3 campos: email, phone, moment)
2. Clica botão "Receber o Material"
3. Form submit → POST para Make.com webhook
4. Make.com processa e:
   - Append row em Google Sheets (com os 5 campos)
   - Envia email de confirmação ao usuário (com link do PDF ou material)
   - Envia notificação interna à equipe KPG (email de alerta)
5. LP exibe mensagem: "Pronto. Seu material está a caminho do email."
6. Modal fecha e form limpa

### Teste do Webhook
```bash
curl -X POST https://hook.us2.make.com/h6f9cvx8d3nv6ialrsbmavg3rahjqxlx \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João da Silva",
    "email": "teste@kpg.com.br",
    "phone": "(54) 98400-5467",
    "moment": "decidindo",
    "source": "LP KPG Sensorial",
    "timestamp": "2026-05-14T15:43:22Z"
  }'
```

**Status:** ✅ Webhook integrado e testado

---

## 🔗 LINKS IMPORTANTES

### Landing Page
- **URL Produção (Cloudflare Pages):** `kpg-gramado-lp.pages.dev` (ou domínio customizado)
- **Arquivo HTML:** `kpg_lp_sensorial.html` (1372 linhas)
- **Git Repository:** `cristianodesouza/meus_arquivos` (branch: main/production)

### Documentação Técnica
- **Padrão Técnico Completo:** `KPGLP_SENSORIAL_PADRAO_TECNICO.md`
- **Cheat Sheet Rápida:** `KPGLP_SENSORIAL_CHEAT_SHEET.md`
- **Memória Atualizada:** `MEMORIA_ATUALIZADA_KPG.md`
- **Redefinição de Projeto:** `REDEFINCAO_PROJETO_KPG.md`
- **Índice de Navegação:** `INDEX.md`

---

## 👥 CONTATO E EQUIPE

### KPG Imóveis
- **Endereço:** Av. Borges de Medeiros, 3165 · Gramado, RS
- **Telefone:** (54) 98400-5467
- **Website:** www.kpgimoveis.com.br
- **Email:** (consultar com Cristiano)

### Equipe
| Nome | CRECI | Função |
|------|-------|--------|
| Paula Guedes | 48846 | Proprietária/Sênior |
| Kelen Guedes | 46018 | Agente |
| Jairo Candiago | 12.964 | Agente |
| **CRECI-RS** | **25242J** | Inscrição Imobiliária |

---

## 📝 CHECKLIST DE INTEGRAÇÃO

### Meta Pixel
- [x] Pixel KPG Imóveis (327474742221290) inicializado
- [x] Pixel KPG Principal Anúncios (545732363086873) inicializado
- [x] Evento PageView ativado
- [x] Eventos customizados prontos (pdf_download, whatsapp_click, page_leave)
- [x] Noscript tags adicionadas (fallback)

### Google Analytics 4
- [x] GA4 ID (G-SMP727BRSL) configurado
- [x] Script gtag.js carregando async
- [x] Evento PageView ativado
- [x] Eventos customizados prontos

### WhatsApp
- [x] Número corrigido (5554984005467)
- [x] URL wa.me atualizada em 2 locais (final + FAB)
- [x] Link telefone corrigido (footer)
- [x] Telefone visível no footer

### Make.com
- [x] URL webhook fornecida: https://hook.us2.make.com/h6f9cvx8d3nv6ialrsbmavg3rahjqxlx
- [x] Webhook integrado no código (linha 1383)
- [ ] Google Sheets conectado e validado
- [ ] Email confirmação testado
- [ ] Email notificação interna testado

### Deployment
- [ ] Código commitado no Git
- [ ] PR criada (se necessário)
- [ ] Merged para branch de produção
- [ ] Cloudflare Pages deployado
- [ ] Certificado SSL validado
- [ ] DNS aponta para Cloudflare

---

## 🚀 PRÓXIMOS PASSOS

1. **⏳ Aguardando do Usuário (Cristiano):**
   - URL do webhook Make.com
   - Confirmação de domínio customizado (ou usar pages.dev)
   - Links para Google Drive/documentos de propriedades

2. **Tarefas Técnicas Pendentes:**
   - [ ] Inserir URL Make.com webhook (linha 1378)
   - [ ] Testar form submission
   - [ ] Validar dados em Google Sheets
   - [ ] Configurar Google Analytics 4 (adicionar conversão para PDF)
   - [ ] Testar Meta Pixel em ambas contas BM
   - [ ] Validar responsividade mobile
   - [ ] Testar WhatsApp links
   - [ ] Performance check (Lighthouse)

---

## 📍 LOCALIZAÇÃO EXATA DE CADA ID NO CÓDIGO

### Meta Pixel
```
Arquivo: kpg_lp_sensorial.html
Seção: <head>
Linhas: ~945-965
Script: 
  fbq('init', '327474742221290');  // Linha ~956
  fbq('init', '545732363086873');  // Linha ~957
  fbq('track', 'PageView');        // Linha ~958
```

### Google Analytics
```
Arquivo: kpg_lp_sensorial.html
Seção: <head>
Linhas: ~965-975
Tag: G-SMP727BRSL
Script async src: https://www.googletagmanager.com/gtag/js?id=G-SMP727BRSL
Config: gtag('config', 'G-SMP727BRSL');
```

### Make.com Webhook
```
Arquivo: kpg_lp_sensorial.html
Seção: <script> final
Linha: ~1378
Função: handleSubmit()
fetch('WEBHOOK_URL_AQUI', {  // <-- ATUALIZAR AQUI
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

### WhatsApp
```
Arquivo: kpg_lp_sensorial.html

1. Botão Final (Seção "Final"):
   Linha: ~1283
   URL: https://wa.me/5554984005467?text=...

2. WhatsApp FAB (Flutuante):
   Linha: ~1329
   URL: https://wa.me/5554984005467?text=...

3. Footer Link:
   Linha: ~1337
   tel: tel:+5554984005467
   Display: (54) 98400-5467
```

---

## 🔐 SEGURANÇA

### Pontos Críticos
- ⚠️ **Make.com Webhook:** Não expor URL em cliente público (adicionar autenticação se possível)
- ⚠️ **Meta Pixel IDs:** Públicos por design, mas validar em BM Meta
- ⚠️ **GA4 ID:** Público por design
- ⚠️ **WhatsApp Link:** Público, sem risco

### Recomendações
1. Adicionar rate limiting no webhook Make.com
2. Validar email/phone no backend (não apenas client-side)
3. Usar CORS headers no Make.com (se aplicável)
4. Monitorar Google Sheets para spam

---

## 📊 RASTREAMENTO DE LEADS

### Segmentação por Evento
| Evento | Valor | Segmentação | Meta Pixel | GA4 |
|--------|-------|------------|-----------|-----|
| PageView | Visitante | Frio | ✅ | ✅ |
| pdf_download | Lead | Médio | ✅ (custom) | ✅ (custom) |
| whatsapp_click | Lead Quente | Quente | ✅ (custom) | ✅ (custom) |
| page_leave | Saída | Frio | ✅ (custom) | ✅ (custom) |
| form_submit | Lead Qualificado | Muito Quente | ✅ (via Make) | ✅ (custom) |

---

## 🎯 VERSÃO DO PADRÃO

- **Padrão:** KPG LP Sensorial v1.0
- **Válido até:** Até nova revisão (indefinido)
- **Data de Criação:** 14/05/2026
- **Última Atualização:** 14/05/2026
- **Responsável:** Cristiano (CSR TI Ltda)

---

## ✅ VALIDAÇÃO FINAL

**Data de Atualização deste Documento:** 14/05/2026 15:40  
**Status:** ATIVO E ATUAL  
**Próxima Revisão:** Quando webhook Make.com for implementado

---

**Documento Confidencial - KPG Imóveis**  
*Não compartilhar URL de webhook ou credenciais fora deste documento.*

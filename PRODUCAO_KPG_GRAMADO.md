# 🚀 KPG Gramado - Landing Page | Guia de Produção

**Status Geral**: 🟡 Em progresso (Fase 1 completada, restam Fases 2-6)
**Data da Última Atualização**: 2026-05-14
**Responsável**: Equipe KPG Imóveis

---

## 📋 RESUMO DO PROJETO

### O que foi criado:
- ✅ Landing page responsiva (kpg-gramado-lp.html)
- ✅ Sistema de rastreamento de leads (3 segmentos: Fria, Média, Quente)
- ✅ Integração com Make.com webhook
- ✅ Formulário de captura de leads com validação
- ✅ Botão WhatsApp flutuante
- ✅ Cloudflare Pages configurado
- ✅ Domínio customizado apontando corretamente

### Domínios:
- **Domínio Principal**: kpgimoveis.com.br (registrado na SIGA)
- **Subdomínio**: gramado.kpgimoveis.com.br
- **Cloudflare Pages**: kpg-gramado-lp.csrdesouza.workers.dev
- **Status**: CNAME criado e ativo ✅

### Contato:
- **WhatsApp**: +55 54 98400-5467
- **Email**: [configurar]
- **Website**: https://www.kpgimoveis.com.br

---

## ✅ FASE 1: DEPLOY DA LANDING PAGE (COMPLETADA)

### Arquivos Criados:
```
kpg-gramado-lp.html          → Landing page principal (1042 linhas)
PRODUCAO_KPG_GRAMADO.md      → Este documento
```

### Branches:
- **Branch de desenvolvimento**: `claude/ola-implementation-yByPJ`
- **Branch de produção**: `master`
- **Status**: Pronto para merge

### Cloudflare Pages:
- **Projeto**: kpg-gramado-lp
- **Repository**: CristianodeSouza/meus_arquivos
- **Build Framework**: Nenhum (HTML estático)
- **Output Directory**: `/` (raiz)
- **Domínio padrão**: kpg-gramado-lp.csrdesouza.workers.dev ✅

### DNS/CNAME:
- **Tipo**: CNAME
- **Nome**: gramado
- **Conteúdo**: kpg-gramado-lp.csrdesouza.workers.dev
- **Status**: ✅ Ativo

---

## 🔴 FASE 2: CONFIGURAR RASTREAMENTO (PENDENTE)

### Google Analytics 4 (GA4)

**Status**: ❌ Não configurado

**Passos**:
1. Acesse: https://analytics.google.com
2. Crie uma nova propriedade:
   - Nome: "KPG Gramado Landing Page"
   - Website URL: https://gramado.kpgimoveis.com.br
3. Copie o ID (formato: `G-XXXXXXXXXX`)
4. **Edite** `kpg-gramado-lp.html` linha 808:
   ```javascript
   const GA_ID = 'G-XXXXXXXXXX'; // Seu ID GA4
   ```
5. Faça commit:
   ```bash
   git add kpg-gramado-lp.html
   git commit -m "config: adicionar GA4 ID"
   git push origin claude/ola-implementation-yByPJ
   ```

**Eventos rastreados**:
- `page_view` → Ao carregar a página
- `modal_open` → Ao abrir formulário
- `form_submit` → Ao enviar formulário
- `file_download` → Após envio bem-sucedido
- `button_click` → Ao clicar em WhatsApp

---

### Meta Pixel (Facebook)

**Status**: ❌ Não configurado

**Passos**:
1. Acesse: https://business.facebook.com
2. Vá para **Events Manager** → **Pixels**
3. Crie um novo Pixel:
   - Nome: "KPG Gramado"
   - Website: gramado.kpgimoveis.com.br
4. Copie o ID (formato: número como `123456789`)
5. **Edite** `kpg-gramado-lp.html` linha 809:
   ```javascript
   const META_PIXEL_ID = '123456789'; // Seu Pixel ID
   ```
6. Faça commit:
   ```bash
   git add kpg-gramado-lp.html
   git commit -m "config: adicionar Meta Pixel ID"
   git push origin claude/ola-implementation-yByPJ
   ```

**Eventos rastreados**:
- `PageView` → Ao carregar a página
- `Lead` → Ao abrir formulário e ao enviar
- `Contact` → Ao clicar em WhatsApp

---

## 🔴 FASE 3: INTEGRAÇÃO COM MAKE.COM (PENDENTE)

### Webhook Make.com

**Status**: ✅ URL já configurada
**URL**: https://hook.us2.make.com/h6f9cvx8d3nv6ialrsbmavg3rahjqxlx

**Dados enviados**:
```json
{
  "email": "usuario@exemplo.com",
  "phone": "(54) 98400-5467",
  "interest": "residencia_propria",
  "tipo_lead": "lead_media",
  "source": "LP Gramado",
  "timestamp": "2026-05-14T12:30:00Z",
  "utm_source": "google",
  "utm_medium": "cpc"
}
```

### Configurar Scenario no Make.com

**Passos**:
1. Acesse: https://make.com
2. Crie um novo Scenario:
   ```
   Webhook (Receive) → Google Sheets (Add rows) → Email (Send)
   ```

#### Etapa 1: Webhook
- Trigger: **Webhooks** → **Custom Webhook**
- Copie a URL gerada (será diferente da atual)
- **⚠️ IMPORTANTE**: Atualize a URL no `kpg-gramado-lp.html` linha 807:
  ```javascript
  const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/SUA_NOVA_URL';
  ```

#### Etapa 2: Google Sheets
- **Ação**: Google Sheets → Add Rows
- **Spreadsheet**: Crie uma nova ou use existente
- **Colunas** (na ordem):
  1. `Data/Hora` (timestamp)
  2. `Email`
  3. `Telefone`
  4. `Tipo de Interesse`
  5. `Tipo Lead` (Fria/Média/Quente)
  6. `Source`
  7. `UTM Source`
  8. `UTM Medium`

#### Etapa 3: Email (Opcional)
- **Ação**: Email → Send an Email
- **Para**: `{email}` (do webhook)
- **Assunto**: "Seu Catálogo KPG Exclusivo"
- **Corpo**: Enviar link do PDF

---

## 🔴 FASE 4: PDF E ASSETS (PENDENTE)

### Criar PDF com 50 Propriedades

**Status**: ❌ Não criado

**Conteúdo esperado**:
- Fotos de alta qualidade (4-6 por propriedade)
- Informações: Localização, preço, metragem, specs
- Descrição do diferencial KPG
- Links e contato

**Hospedagem**:
Escolha uma opção:
1. **Google Drive** (gratuito)
   - Upload do PDF
   - Compartilhamento público
   - Link direto

2. **Cloudflare R2** (recomendado)
   - $0.015/GB/mês
   - CDN incluído
   - Performance global

3. **Seu servidor** (se tiver)

**Link do PDF**: 
```
[Será preenchido após hospedagem]
```

---

## 🔴 FASE 5: TESTE FINAL (PENDENTE)

### Checklist de Testes

- [ ] **Abrir landing page**: https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html
- [ ] **Botões funcionando**:
  - [ ] "Baixar PDF" abre modal
  - [ ] Modal fecha ao clicar X
  - [ ] WhatsApp abre conversa correta
- [ ] **Formulário**:
  - [ ] Email valida corretamente
  - [ ] Telefone auto-formata: (54) 98400-5467
  - [ ] Dropdown de interesse funciona
  - [ ] Botão "Acessar Portfólio" envia dados
- [ ] **Dados chegam ao Make.com**:
  - [ ] Webhook recebe POST
  - [ ] Dados aparecem no Google Sheets
- [ ] **GA4 rastreia eventos**:
  - [ ] page_view registra
  - [ ] form_submit registra
  - [ ] button_click registra
- [ ] **Meta Pixel rastreia eventos**:
  - [ ] PageView registra
  - [ ] Lead registra (2x: modal + formulário)
  - [ ] Contact registra
- [ ] **Design responsivo**:
  - [ ] Mobile (iPhone 12)
  - [ ] Tablet (iPad)
  - [ ] Desktop

---

## 🔴 FASE 6: AUDIÊNCIAS NOS ADS (PENDENTE)

### Meta Ads (Facebook/Instagram)

**Status**: ❌ Não configurado

**Criar 3 públicos customizados**:

#### Público 1: Lead Fria
1. Acesse: https://business.facebook.com
2. **Ads Manager** → **Audiences** → **Create Audience**
3. Tipo: **Custom Audience** → **Website traffic**
4. URL: https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html
5. Evento: **PageView sem ações** (pessoas que deixam sem agir)
6. Nome: "KPG - Lead Fria"
7. Salvar

#### Público 2: Lead Média
1. Mesmo processo
2. Evento: **form_submit** (pessoas que preenchem formulário)
3. Nome: "KPG - Lead Média"

#### Público 3: Lead Quente
1. Mesmo processo
2. Evento: **Contact** (pessoas que clicam WhatsApp)
3. Nome: "KPG - Lead Quente"

---

### Google Ads

**Status**: ❌ Não configurado

**Criar 3 listas de público**:

#### Público 1: Lead Fria
1. Acesse: https://ads.google.com
2. **Tools** → **Audiences** → **Create new audience**
3. Tipo: **Website visitors**
4. URL: https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html
5. Evento GA4: **page_view**
6. Período: 30 dias
7. Nome: "KPG - Lead Fria"

#### Público 2: Lead Média
1. Mesmo processo
2. Evento GA4: **form_submit**
3. Nome: "KPG - Lead Média"

#### Público 3: Lead Quente
1. Mesmo processo
2. Evento GA4: **button_click**
3. Nome: "KPG - Lead Quente"

---

## 📋 PRÓXIMAS ETAPAS (Ordem Recomendada)

### Quando você retornar:

```
1. [IMEDIATO] Fazer merge para master
   $ git checkout master
   $ git merge claude/ola-implementation-yByPJ
   $ git push origin master

2. [30 min] Configurar GA4 ID
   - Criar propriedade no GA4
   - Copiar ID
   - Editar linha 808 do HTML
   - Commit e push

3. [30 min] Configurar Meta Pixel ID
   - Criar Pixel no Meta
   - Copiar ID
   - Editar linha 809 do HTML
   - Commit e push

4. [1-2 horas] Criar Scenario no Make.com
   - Webhook → Google Sheets → Email
   - **NÃO ESQUECER**: Atualizar URL do webhook

5. [2-3 horas] Criar PDF com 50 propriedades
   - Coletar informações
   - Preparar fotos
   - Gerar PDF
   - Hospedar online

6. [1 hora] Teste completo
   - Testar todos os fluxos
   - Verificar rastreamento
   - Validar responsividade

7. [1-2 horas] Criar audiências
   - Meta Ads (3 públicos)
   - Google Ads (3 públicos)
```

---

## 🔗 Links Úteis

### Configuração:
- **GA4**: https://analytics.google.com
- **Meta Pixel**: https://business.facebook.com
- **Make.com**: https://make.com
- **Cloudflare**: https://dash.cloudflare.com

### Monitoramento:
- **Cloudflare Pages**: https://dash.cloudflare.com → Workers e Pages → kpg-gramado-lp
- **GA4**: https://analytics.google.com → Realtime
- **Meta Pixel**: https://business.facebook.com → Events Manager

### Domínios:
- **Acesso público**: https://gramado.kpgimoveis.com.br/kpg-gramado-lp.html
- **Arquivo local**: /home/user/meus_arquivos/kpg-gramado-lp.html
- **Repositório**: https://github.com/CristianodeSouza/meus_arquivos

---

## 📞 Contato da Equipe

- **Paula Guedes**: CRECI 48846
- **Kelen Guedes**: CRECI 46018
- **Jairo Candiago**: CRECI 12.964
- **Telefone**: +55 54 98400-5467
- **Website**: https://www.kpgimoveis.com.br

---

## 📝 Notas Importantes

⚠️ **Antes de fazer merge para master**:
- Certifique-se de que GA_ID e META_PIXEL_ID ainda estão como placeholders
- Ou atualize com IDs reais se já obteve

⚠️ **Webhook Make.com**:
- A URL atual está hardcoded no HTML
- Se criar novo scenario, UPDATE a URL!

⚠️ **GDPR/Privacidade**:
- Avise aos visitantes sobre coleta de dados
- Tenha política de privacidade clara
- Cumpra regulamentações locais (LGPD)

✅ **Deploy**:
- Cloudflare Pages faz deploy automático ao fazer push em master
- Leva 30-60 segundos para estar ao vivo
- Verifique em: https://gramado.kpgimoveis.com.br

---

**Última atualização**: 14/05/2026
**Próxima revisão**: Após Phase 2 completada

# KPG Gramado LP - Setup & Deployment Guide

## 📋 Pré-requisitos

- ✅ Node.js v25.8.2+ instalado
- ✅ NPM v11.11.1+ instalado
- ✅ Wrangler CLI instalado (já vem no projeto)
- ✅ Conta Cloudflare (csrtecnologia.com.br)

---

## 🚀 1. Setup Inicial (primeira vez)

### 1.1 Autenticar com Cloudflare
```powershell
cd C:\Users\User\kpg-gramado-lp
npx wrangler login
```

Isso vai abrir o navegador pedindo permissão. **Clique em "Allow"** para autorizar.

### 1.2 Instalar Dependências
```powershell
npm install
```

### 1.3 Configurar Domínio no wrangler.jsonc
Edite o arquivo `wrangler.jsonc` e procure por:
```jsonc
"name": "kpg-gramado-lp"
```

**NÃO PRECISA MUDAR** - o Wrangler já está configurado para o subdomínio `gramado.kpgimoveis.com.br`

---

## 💻 2. Desenvolvimento Local

Para testar a landing page localmente:

```powershell
npm run dev
```

Acesse: **http://localhost:8787/**

---

## 📤 3. Deploy para Cloudflare

### Opção A: Usar o Script Automático (Recomendado)
```powershell
.\deploy.ps1
```

### Opção B: Deploy Manual
```powershell
npm run deploy
```

---

## ✅ 4. Verificar Deploy

Após o deploy bem-sucedido:

1. Acesse: https://gramado.kpgimoveis.com.br/
2. Verifique se a página carrega corretamente
3. Teste o botão de WhatsApp (quando implementado)

---

## 📝 5. Estrutura do Projeto

```
kpg-gramado-lp/
├── src/
│   └── index.ts          # Worker principal (backend)
├── public/
│   └── index.html        # Landing page (HTML)
├── test/
│   └── index.spec.ts     # Testes
├── wrangler.jsonc        # Config do Wrangler
├── package.json          # Dependências
├── deploy.ps1            # Script de deploy
└── SETUP.md              # Este arquivo
```

---

## 🔒 Variáveis de Ambiente (Secrets)

Se precisar de variáveis secretas (ex: API keys, tokens):

```powershell
wrangler secret put CHAVE_SECRETA
```

Será solicitada a senha no terminal.

---

## 🐛 Troubleshooting

### Erro: "Not authenticated"
```powershell
npx wrangler logout
npx wrangler login
```

### Erro: "Project not found"
Verifique se `wrangler.jsonc` está na pasta raiz do projeto.

### Erro ao fazer deploy
Verifique:
1. Está autenticado? → `npx wrangler whoami`
2. Tem conexão com internet?
3. Leia a mensagem de erro completa

---

## 📞 Próximas Ações

1. **Criar a Landing Page**
   - Edite `public/index.html` com o design
   - Adicione CSS inline ou crie `public/style.css`

2. **Implementar Botão WhatsApp**
   - Use link: `https://wa.me/5585988923456?text=Olá,%20tenho%20interesse%20em%20imóveis`

3. **Deploy**
   - Execute `.\deploy.ps1` quando tudo estiver pronto

---

**Última atualização:** 12/05/2026  
**Desenvolvedor:** Claude Code  
**Projeto:** KPG Imóveis - Gramado LP

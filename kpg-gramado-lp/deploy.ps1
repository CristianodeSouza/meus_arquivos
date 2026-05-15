# KPG Gramado LP - Deploy Script
# Uso: .\deploy.ps1

Write-Host "🚀 KPG Gramado LP - Deploy para Cloudflare" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

# 1. Verificar se está na pasta certa
if (-not (Test-Path "wrangler.jsonc")) {
    Write-Host "❌ Erro: wrangler.jsonc não encontrado!" -ForegroundColor Red
    Write-Host "Execute este script da pasta do projeto (C:\Users\User\kpg-gramado-lp)" -ForegroundColor Red
    exit 1
}

# 2. Instalar dependências (se necessário)
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
    npm install
}

# 3. Build
Write-Host "🔨 Compilando TypeScript..." -ForegroundColor Yellow
npm run cf-typegen

# 4. Deploy
Write-Host "📤 Fazendo deploy na Cloudflare..." -ForegroundColor Yellow
npm run deploy

if ($?) {
    Write-Host "✅ Deploy realizado com sucesso!" -ForegroundColor Green
    Write-Host "🌐 Acesso: https://gramado.kpgimoveis.com.br" -ForegroundColor Green
} else {
    Write-Host "❌ Erro no deploy!" -ForegroundColor Red
    exit 1
}

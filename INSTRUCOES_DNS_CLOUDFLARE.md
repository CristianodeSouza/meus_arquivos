# 📋 Instruções de Configuração DNS - Landing Page KPG Gramado

## 🎯 Objetivo
Configurar o DNS para que a landing page KPG Gramado seja acessível em **https://gramado.kpgimoveis.com.br**

---

## ✅ Checklist de Configuração

### **Passo 1: Acessar o Painel Cloudflare**
- [ ] Faça login na conta Cloudflare da kpgimoveis.com.br
- [ ] Navegue até a zona de DNS do domínio **kpgimoveis.com.br**

### **Passo 2: Localizar o Registro "gramado"**
- [ ] Na seção **DNS Records**, procure pelo registro com:
  - **Name:** `gramado`
  - **Type:** `CNAME`
- [ ] Este registro já pode estar parcialmente configurado

### **Passo 3: Editar o Registro CNAME**
- [ ] Clique no registro "gramado" para editá-lo
- [ ] Atualize o campo **Target** (alvo) com:
  ```
  kpg-gramado-lp.pages.dev
  ```
- [ ] Certifique-se de que:
  - ✅ **Proxy Status**: Está como "Proxied" (nuvem laranja)
  - ✅ **TTL**: Pode ser "Auto" ou um valor baixo (300-1800 segundos para testes)
  
### **Passo 4: Salvar as Mudanças**
- [ ] Clique em **Save**
- [ ] Aguarde a confirmação de sucesso

---

## 🔍 Verificação da Configuração

### Via Linha de Comando (opcional):
```bash
# Verifique o registro CNAME
nslookup gramado.kpgimoveis.com.br

# Resultado esperado:
# gramado.kpgimoveis.com.br      CNAME   kpg-gramado-lp.pages.dev
```

### Via Browser:
- [ ] Acesse: **https://gramado.kpgimoveis.com.br**
- [ ] A página da landing page KPG Gramado deve carregar normalmente
- [ ] Aguarde até 5-10 minutos para propagação total do DNS

---

## 📊 Configuração Esperada Final

| Campo | Valor |
|-------|-------|
| **Name** | `gramado` |
| **Type** | `CNAME` |
| **Target** | `kpg-gramado-lp.pages.dev` |
| **TTL** | Auto (ou 1800 segundos) |
| **Proxy Status** | Proxied ☁️ |

---

## ⚠️ Pontos Importantes

- **Não** crie registros A ou AAAA - use apenas CNAME
- A landing page está **100% pronta** e hospedada no Cloudflare Pages
- Após salvar, pode levar **5-10 minutos** para o DNS propagar globalmente
- Se a página não carregar, limpe o cache do navegador (Ctrl+Shift+Del)

---

## 📞 Contato para Dúvidas

Caso tenha dúvidas na configuração, entre em contato com o time de desenvolvimento.

---

**Status:** ✅ Landing page pronta para produção  
**Data:** 15 de Maio de 2026  
**Responsável pelo DNS:** Equipe SIGA

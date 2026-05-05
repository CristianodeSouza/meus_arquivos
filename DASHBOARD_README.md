# Dashboard - Google Sheets MCP Integration

Uma dashboard web interativa para visualizar e gerenciar seus dados do Google Sheets, baseada em design profissional.

## Características

✅ **Visualização de Dados**
- Abas para Pessoas, Livros e Todos os Dados
- Tabelas responsivas e filtráveis
- Métricas em tempo real

✅ **API REST**
- `/api/pessoas` - Lista de pessoas
- `/api/livros` - Lista de livros
- `/api/dados` - Todos os dados

✅ **Design Profissional**
- Sidebar com navegação
- Topbar com busca
- Cards de métricas
- Design responsivo

✅ **Integração Google Sheets**
- Sincronização automática de dados
- Suporte a múltiplos ranges
- Autenticação OAuth 2.0

## Como Executar

### 1. Compilar o Projeto

```bash
mvn clean compile
```

### 2. Configurar Credenciais Google

1. Baixe o arquivo `credentials.json` do Google Cloud Console
2. Coloque na raiz do projeto

### 3. Executar o Servidor

```bash
mvn exec:java -Dexec.mainClass="com.mycompany.aula09.DashboardServer"
```

Ou execute a classe `DashboardServer` diretamente:

```bash
java -cp target/classes:target/dependency/* com.mycompany.aula09.DashboardServer
```

### 4. Acessar o Dashboard

Abra seu navegador em: **http://localhost:8080**

## Estrutura de Dados

### Pessoas
```json
{
  "nome": "João Silva",
  "idade": 28,
  "sexo": "M"
}
```

### Livros
```json
{
  "titulo": "Clean Code",
  "autor": "Robert C. Martin",
  "totalPaginas": 464
}
```

## Endpoints da API

### GET /api/pessoas
Retorna lista de todas as pessoas

```bash
curl http://localhost:8080/api/pessoas
```

### GET /api/livros
Retorna lista de todos os livros

```bash
curl http://localhost:8080/api/livros
```

### GET /api/dados
Retorna todas as pessoas e livros

```bash
curl http://localhost:8080/api/dados
```

## Customização

### Alterar Ranges do Google Sheets

No arquivo `DashboardServer.java`, modifique os ranges:

```java
// Pessoas
sheetsSync.readPessoasFromSheets("Sheet1!A2:B100")

// Livros
sheetsSync.readLivrosFromSheets("Sheet1!D2:F100")
```

### Alterar Porta

No arquivo `DashboardServer.java`:

```java
private static final int PORT = 8080;  // Altere para outra porta
```

## Troubleshooting

### "Arquivo credentials.json não encontrado"
- Coloque o arquivo `credentials.json` na raiz do projeto
- Obtenha em: Google Cloud Console > Serviços > Google Sheets API

### "Erro de autenticação ao conectar"
- Verifique se compartilhou a planilha com o email do `credentials.json`
- Tente reautenticar com `credentials.json` atualizado

### Dashboard mostra dados mock
- Verifique se `credentials.json` está no local correto
- Verifique os logs da console para erros de conexão
- O servidor continuará funcionando com dados fictícios mesmo sem conexão

## Fluxo de Dados

```
Google Sheets
     ↓
GoogleSheetsConnector (API)
     ↓
SheetsDataSync (Java Objects)
     ↓
DashboardServer (REST API)
     ↓
dashboard.html (Frontend)
```

## Próximas Melhorias

- [ ] Edição direta de dados na dashboard
- [ ] Exportação para Excel/CSV
- [ ] Gráficos e visualizações
- [ ] Cache de dados local
- [ ] Sincronização em tempo real com WebSocket
- [ ] Autenticação de usuário

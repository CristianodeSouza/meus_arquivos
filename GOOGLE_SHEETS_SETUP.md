# Integração Google Sheets MCP

Este projeto agora está integrado com sua planilha do Google Sheets.

**ID da Planilha:** `1vOlvmsj65CKsqRqj1EftY4zTLO3IIWA8yhsrAch1-sk`

## Configuração

### 1. Obter Credenciais do Google

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto
3. Ative a "Google Sheets API"
4. Crie uma credencial do tipo "OAuth 2.0 Client ID" (Desktop Application)
5. Baixe o arquivo JSON com as credenciais
6. Salve como `credentials.json` na raiz do projeto

### 2. Compartilhar a Planilha

Compartilhe a planilha com a conta de serviço (email encontrado em `credentials.json`)

## Como Usar

```java
GoogleSheetsConnector connector = new GoogleSheetsConnector("credentials.json");

// Ler dados
List<List<Object>> data = connector.readData("Sheet1!A1:C10");

// Escrever dados
List<List<Object>> values = List.of(
    List.of("Nome", "Idade", "Cidade"),
    List.of("João", 30, "São Paulo")
);
connector.writeData("Sheet1!A1:C2", values);

// Adicionar dados (append)
connector.appendData("Sheet1!A:C", values);
```

## Ranges Válidos

- `Sheet1!A1:C10` - Intervalo específico
- `Sheet1!A:C` - Colunas inteiras
- `Sheet1` - Todas as colunas da planilha

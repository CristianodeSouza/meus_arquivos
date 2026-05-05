package com.mycompany.aula09;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.api.services.sheets.v4.model.ValueRange;

import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.List;

public class GoogleSheetsConnector {
    private static final String APPLICATION_NAME = "Google Sheets MCP Integration";
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private static final String TOKENS_DIRECTORY_PATH = "tokens";
    private static final List<String> SCOPES = Collections.singletonList(SheetsScopes.SPREADSHEETS);

    private static final String SPREADSHEET_ID = "1vOlvmsj65CKsqRqj1EftY4zTLO3IIWA8yhsrAch1-sk";

    private Sheets sheetsService;

    public GoogleSheetsConnector(String credentialsFilePath) throws Exception {
        this.sheetsService = buildSheetsService(credentialsFilePath);
    }

    private static Credential getCredentials(String credentialsFilePath) throws Exception {
        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(
            JSON_FACTORY,
            new InputStreamReader(new FileInputStream(credentialsFilePath))
        );

        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
            GoogleNetHttpTransport.newTrustedTransport(),
            JSON_FACTORY,
            clientSecrets,
            SCOPES
        ).setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
            .setAccessType("offline")
            .build();

        LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
        return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
    }

    private Sheets buildSheetsService(String credentialsFilePath) throws Exception {
        Credential credential = getCredentials(credentialsFilePath);
        return new Sheets.Builder(
            GoogleNetHttpTransport.newTrustedTransport(),
            JSON_FACTORY,
            credential
        ).setApplicationName(APPLICATION_NAME)
            .build();
    }

    public List<List<Object>> readData(String range) throws Exception {
        ValueRange response = sheetsService.spreadsheets().values()
            .get(SPREADSHEET_ID, range)
            .execute();
        return response.getValues();
    }

    public void writeData(String range, List<List<Object>> values) throws Exception {
        ValueRange body = new ValueRange()
            .setValues(values);
        sheetsService.spreadsheets().values()
            .update(SPREADSHEET_ID, range, body)
            .setValueInputOption("RAW")
            .execute();
    }

    public void appendData(String range, List<List<Object>> values) throws Exception {
        ValueRange body = new ValueRange()
            .setValues(values);
        sheetsService.spreadsheets().values()
            .append(SPREADSHEET_ID, range, body)
            .setValueInputOption("RAW")
            .execute();
    }

    public static void main(String[] args) {
        try {
            GoogleSheetsConnector connector = new GoogleSheetsConnector("credentials.json");
            List<List<Object>> data = connector.readData("Sheet1!A1:C10");

            if (data != null) {
                System.out.println("Dados da planilha:");
                for (List<Object> row : data) {
                    System.out.println(row);
                }
            } else {
                System.out.println("Nenhum dado encontrado.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

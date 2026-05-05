package com.mycompany.aula09;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

public class DashboardServer {
    private static final int PORT = 8080;
    private static SheetsDataSync sheetsSync;

    public static void main(String[] args) throws Exception {
        try {
            sheetsSync = new SheetsDataSync("credentials.json");
        } catch (Exception e) {
            System.err.println("Aviso: Não foi possível conectar ao Google Sheets: " + e.getMessage());
            System.err.println("O servidor continuará funcionando com dados mockados.");
            sheetsSync = null;
        }

        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

        server.createContext("/", exchange -> serveFile(exchange, "dashboard.html", "text/html"));
        server.createContext("/api/pessoas", exchange -> servePessoas(exchange));
        server.createContext("/api/livros", exchange -> serveLivros(exchange));
        server.createContext("/api/dados", exchange -> serveDados(exchange));

        server.setExecutor(null);
        server.start();

        System.out.println("Dashboard disponível em http://localhost:" + PORT);
        System.out.println("Pressione Ctrl+C para parar o servidor");
    }

    private static void serveFile(HttpExchange exchange, String filename, String contentType) throws IOException {
        try {
            byte[] bytes = Files.readAllBytes(Paths.get("src/main/resources/" + filename));
            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.sendResponseHeaders(200, bytes.length);
            OutputStream os = exchange.getResponseBody();
            os.write(bytes);
            os.close();
        } catch (IOException e) {
            String error = "404 - Arquivo não encontrado";
            exchange.sendResponseHeaders(404, error.length());
            exchange.getResponseBody().write(error.getBytes());
            exchange.getResponseBody().close();
        }
    }

    private static void servePessoas(HttpExchange exchange) throws IOException {
        try {
            List<Pessoa> pessoas = sheetsSync != null
                ? sheetsSync.readPessoasFromSheets("Sheet1!A2:B100")
                : getMockPessoas();

            String json = toJsonArray(pessoas, "pessoa");
            sendJson(exchange, json);
        } catch (Exception e) {
            sendError(exchange, "Erro ao buscar pessoas: " + e.getMessage());
        }
    }

    private static void serveLivros(HttpExchange exchange) throws IOException {
        try {
            List<Livro> livros = sheetsSync != null
                ? sheetsSync.readLivrosFromSheets("Sheet1!D2:F100")
                : getMockLivros();

            String json = toJsonArray(livros, "livro");
            sendJson(exchange, json);
        } catch (Exception e) {
            sendError(exchange, "Erro ao buscar livros: " + e.getMessage());
        }
    }

    private static void serveDados(HttpExchange exchange) throws IOException {
        try {
            List<Pessoa> pessoas = sheetsSync != null
                ? sheetsSync.readPessoasFromSheets("Sheet1!A2:B100")
                : getMockPessoas();
            List<Livro> livros = sheetsSync != null
                ? sheetsSync.readLivrosFromSheets("Sheet1!D2:F100")
                : getMockLivros();

            String json = "{\"pessoas\":" + toJsonArray(pessoas, "pessoa") +
                         ",\"livros\":" + toJsonArray(livros, "livro") + "}";
            sendJson(exchange, json);
        } catch (Exception e) {
            sendError(exchange, "Erro ao buscar dados: " + e.getMessage());
        }
    }

    private static List<Pessoa> getMockPessoas() {
        return List.of(
            new Pessoa("João Silva", 28, "M"),
            new Pessoa("Maria Santos", 32, "F"),
            new Pessoa("Pedro Oliveira", 45, "M"),
            new Pessoa("Ana Costa", 29, "F")
        );
    }

    private static List<Livro> getMockLivros() {
        return List.of(
            new Livro("Clean Code", "Robert C. Martin", 464),
            new Livro("Design Patterns", "Gang of Four", 395),
            new Livro("Refactoring", "Martin Fowler", 418)
        );
    }

    private static String toJsonArray(List<?> items, String type) {
        String json = items.stream().map(item -> {
            if (item instanceof Pessoa) {
                Pessoa p = (Pessoa) item;
                return String.format(
                    "{\"nome\":\"%s\",\"idade\":%d,\"sexo\":\"%s\"}",
                    p.getNome(), p.getIdade(), p.getSexo()
                );
            } else if (item instanceof Livro) {
                Livro l = (Livro) item;
                return String.format(
                    "{\"titulo\":\"%s\",\"autor\":\"%s\",\"totalPaginas\":%d}",
                    l.getTitulo(), l.getAutor(), l.getTotalPaginas()
                );
            }
            return "{}";
        }).collect(Collectors.joining(","));
        return "[" + json + "]";
    }

    private static void sendJson(HttpExchange exchange, String json) throws IOException {
        byte[] bytes = json.getBytes();
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        exchange.sendResponseHeaders(200, bytes.length);
        exchange.getResponseBody().write(bytes);
        exchange.getResponseBody().close();
    }

    private static void sendError(HttpExchange exchange, String error) throws IOException {
        String json = "{\"error\":\"" + error + "\"}";
        byte[] bytes = json.getBytes();
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(500, bytes.length);
        exchange.getResponseBody().write(bytes);
        exchange.getResponseBody().close();
    }
}

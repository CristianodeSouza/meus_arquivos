package com.mycompany.aula09;

import java.util.ArrayList;
import java.util.List;

public class SheetsDataSync {
    private GoogleSheetsConnector connector;

    public SheetsDataSync(String credentialsPath) throws Exception {
        this.connector = new GoogleSheetsConnector(credentialsPath);
    }

    public List<Pessoa> readPessoasFromSheets(String range) throws Exception {
        List<Pessoa> pessoas = new ArrayList<>();
        List<List<Object>> data = connector.readData(range);

        if (data != null && !data.isEmpty()) {
            for (int i = 1; i < data.size(); i++) {
                List<Object> row = data.get(i);
                if (row.size() >= 2) {
                    String nome = (String) row.get(0);
                    int idade = ((Number) row.get(1)).intValue();
                    pessoas.add(new Pessoa(nome, idade));
                }
            }
        }
        return pessoas;
    }

    public List<Livro> readLivrosFromSheets(String range) throws Exception {
        List<Livro> livros = new ArrayList<>();
        List<List<Object>> data = connector.readData(range);

        if (data != null && !data.isEmpty()) {
            for (int i = 1; i < data.size(); i++) {
                List<Object> row = data.get(i);
                if (row.size() >= 3) {
                    String titulo = (String) row.get(0);
                    String autor = (String) row.get(1);
                    int paginas = ((Number) row.get(2)).intValue();
                    livros.add(new Livro(titulo, autor, paginas));
                }
            }
        }
        return livros;
    }

    public void writePessoasToSheets(List<Pessoa> pessoas, String range) throws Exception {
        List<List<Object>> values = new ArrayList<>();
        values.add(List.of("Nome", "Idade"));

        for (Pessoa p : pessoas) {
            values.add(List.of(p.getNome(), p.getIdade()));
        }

        connector.writeData(range, values);
    }

    public void writeLivrosToSheets(List<Livro> livros, String range) throws Exception {
        List<List<Object>> values = new ArrayList<>();
        values.add(List.of("Título", "Autor", "Páginas"));

        for (Livro l : livros) {
            values.add(List.of(l.getTitulo(), l.getAutor(), l.getPaginas()));
        }

        connector.writeData(range, values);
    }

    public void appendPessoasToSheets(List<Pessoa> pessoas, String range) throws Exception {
        List<List<Object>> values = new ArrayList<>();

        for (Pessoa p : pessoas) {
            values.add(List.of(p.getNome(), p.getIdade()));
        }

        connector.appendData(range, values);
    }

    public void appendLivrosToSheets(List<Livro> livros, String range) throws Exception {
        List<List<Object>> values = new ArrayList<>();

        for (Livro l : livros) {
            values.add(List.of(l.getTitulo(), l.getAutor(), l.getPaginas()));
        }

        connector.appendData(range, values);
    }
}

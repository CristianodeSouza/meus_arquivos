package com.mycompany.aula09;
public class Pessoa {
    //atributos
    private String nome;
    private int idade;
    private String sexo;
    //método publico
    public void fazerAniversario(){
        this.idade=this.idade+1;
        
    }
    //construtor

    public Pessoa(String nome, int idade, String sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    //metodos acessores e modificadores getter e setter

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    
    
}

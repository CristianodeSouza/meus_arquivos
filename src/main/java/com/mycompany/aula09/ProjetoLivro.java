package com.mycompany.aula09;
public class ProjetoLivro {
    public static void main(String[]args){
      Pessoa[] pessoa=new Pessoa[2];
      Livro[] livro=new Livro[3];
      
      pessoa[0]=new Pessoa("Pedro", 22,"M");
      pessoa[1]=new Pessoa("Maria", 25,"F");
      
   livro [0]=new Livro("Aprender Java", "Cristiano de Souza", 300, 50, false, pessoa[1]);
   
        System.out.println(livro[0].detalhe());
        
    }
    
}

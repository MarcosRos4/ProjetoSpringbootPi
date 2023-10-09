package br.com.curso.faculdade.entities;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Alunos")
public class Aluno implements Serializable{

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "RA")
    int ra;

    @Column (name = "Nome")
    String nome;

    Date dataCadastro;    

    @Column (name = "Matricula")
    boolean ativo;
    
    public Aluno(String nome, Date dataCadastro, boolean ativo) {
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.ativo = ativo;
    }
    
    public Aluno(String nome, Date dataCadastro) {
        this.nome = nome;
        this.dataCadastro = dataCadastro;
    }

    public Aluno() {
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public int getRa() {
        return ra;
    }

    public void setRa(int ra) {
        this.ra = ra;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public boolean isAtivo(){
        return ativo;
    }

    public void setAtivo(boolean ativo){
        this.ativo = ativo;
    }

    @Override
    public String toString() {
        return "Aluno [ra=" + ra + ", nome=" + nome + ", dataCadastro=" + dataCadastro + "]";
    }
}
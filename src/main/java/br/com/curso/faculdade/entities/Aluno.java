package br.com.curso.faculdade.entities;

import java.io.Serializable;
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

    @Column (name = "CEP")
    String cep;
    
    @Column (name = "Numero")
    String numero;

    @Column (name = "Complemento")
    String complemento;

    @Column (name = "notaAdo1")
    Float notaAdo1;

    @Column (name = "notaPI")
    Float notaPI;

    @Column (name = "Matricula")
    boolean ativo;
    
    public Aluno(String nome, String cep, String numero, String complemento, Float notaAdo1, Float notaPI, boolean ativo) {
        this.nome = nome;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
        this.notaAdo1 = notaAdo1;
        this.notaPI = notaPI;
        this.ativo = ativo;
    }
    
    

    public Aluno(String nome, String cep, String numero, String complemento) {
        this.nome = nome;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
    }



    public Aluno(int ra, String nome, Float notaAdo1, Float notaPI, boolean ativo) {
        this.ra = ra;
        this.nome = nome;
        this.notaAdo1 = notaAdo1;
        this.notaPI = notaPI;
        this.ativo = ativo;
    }



    public Aluno() {
    }

    @Override
    public String toString() {
        return "Aluno [ra=" + ra + ", nome=" + nome + ", cep=" + cep + ", numero=" + numero + ", complemento="
                + complemento + ", notaAdo1=" + notaAdo1 + ", notaPI=" + notaPI + ", ativo=" + ativo + "]";
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

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public Float getNotaAdo1() {
        return notaAdo1;
    }

    public void setNotaAdo1(Float notaAdo1) {
        this.notaAdo1 = notaAdo1;
    }

    public Float getNotaPI() {
        return notaPI;
    }

    public void setNotaPI(Float notaPI) {
        this.notaPI = notaPI;
    }

    public boolean isAtivo(){
        return ativo;
    }

    public void setAtivo(boolean ativo){
        this.ativo = ativo;
    }

    
}
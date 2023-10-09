package br.com.curso.faculdade.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Pessoas")
public class Pessoa {
//nome email cpf dataNascimento    
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "Pessoa-id")
    int id;

    @Column (name = "Nome")
    String nome;

    @Column (name = "Email")
    String email;

    @Column (name = "cpf")
    String cpf;

    Date dataNascimento;

    public Pessoa() {
    }

    public Pessoa(String nome, String email, String cpf, Date dataNascimento) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    @Override
    public String toString() {
        return "Pessoa [id=" + id + ", nome=" + nome + ", email=" + email + ", cpf=" + cpf + ", dataNascimento="
                + dataNascimento + "]";
    }    
}
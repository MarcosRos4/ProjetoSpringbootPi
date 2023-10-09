package br.com.curso.faculdade.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import br.com.curso.faculdade.entities.Aluno;
import br.com.curso.faculdade.entities.Pessoa;
import br.com.curso.faculdade.repositories.AlunoRepository;
import br.com.curso.faculdade.repositories.PessoaRepository;

@Service
public class DBService {
    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private PessoaRepository pessoaRepository;

    @Bean
    public void instanciarDBAluno() throws ParseException{
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
		Aluno aluno1 = new Aluno("João Victor Matulis",  formato.parse("02/06/2003"), true);
        Aluno aluno2 = new Aluno("Lucas Matulis",  formato.parse("02/03/2002"), true);
        Aluno aluno3 = new Aluno("Leonardo Matulis",  formato.parse("13/12/2004"), true);
        Aluno aluno4 = new Aluno("Pedro Augusto Matulis",  formato.parse("15/10/1970"), false);
		alunoRepository.saveAll(Arrays.asList(aluno1, aluno2, aluno3, aluno4));
    }

    @Bean
    public void instanciarDBPessoa() throws ParseException{
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
		Pessoa pessoa1 = new Pessoa("Carlos Henrique","carlos@yahoo.com","69847562358",  formato.parse("12/10/2009"));
        Pessoa pessoa2 = new Pessoa("Jonas Alvez","jonas@gmail.com","78547885696",  formato.parse("27/01/1987"));
        Pessoa pessoa3 = new Pessoa("Bruno Nascimento","bruno.nascimento@disc.com","14521469832",  formato.parse("31/06/1992"));
        Pessoa pessoa4 = new Pessoa("Lazaro Costa","lazaro.costa@outlook.com","85247896512",  formato.parse("08/12/2000"));
		pessoaRepository.saveAll(Arrays.asList(pessoa1, pessoa2, pessoa3, pessoa4));
    }
}
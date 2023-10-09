package br.com.curso.faculdade.configurations;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.curso.faculdade.services.DBService;

@Configuration
@Profile("teste")
public class TesteConfiguracao {
    @Autowired
    DBService dbService;

    private boolean instanciar() throws ParseException{
        this.dbService.instanciarDBAluno();
        this.dbService.instanciarDBPessoa();
        return true;
    }
}
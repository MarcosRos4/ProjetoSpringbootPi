package br.com.curso.faculdade.repositories;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.curso.faculdade.entities.Pessoa;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Integer>{

    Optional<Pessoa> findByNome(String nome);

    Optional<Pessoa> findBycpf(String cpf);

    Optional<Pessoa> findByEmail(String email);
}
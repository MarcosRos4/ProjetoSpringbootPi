package br.com.curso.faculdade.repositories;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.curso.faculdade.entities.Adm;
import br.com.curso.faculdade.entities.Pessoa;
import br.com.curso.faculdade.entities.Produto;

import java.util.List;


@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer>{

    Optional<Produto> findByNome(String nome);


}
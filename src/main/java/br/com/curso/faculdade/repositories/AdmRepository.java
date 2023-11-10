package br.com.curso.faculdade.repositories;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.curso.faculdade.entities.Adm;



@Repository
public interface AdmRepository extends JpaRepository<Adm, Integer>{

    Optional<Adm> findByNome(String nome);


}
package br.com.curso.faculdade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.curso.faculdade.entities.Aluno;
import br.com.curso.faculdade.repositories.AlunoRepository;

@Service
public class FaculdadeService {
    @Autowired
    AlunoRepository alunoRepository;

    public Aluno findById(Integer ra){
        Optional<Aluno> aluno = alunoRepository.findById(ra);
        return aluno.orElse(null);
    }

    public List<Aluno> listarTodosAbertos(){
        List<Aluno> alunos = alunoRepository.listarTodosAbertos();
        return alunos;
    }

    public List<Aluno> listarTodosFechados(){
        List<Aluno> alunos = alunoRepository.listarTodosFechados();
        return alunos;
    }

    public List<Aluno> findAll() {
        List<Aluno> alunos = alunoRepository.findAll();
        return alunos;
    }

    public Aluno findByNome(String nome) {
        Optional<Aluno> aluno = alunoRepository.findByNome(nome);
        return aluno.orElse(null);
    }

    public Aluno gravarAluno(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    public void deletar(Integer ra) {
        alunoRepository.deleteById(ra);
    }

    public Aluno update(Integer ra, Aluno aluno) {
        Aluno alterado = findById(ra);
        if(alterado != null){
            alterado.setNome(aluno.getNome());
            alterado.setCep(aluno.getCep());
            alterado.setComplemento(aluno.getComplemento());
            alterado.setNumero(aluno.getNumero());
            alterado.setNotaAdo1(aluno.getNotaAdo1());
            alterado.setNotaPI(aluno.getNotaPI());
            alterado.setAtivo(aluno.isAtivo());
            return alunoRepository.save(alterado);
        }        
        return null;
    }


}
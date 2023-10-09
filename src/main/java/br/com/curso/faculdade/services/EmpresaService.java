package br.com.curso.faculdade.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.curso.faculdade.entities.Pessoa;
import br.com.curso.faculdade.repositories.PessoaRepository;

@Service
public class EmpresaService {
    @Autowired
    PessoaRepository pessoaRepository;

    public List<Pessoa> findAll() {
        List<Pessoa> pessoa = pessoaRepository.findAll();
        return pessoa;
    }

    public Pessoa findByEmail(String email) {
        Optional<Pessoa> pessoa = pessoaRepository.findByEmail(email);
        return pessoa.orElse(null);
    }

    public Pessoa findByNome(String nome) {
        Optional<Pessoa> pessoa = pessoaRepository.findByNome(nome);
        return pessoa.orElse(null);
    }

    public Pessoa findById(Integer id) {
        Optional<Pessoa> pessoa = pessoaRepository.findById(id);
        return pessoa.orElse(null);
    }
    
    public Pessoa findBycpf(String cpf) {
        Optional<Pessoa> pessoa = pessoaRepository.findBycpf(cpf);
        return pessoa.orElse(null);
    }

    public Pessoa cadastrarPessoa(Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

    public Pessoa atualizarPessoa(Integer id, Pessoa pessoa) {
        Pessoa alterado = findById(id);
        if(alterado != null){
            alterado.setNome(pessoa.getNome());
            alterado.setEmail(pessoa.getEmail());
            alterado.setCpf(pessoa.getCpf());
            alterado.setDataNascimento(pessoa.getDataNascimento());
            return pessoaRepository.save(alterado);
        }
        return null;
    }

    public void deletar(Integer id) {
        pessoaRepository.deleteById(id);
    }
}
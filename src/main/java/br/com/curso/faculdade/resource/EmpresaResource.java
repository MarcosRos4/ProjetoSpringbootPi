package br.com.curso.faculdade.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.curso.faculdade.entities.Pessoa;
import br.com.curso.faculdade.services.EmpresaService;

@RestController
@RequestMapping(value = "/empresa")
public class EmpresaResource {
    @Autowired
    private EmpresaService empresaService;

    @GetMapping()
    public List<Pessoa> findAll(){
        List<Pessoa> pessoa = empresaService.findAll();
        return pessoa;
    } 

    @GetMapping("/{id}")
    public ResponseEntity<Pessoa> findById(@PathVariable Integer id){
        Pessoa pessoa = empresaService.findById(id);
        return ResponseEntity.ok().body(pessoa);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<Pessoa> findByEmail(@PathVariable String email){
        Pessoa pessoa = empresaService.findByEmail(email);
        return ResponseEntity.ok().body(pessoa);
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<Pessoa> findByNome(@PathVariable String nome){
        Pessoa pessoa = empresaService.findByNome(nome);
        return ResponseEntity.ok().body(pessoa);
    }

    @GetMapping("/cpf/{cpf}")
    public ResponseEntity<Pessoa> findBycpf(@PathVariable String cpf){
        Pessoa pessoa = empresaService.findBycpf(cpf);
        return ResponseEntity.ok().body(pessoa);
    }
/*Crie no projeto Pessoa os endpoint para Cadastro, alteração,
exibição e deleção das pessoas cadastradas. */
    
    @PostMapping
    public ResponseEntity<Pessoa> cadastrarPessoa(@RequestBody Pessoa pessoa){
        pessoa = empresaService.cadastrarPessoa(pessoa);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(pessoa.getId()).toUri();
        return ResponseEntity.created(uri).body(pessoa);   
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Pessoa> atualizarPessoa(@PathVariable Integer id, @RequestBody Pessoa pessoa){
        Pessoa alterado = empresaService.atualizarPessoa(id, pessoa);
        return ResponseEntity.ok().body(alterado);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id){
        empresaService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
package br.com.curso.faculdade.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.curso.faculdade.entities.Adm;
import br.com.curso.faculdade.services.AdmService;

@RestController
@RequestMapping(value = "/adm")
@CrossOrigin
public class AdmResource {
    @Autowired
    private AdmService admservice;

    @GetMapping()
    public List<Adm> findAll(){
        List<Adm> adm = admservice.findAll();
        return adm;
    } 

    @GetMapping("/{id}")
    public ResponseEntity<Adm> findById(@PathVariable Integer id){
        Adm adm = admservice.findById(id);
        return ResponseEntity.ok().body(adm);
    }


    @GetMapping("/nome/{nome}")
    public ResponseEntity<Adm> findByNome(@PathVariable String nome){
        Adm adm = admservice.findByNome(nome);
        return ResponseEntity.ok().body(adm);
    }

/*Crie no projeto Pessoa os endpoint para Cadastro, alteração,
exibição e deleção das pessoas cadastradas. */
    
    @PostMapping
    public ResponseEntity<Adm> cadastrarAdm(@RequestBody Adm adm){
        adm = admservice.cadastrarAdm(adm);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(adm.getId()).toUri();
        return ResponseEntity.created(uri).body(adm);   
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Adm> atualizarPessoa(@PathVariable Integer id, @RequestBody Adm adm){
        Adm alterado = admservice.atualizarAdm(id, adm);
        return ResponseEntity.ok().body(alterado);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id){
        admservice.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
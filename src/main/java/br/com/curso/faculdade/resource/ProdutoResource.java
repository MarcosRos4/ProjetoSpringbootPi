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

import br.com.curso.faculdade.entities.Produto;
import br.com.curso.faculdade.services.ProdutoService;

@RestController
@RequestMapping(value = "/produto")
@CrossOrigin
public class ProdutoResource {
    @Autowired
    private ProdutoService produtoService;

    @GetMapping()
    public List<Produto> findAll(){
        List<Produto> produto = produtoService.findAll();
        return produto;
    } 

    @GetMapping("/{id}")
    public ResponseEntity<Produto> findById(@PathVariable Integer id){
        Produto produto = produtoService.findById(id);
        return ResponseEntity.ok().body(produto);
    }


    @GetMapping("/nome/{nome}")
    public ResponseEntity<Produto> findByNome(@PathVariable String nome){
        Produto produto = produtoService.findByNome(nome);
        return ResponseEntity.ok().body(produto);
    }

/*Crie no projeto Pessoa os endpoint para Cadastro, alteração,
exibição e deleção das pessoas cadastradas. */
    
    @PostMapping
    public ResponseEntity<Produto> cadastrarProduto(@RequestBody Produto produto){
        produto = produtoService.cadastrarProduto(produto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(produto.getId()).toUri();
        return ResponseEntity.created(uri).body(produto);   
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable Integer id, @RequestBody Produto produto){
        Produto alterado = produtoService.atualizarProduto(id, produto);
        return ResponseEntity.ok().body(alterado);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id){
        produtoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
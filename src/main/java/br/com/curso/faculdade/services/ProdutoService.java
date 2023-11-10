package br.com.curso.faculdade.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.curso.faculdade.entities.Produto;
import br.com.curso.faculdade.repositories.ProdutoRepository;

@Service
public class ProdutoService {
    @Autowired
    ProdutoRepository produtoRepository;

    public List<Produto> findAll() {
        List<Produto> produto = produtoRepository.findAll();
        return produto;
    }

    public Produto findByNome(String nome) {
        Optional<Produto> produto = produtoRepository.findByNome(nome);
        return produto.orElse(null);
    }

    public Produto findById(Integer id) {
        Optional<Produto> produto = produtoRepository.findById(id);
        return produto.orElse(null);
    }
    

    public Produto cadastrarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto atualizarProduto(Integer id, Produto produto) {
        Produto alterado = findById(id);
        if(alterado != null){
            alterado.setNome(produto.getNome());
            alterado.setPreco(produto.getPreco());
            alterado.setDescricao(produto.getDescricao());
            alterado.setImagem(produto.getImagem());
            
            return produtoRepository.save(alterado);
        }
        return null;
    }

    public void deletar(Integer id) {
        produtoRepository.deleteById(id);
    }
}
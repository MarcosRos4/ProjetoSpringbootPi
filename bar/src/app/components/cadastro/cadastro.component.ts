import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(
    private produtoService: ProdutoService,
    private snackBar : MatSnackBar,
    private router : Router
  ) {}

  produtos?: Produto[]
  produto:Produto={
    id: 0,
    nome:"",
    preco:0,
    imagem:"",
    descricao:""
  }

  ngOnInit(): void {
    this.buscarProdutos()
  }

  criarProduto() {
    this.produto.nome = this.produto.nome?.trim();
    this.produto.descricao = this.produto.descricao?.trim();

  
    const usuarioExistente = this.produtos?.find(
      (element) =>element.nome === this.produto.nome);
  
    if (usuarioExistente) {
      this.snackBar.open("Este produto já existe", "OK!");

    } else {
      if (this.produto.nome !== "" && this.produto.preco>0) {
        this.produtoService.inserirProduto(this.produto).subscribe(
          (error) => {
            this.buscarProdutos();
            if (error) console.log(error);
          }
        );
        console.log(this.produto.descricao)
        this.snackBar.open("Produto cadastrado!", "OK!");
      } else {
        this.snackBar.open("O Nome ou preço do produto invalido!", "OK!");
      }
    }
  }


  buscarProdutos( ) : void {
    this.produtoService.buscarProduto()
    .pipe(
      catchError((error) => {
        return of([]);
      })
    )
    .subscribe((produtos) => {
      this.produtos= produtos as Produto[];
    });
  }

}

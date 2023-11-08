import { Component } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  constructor(
    private produtoservice:ProdutoService,
    private snackBar : MatSnackBar
  ) {}

  produtos?: Produto[];

  produto: Produto={
    ID:0,
    Nome:"",
    Preco:0,
    Imagem:"",
    Descricao:""
  }

  produto2: Produto={
    ID:0,
    Nome:"",
    Preco:0,
    Imagem:"",
    Descricao:""
  }

  id?:number

  

  criarProduto(){

    this.produto.ID = this.produto.ID;
    this.produto.Nome = this.produto.Nome?.trim();
    this.produto.Preco=this.produto.Preco;
    this.produto.Imagem = this.produto.Imagem?.trim();
    this.produto.Descricao = this.produto.Descricao?.trim();


    if(this.produto.Nome != '' && this.produto.Preco != undefined ) this.produtoservice.inserirProduto(this.produto)
    .subscribe( ( error ) => { if ( error ) console.log( error )});
    
    else
    this.snackBar.open("O Nome do produto ou preço esta vazio!", "OK!");

  }

  atualizarProduto(){
    this.produto2.ID = this.produto2.ID;
    this.produto2.Nome = this.produto2.Nome?.trim();
    this.produto2.Preco=this.produto2.Preco;
    this.produto2.Imagem = this.produto2.Imagem?.trim();
    this.produto2.Descricao = this.produto2.Descricao?.trim();

    if( this.produto2.Nome.length == 0 || this.produto2.Preco == undefined ) {
      this.snackBar.open("O Nome do produto ou preço esta vazio!", "OK!");
      return;
    }

    if(this.produto2 != undefined) this.produtoservice.atualizarProduto(this.produto2, this.produto2.ID)
    .subscribe(
      res => {
        console.log(res);
      },
      erro => {
        console.log(erro)
      }
    );
  }

  removerProduto(){

    if(this.id==undefined){
      this.snackBar.open("O ID está vazio!", "OK!");
      return;
    }

    if(this.id != undefined) this.produtoservice.removerProduto(this.id)
    .subscribe({
      next: (res) => {
        if( res ) console.log(res);

      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  buscarProdutos( ) : void {
    this.produtoservice.buscarProduto()
    .pipe(
      catchError((error) => {
        return of([]);
      })
    )
    .subscribe((produtos) => {
      this.produtos= produtos;
    });
  }
}

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
    id:0,
    nome:"",
    preco:0,
    imagem:"",
    descricao:""
  }

  produto2: Produto={
    id:0,
    nome:"",
    preco:0,
    imagem:"",
    descricao:""
  }

  id?:number

  ngOnInit(): void {
    this.buscarProdutos()
  }
  

  criarProduto(){

    this.produto.id = this.produto.id;
    this.produto.nome = this.produto.nome?.trim();
    this.produto.preco=this.produto.preco;
    this.produto.imagem = this.produto.imagem?.trim();
    this.produto.descricao = this.produto.descricao?.trim();


    if(this.produto.nome != '' && this.produto.preco != undefined ) this.produtoservice.inserirProduto(this.produto)
    .subscribe( ( error ) => { 
      this.buscarProdutos()
      if ( error ) console.log( error )});
    
    else
    this.snackBar.open("O Nome do produto ou preço esta vazio!", "OK!");

  }

  atualizarProduto(){
    this.produto2.id = this.produto2.id;
    this.produto2.nome = this.produto2.nome?.trim();
    this.produto2.preco=this.produto2.preco;
    this.produto2.imagem = this.produto2.imagem?.trim();
    this.produto2.descricao = this.produto2.descricao?.trim();

    if( this.produto2.nome.length == 0 || this.produto2.preco == undefined ) {
      this.snackBar.open("O Nome do produto ou preço esta vazio!", "OK!");
      return;
    }

    if(this.produto2 != undefined) this.produtoservice.atualizarProduto(this.produto2, this.produto2.id)
    .subscribe(
      res => {
        this.buscarProdutos()
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
        this.buscarProdutos()
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

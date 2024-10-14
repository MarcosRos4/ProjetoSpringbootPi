import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  produtos?: Produto[]
  produto: Produto = {
    id: 0,
    nome: "",
    preco: 0,
    imagem: "",
    descricao: ""
  };

  id: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buscarProdutos();

    this.buscarProduto(Number(this.id));
  }

  buscarProduto(id: number): void {
    this.produtoService.buscarProdutoId(id)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of(undefined);
        })
      )
      .subscribe((produto) => {
        if (typeof produto === 'object') {
          this.produto = produto as Produto;
          console.log(this.produto); // Aqui o console.log só é chamado quando os dados estiverem prontos
        } else {
          console.error('Tipo inesperado recebido:', typeof produto);
        }
      });
  }

  atualizarProduto(){

    this.produto.nome = this.produto.nome?.trim();
    this.produto.preco=this.produto.preco;
    this.produto.descricao = this.produto.descricao?.trim();

    const usuarioExistente = this.produtos?.find(
      (element) =>element.nome === this.produto.nome);

    if( this.produto.nome.length == 0 || this.produto.preco == undefined ) {
      this.snackBar.open("O Nome do produto ou preço esta vazio!", "OK!");
      return;
    }
    if (usuarioExistente) {
      this.snackBar.open("Este produto já existe", "OK!");

    }else{

      if(this.produto != undefined && this.produto.preco>0){ 
        this.produtoService.atualizarProduto(this.produto, this.produto.id)
        .subscribe(
          res => {
            this.snackBar.open("Produto atualizado com sucesso!", "OK!");
            console.log(res);
          },
          erro => {
            console.log(erro)
          }
        );
      }
      else{
        this.snackBar.open("Preço ou nome invalidos!", "OK!");
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

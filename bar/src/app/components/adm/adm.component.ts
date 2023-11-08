import { Component, OnInit } from '@angular/core';
import { Adm } from 'src/app/model/adm';
import { AdmService } from 'src/app/services/adm/adm.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';



@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit{

  constructor(
    private admservice:AdmService,
    private snackBar : MatSnackBar
  ) {}

  adms?: Adm[];

  adm: Adm={
    id:0,
    nome:"",
    senha:""
  }

  adm2: Adm={
    id:0,
    nome:"",
    senha:""
  }

  id?:number


  ngOnInit(): void {
    this.buscarAdms()
  }

  

  criarAdm(){

    this.adm.id = this.adm.id;
    this.adm.nome = this.adm.nome?.trim();
    this.adm.senha = this.adm.senha?.trim();

    if(this.adm.nome != '' && this.adm.senha != '' ) this.admservice.inserirAdm(this.adm)
    .subscribe( ( error ) => { 
    this.buscarAdms();
    if ( error ) 
      console.log( error )});
    
    else
    this.snackBar.open("O Nome do adm ou a senha esta vazio!", "OK!");

  }

  atualizarAdm(){
    this.adm2.id = this.adm2.id;
    this.adm2.nome = this.adm2.nome?.trim();
    this.adm2.senha = this.adm2.senha?.trim();

    if( this.adm2.nome.length == 0 || this.adm2.senha?.length == 0 ) {
      this.snackBar.open("O nome do adm ou a senha esta vazio!", "OK!");
      return;
    }

    if(this.adm2 != undefined) this.admservice.atualizarAdm(this.adm2, this.adm2.id)
    .subscribe(
      res => {
        this.buscarAdms();
        console.log(res);
      },
      erro => {
        console.log(erro)
      }
    );
  }

  removerAdm(){

    if(this.id==undefined){
      this.snackBar.open("O ID está vazio!", "OK!");
      return;
    }

    if(this.id != undefined) this.admservice.removerAdm(this.id)
    .subscribe({
      next: (res) => {
        this.buscarAdms()
        if( res ) console.log(res);

      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  buscarAdms( ) : void {
    this.admservice.buscarAdms()
    .pipe(
      catchError((error) => {
        return of([]);
      })
    )
    .subscribe((adms) => {
      this.adms= adms;
    });
  }
}

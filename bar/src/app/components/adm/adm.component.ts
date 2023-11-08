import { Component } from '@angular/core';
import { Adm } from 'src/app/model/adm';
import { AdmService } from 'src/app/services/adm/adm.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';



@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {

  constructor(
    private admservice:AdmService,
    private snackBar : MatSnackBar
  ) {}

  adms?: Adm[];

  adm: Adm={
    ID:0,
    Nome:"",
    Senha:""
  }

  adm2: Adm={
    ID:0,
    Nome:"",
    Senha:""
  }

  id?:number


  ngOnInit(): void {
    this.buscarAdms()
  }

  

  criarAdm(){

    this.adm.ID = this.adm.ID;
    this.adm.Nome = this.adm.Nome?.trim();
    this.adm.Senha = this.adm.Senha?.trim();

    if(this.adm.Nome != '' && this.adm.Senha != '' ) this.admservice.inserirAdm(this.adm)
    .subscribe( ( error ) => { if ( error ) console.log( error )});
    
    else
    this.snackBar.open("O Nome do adm ou a senha esta vazio!", "OK!");

  }

  atualizarAdm(){
    this.adm2.ID = this.adm2.ID;
    this.adm2.Nome = this.adm2.Nome?.trim();
    this.adm2.Senha = this.adm2.Senha?.trim();

    if( this.adm2.Nome.length == 0 || this.adm2.Senha?.length == 0 ) {
      this.snackBar.open("O nome do adm ou a senha esta vazio!", "OK!");
      return;
    }

    if(this.adm2 != undefined) this.admservice.atualizarAdm(this.adm2, this.adm2.ID)
    .subscribe(
      res => {
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

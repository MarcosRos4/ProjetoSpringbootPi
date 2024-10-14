import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { Adm } from 'src/app/model/adm';
import { AdmService } from 'src/app/services/adm/adm.service';
import { Router } from '@angular/router'
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-adm',
  templateUrl: './cadastro-adm.component.html',
  styleUrls: ['./cadastro-adm.component.css']
})
export class CadastroAdmComponent {

  constructor(
    private admservice:AdmService,
    private snackBar : MatSnackBar,
    private router : Router
  ) {}

  adms?: Adm[];
  adm: Adm={
    id:0,
    nome:"",
    senha:""
  }


  ngOnInit(): void {
    this.buscarAdms()
  }


  criarAdm() {
    this.adm.nome = this.adm.nome?.trim();
    this.adm.senha = this.adm.senha?.trim();
  
    const usuarioExistente = this.adms?.find(
      (element) => element.nome === this.adm.nome && element.senha === this.adm.senha || element.nome === this.adm.nome
    );
  
    if (usuarioExistente) {
      this.snackBar.open("Este usuario já existe", "OK!");

    } else {
      if (this.adm.nome !== "" && this.adm.senha !== "") {
        this.admservice.inserirAdm(this.adm).subscribe(
          (error) => {
            this.buscarAdms();
            if (error) console.log(error);
          }
        );
        this.router.navigateByUrl('/login');
      } else {
        this.snackBar.open("O Nome do adm ou a senha está vazio!", "OK!");
      }
    }
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

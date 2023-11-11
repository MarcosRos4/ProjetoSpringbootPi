import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { Adm } from 'src/app/model/adm';
import { AdmService } from 'src/app/services/adm/adm.service';
import { Router } from '@angular/router'
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private admservice:AdmService,
    private snackBar : MatSnackBar,
    private router : Router
  ) {}

  adms?: Adm[];
  senha: string='';
  usuario: string='';


  ngOnInit(): void {
    this.buscarAdms()
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
      console.log(this.adms)
    });
  }


  verificarAdm():void{

    this.usuario.trim()
    this.senha.trim()


    this.adms?.forEach(element => {

      if(this.usuario==element.nome && this.senha==element.senha){
        this.router.navigateByUrl( '/consulta' );
      }
      else{
        console.log("Nome ou senha incorretos")
        console.log(this.usuario)
        console.log(this.senha)
      }
      
    });


  }

}

import { AfterViewInit, Component } from '@angular/core';
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
export class LoginComponent implements AfterViewInit{

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

  ngAfterViewInit() {
  
    this.buscarAdms();
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


  verificarAdm():void{

    this.buscarAdms()

    this.usuario.trim()
    this.senha.trim()

    const usuarioExistente = this.adms?.find(
      (element) => element.nome === this.usuario && element.senha === this.senha
    );

      if(usuarioExistente){
        this.router.navigateByUrl( '/consulta' );
      }
      else{
        this.snackBar.open("O Nome do adm ou a senha estão incorretos ou não existem!", "OK!");
      }   
  }

}

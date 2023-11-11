import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LandingComponent } from './components/landing/landing.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { LoginComponent } from './components/login/login.component';
import { AdmComponent } from './components/adm/adm.component';

const routes: Routes = [
  {
    path:'',
    component: LandingComponent
  },
  {
    path:'cadastro',
    component: CadastroComponent
  },
  {
    path:"consulta",
    component: ConsultaComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"adm",
    component: AdmComponent
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

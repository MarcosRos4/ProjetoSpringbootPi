import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LandingComponent } from './components/landing/landing.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroAdmComponent } from './components/cadastro-adm/cadastro-adm.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';

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
    path:"cadastroAdm",
    component: CadastroAdmComponent
  },
  {
    path:"editProduto/:id",
    component: EditarProdutoComponent
  },
  {
    path:"cardapio",
    component: CardapioComponent
  }


];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

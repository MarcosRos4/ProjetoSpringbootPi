import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmComponent } from './components/adm/adm.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { LandingComponent } from './components/landing/landing.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RouterOutlet } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroAdmComponent } from './components/cadastro-adm/cadastro-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmComponent,
    ProdutoComponent,
    HeaderComponent,
    LoginComponent,
    BebidasComponent,
    LandingComponent,
    CadastroComponent,
    ConsultaComponent,
    FooterComponent,
    CadastroAdmComponent
  ],
  imports: [
    MatTableModule,
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

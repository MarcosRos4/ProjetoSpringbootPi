import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CardapioHomeComponent } from './components/cardapio-home/cardapio-home.component';
import { CadastroAdmComponent } from './components/cadastro-adm/cadastro-adm.component';
import { MatButtonModule } from '@angular/material/button';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BebidasComponent,
    LandingComponent,
    CadastroComponent,
    FooterComponent,
    CardapioHomeComponent,
    CadastroAdmComponent,
    EditarProdutoComponent,    
  ],
  imports: [
    
    ConsultaComponent,
    CardapioComponent,
    MatButtonModule,
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

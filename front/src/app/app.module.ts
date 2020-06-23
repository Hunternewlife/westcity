import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
//importar modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { ChatComponent } from './components/chat/chat.component';

//importar servicios
import { UsuariosService } from "./services/usuarios.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmailNotificationService } from './services/email-notification.service';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ConfiteriaComponent } from './components/confiteria/confiteria.component';
import { BoleteriaComponent } from './components/boleteria/boleteria.component';
import { MembresiaComponent } from './components/membresia/membresia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CinemaComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ChatComponent,
    CarteleraComponent,
    PeliculasComponent,
    ConfiteriaComponent,
    BoleteriaComponent,
    MembresiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmailNotificationService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicios
import { EmailNotificationService } from './services/email-notification.service'

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

import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './components/chat/chat.component';

//importar servicios
import { UsuariosService } from "./services/usuarios.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CinemaComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmailNotificationService
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicios
import { EmailNotificationService } from './services/email-notification.service'

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './components/chat/chat.component';

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
    AppRoutingModule
  ],
  providers: [
    EmailNotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

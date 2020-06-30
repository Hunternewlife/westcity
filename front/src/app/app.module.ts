import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
//importar modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { ChatComponent } from './components/chat/chat.component';

// Servicio de productos
import { ProductosService } from './services/productos.service';

// Servicio de peliculas
import { PeliculasService } from './services/peliculas.service';

// Servicio de chat
import { ChatService } from './services/chat.service'

//importar servicios
import { UsuariosService } from './services/usuarios.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmailNotificationService } from './services/email-notification.service';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ConfiteriaComponent } from './components/confiteria/confiteria.component';
import { BoleteriaComponent } from './components/boleteria/boleteria.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoService} from './services/carrito.service';
import { ConfiteriaComprasComponent } from './components/confiteria-compras/confiteria-compras.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { AdminPeliculasComponent } from './components/admin-peliculas/admin-peliculas.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BoleteriaCompraComponent } from './components/boleteria-compra/boleteria-compra.component';

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
    MembresiaComponent,
    CarritoComponent,
    ConfiteriaComprasComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminUsuariosComponent,
    AdminPeliculasComponent,
    FilterPipe,
    BoleteriaCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmailNotificationService,
    UsuariosService,
    CarritoService,
    ProductosService,
    PeliculasService,
    ChatService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

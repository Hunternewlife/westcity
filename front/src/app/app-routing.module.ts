import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes 
import { CinemaComponent } from './components/cinema/cinema.component';
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { PerfilComponent } from './components/perfil/perfil.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ConfiteriaComponent } from './components/confiteria/confiteria.component';
import { BoleteriaComponent } from './components/boleteria/boleteria.component';
import { ConfiteriaComprasComponent } from "./components/confiteria-compras/confiteria-compras.component";
import { BoleteriaCompraComponent } from './components/boleteria-compra/boleteria-compra.component';



// Relacionar rutas con componentes
const routes: Routes = [
  { path: '', component: CinemaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},    
  { path: 'perfil', component: PerfilComponent},
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'confiteria', component: ConfiteriaComponent },
  { path: 'boleteria', component: BoleteriaComponent },
  { path: 'compras', component: ConfiteriaComprasComponent },
  { path: 'boleteria-compras', component: BoleteriaCompraComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }

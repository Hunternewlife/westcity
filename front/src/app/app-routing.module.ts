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
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminPeliculasComponent } from './components/admin-peliculas/admin-peliculas.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { BoleteriaCompraComponent } from './components/boleteria-compra/boleteria-compra.component';
import { MembresiaComponent } from "./components/membresia/membresia.component";


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
  { path: 'admin', component: AdminComponent,
    data: {rol: 'admin'},
    children:  [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'crudPeliculas',
        component: AdminPeliculasComponent
      },
      {
        path: 'crudUsuarios',
        component: AdminUsuariosComponent
      }
  ] },
  { path: 'boleteria-compras', component: BoleteriaCompraComponent },
  { path: 'membresia', component: MembresiaComponent}
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

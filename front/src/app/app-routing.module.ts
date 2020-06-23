import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes 
import { CinemaComponent } from './components/cinema/cinema.component';
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { PerfilComponent } from './components/perfil/perfil.component';


// Relacionar rutas con componentes
const routes: Routes = [
  { path: '', component: CinemaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},    
  { path: 'perfil', component: PerfilComponent}
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

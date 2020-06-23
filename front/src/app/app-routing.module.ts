import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes 
import { CinemaComponent } from './components/cinema/cinema.component';
import { PerfilComponent } from './components/perfil/perfil.component';

// Relacionar rutas con componentes
const routes: Routes = [
  { path: '', component: CinemaComponent},
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

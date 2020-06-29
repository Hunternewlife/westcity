import { Component, OnInit } from '@angular/core';

// Traer servicio de usuarios
import { UsuariosService } from '../../services/usuarios.service';

// Traer modelo de usuarios
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-membresia',
  templateUrl: './membresia.component.html',
  styleUrls: ['./membresia.component.scss'],
})
export class MembresiaComponent implements OnInit {
  // Aqui estara el usuario actualmente en sesion
  usuarioSesion: Usuario;

  // Inyectar el servicio de usuarios
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    // Obtener usuario en sesion
    this.usuarioSesion = this.usuariosService.obtenerUsuario();
  }

  // Auxiliar para cambiar a sheriff
  toggleSheriff() {
    // Validaciones previas
    if (!this.usuarioSesion)
      return alert('Error. Usted no ha iniciado sesión!');
    if (this.usuarioSesion.suscripcion === 'sheriff')
      return alert('Usted ya tiene membresia sheriff!');

    // Hacer uso del servicio de modificacion de usuarios
    this.usuarioSesion.suscripcion = 'sheriff';
    this.usuariosService.modificarUsuario(this.usuarioSesion).subscribe(
      (response: any) => {
        if (!response.usuario)
          return alert('Error. No se ha podido modificar la membresia!');
        alert('Membresia modificada correctamente!');
        // Cambiar el usuario en sesion
        localStorage.setItem('sesion', JSON.stringify(response.usuario));
        // Cargar de nuevo el usuario en sesion
        this.usuarioSesion = this.usuariosService.obtenerUsuario();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // Auxiliar para cambiar a pistolero
  togglePistolero() {
    // Validaciones previas
    if (!this.usuarioSesion)
      return alert('Error. Usted no ha iniciado sesión!');
    if (this.usuarioSesion.suscripcion === 'pistolero')
      return alert('Usted ya tiene membresia pistolero!');

    // Hacer uso del servicio de modificacion de usuarios
    this.usuarioSesion.suscripcion = 'pistolero';
    this.usuariosService.modificarUsuario(this.usuarioSesion).subscribe(
      (response: any) => {
        if (!response.usuario)
          return alert('Error. No se ha podido modificar la membresia!');
        alert('Membresia modificada correctamente!');
        // Cambiar el usuario en sesion
        localStorage.setItem('sesion', JSON.stringify(response.usuario));
        // Cargar de nuevo el usuario en sesion
        this.usuarioSesion = this.usuariosService.obtenerUsuario();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

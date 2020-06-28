import { Component, OnInit } from '@angular/core';

// Servicio de usuarios
import { UsuariosService } from '../../services/usuarios.service';

// Modelo de usuarios
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss'],
})
export class AdminUsuariosComponent implements OnInit {
  filterUsuarios = '';
  usuarios: Array<Usuario>;

  // Inyectar servicio de usuarios
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  // Auxiliar para poblar el array de usuarios
  getUsuarios() {
    this.usuariosService.obtenerUsuarios().subscribe(
      (response: any) => {
        if (response.usuarios) this.usuarios = response.usuarios;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

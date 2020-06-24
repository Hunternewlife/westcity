import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  mostrarEditar = true;
  usuario = [];
  usuarioLogeado = this.usuariosService.obtenerUsuario();

  // En este objeto almaceno estado relacionado con cambio de contraseña
  pwds;

  constructor(
    private usuariosService:UsuariosService
  ) {
    this.pwds = { oldPwd: "", newPwd: ""};
  }

  ngOnInit(): void {

  }

  showEditar(){
    this.mostrarEditar = true;
  }
  showContrasena(){
    this.mostrarEditar = false;
  }
  updateUsuario(){
    this.usuariosService.modificarUsuario(this.usuarioLogeado).subscribe(
      (response:any) => {
        this.usuarioLogeado = response.usuario;
        if(!this.usuarioLogeado){
          alert(`${this.usuarioLogeado.nombre} no se ha podido actualizar`)
        } else {
          alert(`${this.usuarioLogeado.nombre} se ha actualizado`);
          localStorage.setItem('sesion',JSON.stringify(this.usuarioLogeado));
        }
      }
    );
  }

  // Metodo para la actualizacion de la contraseña
  updatePwd() {
    // Validaciones
    if (this.pwds.oldPwd !== this.usuarioLogeado.contrasena) {
      alert("Error. Ingrese correctamente su antigua contraseña");
    } else if (this.pwds.newPwd === "") {
      alert("Error. Nueva contraseña vacía");
    } else {
      // Modificar la contraseña del usuario actual
      this.usuarioLogeado.contrasena = this.pwds.newPwd;
      this.updateUsuario();
    }

    // Limpiar estado relacionado con cambio de contraseña
    this.pwds.oldPwd = "";
    this.pwds.newPwd = "";
  }


}

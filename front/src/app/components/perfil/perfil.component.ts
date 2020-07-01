import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../modelo/usuario';

// Servicio para redireccionar despues de cerrada la sesion
import { Router } from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public ruta = this.usuariosService.url;
  mostrarEditar = true;
  usuario = [];
  usuarioLogeado = this.usuariosService.obtenerUsuario();

  // En este objeto almaceno estado relacionado con cambio de contraseña
  pwds;

  // Almacena nuevo archivo de imagen
  nuevaImagen: File;

  // Util para limpiar el input para la nueva imagen
  @ViewChild('nuevaImg')
  nuevaImgVar: ElementRef;

  constructor(
    private usuariosService:UsuariosService,
    // Inyectar servicio de redireccionamiento
    private _router : Router
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

          // Subir imagen (de haberla)
          if (this.nuevaImagen) {
            this.subirImagen(response.usuario._id, this.nuevaImagen);

            // Limpiar el input
            this.nuevaImagen = null;
            this.nuevaImgVar.nativeElement.value = '';
          }
          // Repoblar con datos actualizados (es necesario aqui tambien)
          else localStorage.setItem('sesion',JSON.stringify(this.usuarioLogeado));
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

  // Auxiliar para cerrar la sesion
  cerrarSesion() {
    // Cerrar sesion con el servicio de usuarios
    this.usuariosService.cerrarSesion();
    this._router.navigate(['/']);
  }

  // Reacciona al cambio de imagen de perfil y la prepara para subir
  prepararImagen(event) {
    this.nuevaImagen = <File>event.target.files[0];
  }

  // Sube la imagen del usuario con `id` especificado
  subirImagen(id: string, imagen: File) {
    this.usuariosService.subirImagenUsuario(id, imagen).subscribe(
      (response: any) => {
        if (!response.usuario) alert('No se ha podido subir la imagen!');
        // Repoblar con usuario actualizado
        alert('Imagen subida correctamente!');
        this.usuarioLogeado = response.usuario;
        localStorage.setItem('sesion', JSON.stringify(this.usuarioLogeado));
      },
      (error) => {
        console.log(error);
      }
    );
  }


}

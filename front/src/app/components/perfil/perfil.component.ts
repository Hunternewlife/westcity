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

  constructor(
    private usuariosService:UsuariosService 
  ) { 
    
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

  
}

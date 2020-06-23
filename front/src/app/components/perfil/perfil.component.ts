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
  usuarioEditar:Usuario = {
    _id:"5ef21d93cccf32d3f8aefdbc",
    "nombre": "carlos",
    "apellido": "rueda",
    "documento": 1075659780,
    "contrasena": "123",
    "correo": "dasdas",
    "tarjeta": 41354,
    "suscripcion": "sheriff",
    "estado": "activo",
    "imagen": "dasdas",
    "rol": "usuario"
  };

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
    this.usuariosService.modificarUsuario(this.usuarioEditar).subscribe(
      (response:any) => {
        this.usuarioEditar = response.usuario;
        if(!this.usuarioEditar){
          alert(`${this.usuarioEditar.nombre} no se ha podido actualizar`)
        } else {
          alert(`${this.usuarioEditar.nombre} se ha actualizado`);
        }
      }
    );
  }
}

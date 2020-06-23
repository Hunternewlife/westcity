import { Component, OnInit } from '@angular/core';

import { Usuario } from "../../modelo/usuario";

import { UsuariosService } from "../../services/usuarios.service";

import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: Usuario

  public identidad;


  constructor(
    private usuarioService : UsuariosService,
    private _router : Router
  ) { 
    this.login = new Usuario('', '', '', null , '', '', null, 'pistolero', 'activo',null, 'usuario')
   }

  ngOnInit(): void {
    if (this.usuarioService.isLogged()) {
      this._router.navigate(['/'])
    } 
  }

  loginUsuario(){
    this.usuarioService.logIn(this.login).subscribe(
      (Response: any) => {
        let usuario = Response.usuario;
        this.login = usuario;
        console.log('res', usuario)
        console.log(this.login)

        if (this.login) {
          let usuarioLogueado = new Usuario(
            this.login._id,
            this.login.nombre,
            this.login.apellido,
            this.login.documento,
            this.login.contrasena,
            this.login.correo,
            this.login.tarjeta,
            this.login.suscripcion,
            this.login.estado,
            this.login.imagen,
            this.login.rol
          )
          // crear el objeto localStorage
        localStorage.setItem('sesion',JSON.stringify(usuarioLogueado));
        // crear el objeto de logged in en localStorage
        localStorage.setItem('logged',JSON.stringify({logged:true}));
        //Consumir el servicio obtenerNombreUsuario
        this.identidad = this.usuarioService.obtenerUsuario();
        alert(`Hola ${this.identidad.nombre}`);
        //redireccionar
        this._router.navigate(['/perfil']);
      }else{
        alert('Usuario no identificado');
        }
      },
      error=>{
        if (error != null) {
          console.log(error)
        }
      }
    )
  }
  
}

import { Component, OnInit } from '@angular/core';

//importar modelo
import { Usuario } from "../../modelo/usuario";

//importar servicios
import { UsuariosService } from "../../services/usuarios.service";

//importar enrutador para hacer redireccionamiento al perfil
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  //variable para capturar los datos
  public usuarioRegistro : Usuario;

  constructor(
    private usuariosService : UsuariosService,
    private _router : Router
  ) { 
    this.usuarioRegistro = new Usuario('', '', '', 0 , '', '', 0, 'pistolero', 'activo',null, 'usuario')
  }

  ngOnInit(): void {
  }

  //suscribirse al servicio de registro
  registrarUsuario(){
    this.usuariosService.registro(this.usuarioRegistro).subscribe(
      (response : any) => {
        
        let usuario = response.usuario;
        this.usuarioRegistro = usuario;
        
        if (!this.usuarioRegistro._id) {
          alert("Error al registrarse");
        }else{
          alert(`Registro exitoso! Inicia sesión con ${this.usuarioRegistro.correo}`);
          this.usuarioRegistro = new Usuario('', 'juan','sanchez', 1234, '1234', 'algo@gmail.com', 1234, 'pistolero', 'activo',null, 'usuario');
          this._router.navigate(['/loginUsuario']);
        }
      },
      error => {
        var errorMensaje = <any> error;

        if (errorMensaje != null) {
          console.log(error)
          console.log(this.usuarioRegistro)
        }
      }
    )
  }

}

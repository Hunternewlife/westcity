import { Component, OnInit } from '@angular/core';

//importar modelo
import { Usuario } from "../../modelo/usuario";

//importar servicios
import { UsuariosService } from "../../services/usuarios.service";
import { EmailNotificationService } from '../../services/email-notification.service'

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

  public msgEmail;

  constructor(
    private usuariosService : UsuariosService,
    private _router : Router,
    private emailNotificationService: EmailNotificationService
  ) { 
    this.usuarioRegistro = new Usuario('', '', '', null , '', '', null, 'pistolero', 'activo',null, 'usuario')
  }

  ngOnInit(): void {
  }

  //suscribirse al servicio de registro
  registrarUsuario(){
    this.usuariosService.registro(this.usuarioRegistro).subscribe(
      (response : any) => {
        if(response.usuario){
          console.log(response)
          let usuario = response.usuario;
          this.usuarioRegistro = usuario;
          
          if (!this.usuarioRegistro._id) {
            alert(response);
          }else{
            alert(`Registro exitoso! Inicia sesión con ${this.usuarioRegistro.correo}`);
            this.msgEmail= this.emailNotificationService.elaborarMensaje('Registro exitoso West City','registro',this.usuarioRegistro);
            this.emailNotificationService.generarNotificacion(this.msgEmail).subscribe(
             (response : any) => {
               switch (response.message) {
                  case 'Envio de correo satisfactorio':
                    console.log('Correo enviado')
                   
                    break;

                  case 'Error al enviar correo':
                    console.log('Correo No enviado')
                    
                    break;
               
                 default:
                   break;
               }
             }

              
            )

            //this.usuarioRegistro = new Usuario('', '','', null, '', '', null, '', '',null, '');
            this._router.navigate(['/login']);
          }

        }else{
          switch (response.message) {
            case 'No fue posible registrar el usuario, correo existente':
              alert('Este correo ya se ha ingresado')
              break;
          
            default:
              break;
          }
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

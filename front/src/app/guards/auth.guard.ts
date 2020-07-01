import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuariosService : UsuariosService, private _router : Router,private location: Location){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.usuariosService.isLogged()){
        return true;
      }else{
        let ruta=this.location.path();
        switch (ruta) {
          case '/perfil':
            alert('Inicia Sesion')
          this._router.navigate(['login']);            
            break;
          case '/compras':
            this._router.navigate(['login']);    
            alert('Inicia Sesion para acceder a nuestra confiteria');
                    
          break;
          case '/confiteria':
            this._router.navigate(['login']);    
            alert('Inicia Sesion para acceder a nuestra confiteria');                    
            break;          
          case '/boleteria-compras':
            this._router.navigate(['login']);    
            alert('Inicia Sesion para comprar tiquetes');                    
            break;
          case '/boleteria':
            this._router.navigate(['login']);    
            alert('Inicia Sesion para comprar tiquetes');                    
            break;
          
        
          default:
            this._router.navigate(['/']);
            break;
        }
        
        //
        return false
      }


  }
  
}

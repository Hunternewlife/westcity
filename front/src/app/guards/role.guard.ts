import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UsuariosService } from '../services/usuarios.service'

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private usuarioService : UsuariosService, private _router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
      
      const rol = this.usuarioService.getRol();
      const suscripcion = this.usuarioService.getSuscripcion()
      //console.log(this.usuarioService.getRol())
      if(rol === next.data.rol || suscripcion === next.data.suscripcion){
        
        return true;
      }else{
        alert('No tienes una suscripcion valida para esta funcionalidad');
        this._router.navigate(['/']);
        return false
      }
        
  }

  
}

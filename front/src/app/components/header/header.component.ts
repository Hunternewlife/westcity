import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public logged = 'false';
  public logeo = false;

  constructor(
    private usuariosService:UsuariosService
  ) { }

  ngOnInit(): void {
    this.navSlide();

    console.log(this.logeo);
  }
  
  navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');
    const perfil = document.querySelectorAll('.perfil');
    // toggle bar
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('navactive');  
      // burger animation
      burger.classList.toggle('toggle');
      
    });
    //animate links
     navlinks.forEach((link, index) =>{
     /*  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      console.log(index/7);  */
    }); 
    

    let usuarioLogeado = this.usuariosService.obtenerUsuario();
    perfil.forEach(element => {
      if(this.usuariosService.isLogged() === 'true'){
        this.logeo = true;
        element.innerHTML = usuarioLogeado.nombre;
      } else {
        this.logeo = false;
      }
    }); 

    }

}




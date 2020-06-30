import { Component, OnInit, Renderer2 } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { gsap } from 'gsap/all';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  public logged = 'false';
  public logeo = false;

  constructor(
    private renderer: Renderer2,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.gsapAnimationsNav();
    this.navSlide();

    console.log(this.logeo);
  }

  navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');
    const perfil = document.querySelectorAll('.perfil');
    const login2 = document.querySelector('.login2');
    const nombre2 = document.querySelector('.nombre2');

    // toggle bar
    burger.addEventListener('click', () => {
      nav.classList.toggle('navactive');
      // burger animation
      burger.classList.toggle('toggle');
    });
    //animate links

    navlinks.forEach((link, index) => {
      this.renderer.setStyle(
        link,
        'animation',
        `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`,
      );
      //link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      console.log(index / 7);
    });
    /* link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      console.log(index/7);  */ 

    let usuarioLogeado = this.usuariosService.obtenerUsuario();
    perfil.forEach((element) => {
      if (this.usuariosService.isLogged()) {
        element.innerHTML = usuarioLogeado.nombre;
        login2.classList.toggle('noshow');
      }
    });
  };


  /*
    --------------------------------------------------- GSAP Animations ---------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------------------  
  */

  gsapAnimationsNav() {

    if (window.matchMedia("(min-width: 768px)").matches) {
      let tl = gsap.timeline({defaults:{opacity:0, ease:"back"}});

      tl.from("#nav", {y:-200, duration: 1, ease:"sine", autoAlpha:0})
        .from(".session", {y:-200, duration: 1, ease:"sine"}, "-=0.6")
        .from(".sessionlinks > li", {duration: 1}, "<")
        .from("#tituloNav", {y:-100, duration: 1, ease:"sine"}, "-=0.6")
        .from(".navlinks > li", {y: -20, duration: 1, stagger: 0.15}, "<")
        .from("#leyendaNav", {duration: 0.5}, "-=1")  
  }
}
}


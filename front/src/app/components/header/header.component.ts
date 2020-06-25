import { Component, OnInit, Renderer2 } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

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
        `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
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
}


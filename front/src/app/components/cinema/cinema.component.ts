import { Component, OnInit } from '@angular/core';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.gsapAnimationsCinema()
  }
  
/*
    --------------------------------------------------- GSAP Animations ---------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------------------  
  */

 gsapAnimationsCinema() {
  
  // Función para volver al inicio de la página
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  (function slide1() {
    let tl = gsap.timeline({defaults: {opacity: 0}});

        tl.from(".container", {duration: 2})
          .from("#tituloCin", {y:-50, duration: 1, ease:"back"}, "-=0.6")
          .from("#leyendaCin", {y:-25, duration: 1, ease:"back"}, "-=0.6")
  })();

  (function slide2() {
    let tl = gsap.timeline({defaults: {opacity: 0, duration: 1, ease: "back"}, scrollTrigger: {
      trigger: ".slide2", 
      start: "top center",
      end: "bottom center"
        }} );

        tl.from(".subtitulo", {x: -200, duration: 1.2 } )
          .from(".titulo2", {x: -200, duration: 2 }, "-=0.7" )
          .from(".imagen", {x: 200, duration: 2 }, "<" )
          .from(".bottitulo", {x: -200 }, "-=1.8" )
          .from(".parrafo", {x: -200 }, "-=1.8" )
          .from(".botones > .btn", {scale: 0.5, transformOrigin: "50% 50%" , stagger: 0.1 }, "-=1.5" )
  })();

  (function slide3() {
    let tl = gsap.timeline({defaults: {opacity: 0, duration: 1, ease: "back"}, scrollTrigger: {
      trigger: ".slide3", 
      start: "top center",
      end: "bottom center"
        }} );

        tl.from(".titulo3", {x: -200, duration: 1.2 } )
          .from(".comidalogo", {x: -200, duration: 2 }, "-=0.7" )
          .from(".lista > div", {x: 200, duration: 2, stagger: 0.1  }, "<" )
          .from(".btnSlide3", {scale: 0.5, transformOrigin: "50% 50%" }, "-=2" )
  })();

}

}

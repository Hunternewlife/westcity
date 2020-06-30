import { Component, OnInit } from '@angular/core';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.gsapAnimationsFooter();
  }

  irAEmpresa() {
    window.open("../../../assets/empresa/index.html", "_blank");
  }

  /*
    --------------------------------------------------- GSAP Animations ---------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------------------  
  */

 gsapAnimationsFooter() {
  let tl = gsap.timeline({defaults: {opacity: 0, duration: 1, ease: "back"}, scrollTrigger: {
    trigger: ".recomendaciones", 
    start: "top center+=100",
    end: "bottom center+=100"
      }} );

      tl.from(".recomendaciones > div", {y: 50, duration: 1.2, stagger: 0.2 } )
        .from(".tituloFooter", {y: 50 }, "-=0.7" )
        .from(".listaFooter", {y: 20, duration: 1.4 }, "-=0.9" )
        .from(".bot", { duration: 4 }, "<" )
 }

}

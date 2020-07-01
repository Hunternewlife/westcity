import { Component, OnInit } from '@angular/core';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

@Component({
  selector: 'app-confiteria',
  templateUrl: './confiteria.component.html',
  styleUrls: ['./confiteria.component.scss']
})
export class ConfiteriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.gsapAnimationsConfiteria();
  }

  /*
    --------------------------------------------------- GSAP Animations ---------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------------------  
  */

 gsapAnimationsConfiteria() {

  (function slide1() {
    let tl = gsap.timeline({defaults: {opacity: 0}});

        tl.from(".titulosConfi", {x: -100, duration: 2, ease:"back", stagger: 0.2}, 0.8)
          .from(".btnConfi", {duration: 1, ease:"back", scale: 0.5, transformOrigin: "50% 50%"}, "-=2")
          .from(".right", {x: 200, duration: 2, ease:"back"}, "-=2")
          .from(".red", {y: 50, duration: 2, ease:"back"}, "-=1.8")
          .from(".membresias", {y: 50, duration: 2, ease:"back"}, "<")
          
  })();

  }
}

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
    this.gsapAnimationsNav()
  }
  
/*
    --------------------------------------------------- GSAP Animations ---------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------------------  
  */

 gsapAnimationsNav() {
  let tl = gsap.timeline();
      // tl.from(".container", {opacity: 0, duration: 3})
        // .from(".session", {opacity: 0, y:-200, duration: 1}, "-=0.6")
}
}

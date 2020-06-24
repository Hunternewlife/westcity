import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.navSlide();
  }
  
  navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');
    // toggle bar
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('navactive');  
      // burger animation
      burger.classList.toggle('toggle');
      
    });
    //animate links
     navlinks.forEach((link, index) =>{
       this.renderer.setStyle(link,'animation',`navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`)
       //link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      console.log(index/7); 
    }); 
  }
}




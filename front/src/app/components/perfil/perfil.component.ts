import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  

  constructor() { 
    
  }

  ngOnInit(): void {
    this.showcase();
  
  }
  
  showcase = ()=>{
    const btnedit = document.querySelector('.btnedit');
    const edit = document.querySelector('.edit');
    const btnpass = document.querySelector('.btnpass');
    const pass = document.querySelector('.pass');
    btnedit.addEventListener('click', ()=>{
      edit.classList.toggle('show');
      pass.classList.toggle('show');
    });
    btnpass.addEventListener('click', ()=>{
      pass.classList.toggle('show');
      edit.classList.toggle('show');
    });
  }
 
}

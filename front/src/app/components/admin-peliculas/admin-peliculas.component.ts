import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.scss']
})
export class AdminPeliculasComponent implements OnInit {

  filterPeliculas = '';
  peliculas;
  
  constructor() { }

  ngOnInit(): void {
  }

}

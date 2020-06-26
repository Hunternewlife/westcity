import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

  filterUsuarios = '';
  usuarios;

  constructor() { }

  ngOnInit(): void {
  }

}

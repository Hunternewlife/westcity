import { Component, OnInit } from '@angular/core';

import { Usuario } from "../../modelo/usuario";

import { UsuariosService } from "../../services/usuarios.service";

import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private usuarioService : UsuariosService,
    private _router : Router
  ) {  }

  ngOnInit(): void {
  }

  
}

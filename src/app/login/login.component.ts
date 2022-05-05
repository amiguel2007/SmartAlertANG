// login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { alertasService } from "../alertas.service"
import { alerta } from '../alerta';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from "../users/users.service";


@Component({
  selector: "app-editar-alerta",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public userService: UsersService) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
    });
  }
}

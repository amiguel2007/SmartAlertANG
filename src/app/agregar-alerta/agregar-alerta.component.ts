import { Component, OnInit } from '@angular/core';
import { alerta } from '../alerta';
import { alertasService } from "../alertas.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-alerta',
  templateUrl: './agregar-alerta.component.html',
  styleUrls: ['./agregar-alerta.component.css']
})
export class AgregaralertaComponent implements OnInit {

  constructor(private alertasService: alertasService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  alertaModel = new alerta("", "", "", "", undefined)

  onSubmit() {
    this.alertasService.addalerta(this.alertaModel).subscribe(() => {
      this.snackBar.open('alerta guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/alertas']);
    })
  }

}

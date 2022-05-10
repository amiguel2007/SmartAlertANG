import { Component, OnInit } from '@angular/core';
import { alertasService } from "../alertas.service"
import { alerta } from "../alerta"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-alertas',
  templateUrl: './listar-alertas.component.html',
  styleUrls: ['./listar-alertas.component.css']
})
export class ListaralertasComponent implements OnInit {
  public alertas: alerta[] = [
    new alerta("Cargando...", "Cargando...", "Cargando...", "Cargando...", 20)
  ];

  constructor(private alertasService: alertasService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminaralerta(alerta: alerta) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${alerta.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.alertasService
          .deletealerta(alerta)
          .subscribe(() => {
            this.obteneralertas();
            this.snackBar.open('alerta eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    setInterval(() => {
      this.obteneralertas()
     }, 1500);
  }

  obteneralertas() {
    return this.alertasService
      .getalertas()
      .subscribe(
        (alertas: alerta[]) => this.alertas = alertas);
  }

}

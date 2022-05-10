import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { alertasService } from "../alertas.service"
import { alerta } from '../alerta';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-alerta',
  templateUrl: './editar-alerta.component.html',
  styleUrls: ['./editar-alerta.component.css']
})
export class EditaralertaComponent implements OnInit {

  public alerta: alerta = new alerta("", "", "", "", 0);

  constructor(private route: ActivatedRoute,
    private router: Router, private alertasService: alertasService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idalerta = this.route.snapshot.paramMap.get("id");
    this.alertasService.getalerta(idalerta).subscribe((alerta: alerta) => this.alerta = alerta)
  }

  volver() {
    this.router.navigate(['/alertas']);
  }

  onSubmit() {
    this.alertasService.updatealerta(this.alerta).subscribe(() => {
      this.snackBar.open('alerta actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}

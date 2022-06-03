import { Component, OnInit } from '@angular/core';
import { Form } from "../form";
import { alertasService } from "../alertas.service";
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public form: Form[] = [
    new Form("", "", "")
  ];

  constructor(private alertasService: alertasService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
/*   onSubmit(value: any){
    this.alertasService
    .enviarform(value)
    .subscribe(() => {
      this.snackBar.open('alerta eliminada', undefined, {
        duration: 1500,
      });

    console.log('Save: ', value.name);
})
}
 */
formModel = new Form("", "", "")

onSubmit(value: any) {
  this.alertasService.enviarform(this.formModel).subscribe(() => {
    this.snackBar.open('Formulario enviado', undefined, {
      duration: 1500,
    });
  })
}



}

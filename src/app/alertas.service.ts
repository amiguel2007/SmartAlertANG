import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alerta } from "./alerta"
import { form } from "./form"
import { environment } from "../environments/environment"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class alertasService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getalertas():Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getalerta(id: string | number):Observable<any> {
    return this.http.get(`${this.baseUrl}/get.php?idalerta=${id}`);
  }

  addalerta(alerta: alerta):Observable<any> {
    return this.http.post(`${this.baseUrl}/post.php`, alerta);
  }

  deletealerta(alerta: alerta):Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete.php?idalerta=${alerta.id}`);
  }

  enviarform(form: form):Observable<any> {
    return this.http.delete(`http://localhost/mail/PHPMailer-master/mail.php?idalerta=${form.email}`);
    console.log("enviado");
  }

  updatealerta(alerta: alerta):Observable<any> {
    return this.http.put(`${this.baseUrl}/update.php`, alerta);
  }
}

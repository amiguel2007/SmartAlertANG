import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alerta } from "./alerta"
import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class alertasService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getalertas() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getalerta(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idalerta=${id}`);
  }

  addalerta(alerta: alerta) {
    return this.http.post(`${this.baseUrl}/post.php`, alerta);
  }

  deletealerta(alerta: alerta) {
    return this.http.delete(`${this.baseUrl}/delete.php?idalerta=${alerta.id}`);
  }

  updatealerta(alerta: alerta) {
    return this.http.put(`${this.baseUrl}/update.php`, alerta);
  }
}

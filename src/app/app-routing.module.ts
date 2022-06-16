import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaralertasComponent } from './listar-alertas/listar-alertas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "alertas", component: ListaralertasComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

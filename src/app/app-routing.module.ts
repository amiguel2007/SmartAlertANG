import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregaralertaComponent } from './agregar-alerta/agregar-alerta.component';
import { ListaralertasComponent } from './listar-alertas/listar-alertas.component';
import { EditaralertaComponent } from './editar-alerta/editar-alerta.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "alertas", component: ListaralertasComponent },
  { path: "alertas/agregar", component: AgregaralertaComponent },
  { path: "alertas/editar/:id", component: EditaralertaComponent },
  //{ path: "", redirectTo: "/alertas", pathMatch: "full" },
  //{ path: "**", redirectTo: "/alertas" },

  //{ path: "", component: AppComponent, pathMatch: "full" },

  { path: "login", component: LoginComponent },

  { path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaralertasComponent } from './listar-alertas/listar-alertas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "alertas", component: ListaralertasComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "home", component: HomeComponent },
  //{ path: "", redirectTo: "/alertas", pathMatch: "full" },
  { path: "**", redirectTo: "/home" },

  //{ path: "", component: AppComponent, pathMatch: "full" },

  // { path: "login", component: LoginComponent },

  // { path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';


const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
      children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'usuarios', component: UsuariosComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
       ]
  },
  {path: 'login', component:LoginComponent},

];
//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

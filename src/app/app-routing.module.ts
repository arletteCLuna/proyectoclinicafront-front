import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './login/interfaces/e404/e404.component';
import { canActivate, canMatch } from './login/guards/guards.guard';
import { LoginComponent } from './login/pages/login/login.component';
const routes: Routes = [
  //RUTAS DE NAVEGACIÓN
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: E404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';
import {LoginComponent} from "./login/login.component";

const usersRoutes: Routes = [
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes),
    LocalizeRouterModule.forChild(usersRoutes)
  ],
  exports: [ RouterModule, LocalizeRouterModule ]
})
export class LoginRoutingModule { }

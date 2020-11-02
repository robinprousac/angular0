import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'login-component', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

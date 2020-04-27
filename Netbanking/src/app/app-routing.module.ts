import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const route: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(route)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComp = [SignupComponent, LoginComponent]

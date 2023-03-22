import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/auth/login/login.component';
import { RegisterComponent } from '../pages/auth/register/register.component';


const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: "auth/login",
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

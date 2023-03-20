import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsConnectedGuard } from './guardian/is-connected.guard';
import { IndexComponent } from './pages/admin/index/index.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvitationComponent } from './pages/invitation/invitation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ObservationComponent } from './pages/observation/observation.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

const routes: Routes = [

  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'invitation',
    component: InvitationComponent
  },
  {
    path: 'observation',
    component: ObservationComponent
  },
  {
    path: 'admin',
    component: IndexComponent,
    /* loadChildren : ()=> import('./modules/admin.layout.module').then(m => m.AdminLayoutModule), */
    canActivate : [IsConnectedGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   {
    path : '**',
    component : NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

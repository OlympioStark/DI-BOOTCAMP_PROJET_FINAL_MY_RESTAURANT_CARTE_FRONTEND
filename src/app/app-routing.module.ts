import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './components/tables/tables.component';
import { IsConnectedGuard } from './guardian/is-connected.guard';
import { IndexComponent } from './pages/admin/index/index.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GestionnaireComponent } from './pages/gestionnaire/gestionnaire.component';
import { InvitationComponent } from './pages/invitation/invitation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ObservationComponent } from './pages/observation/observation.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

const routes: Routes = [
  {
    path:'',
    loadChildren : ()=> import('./modules/auth.layout.module').then(m => m.AuthLayoutModule),
  },
  {
    path:'home',
    loadChildren : ()=> import('./modules/customer.layout.module').then(m => m.CustomerLayoutModule),
    canActivate : [IsConnectedGuard]
  },
  {
    path: 'admin',
    loadChildren : ()=> import('./modules/admin.layout.module').then(m => m.AdminLayoutModule),
    canActivate : [IsConnectedGuard]
  },
  {
    path: 'gestion',
    loadChildren : ()=> import('./modules/gestion.layout.module').then(m => m.GestionLayoutModule),
    canActivate : [IsConnectedGuard]
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

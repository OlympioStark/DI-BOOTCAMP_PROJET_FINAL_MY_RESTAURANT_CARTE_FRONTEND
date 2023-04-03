import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from 'src/app/pages/reservation/reservation.component';
import { InvitationComponent } from 'src/app/pages/invitation/invitation.component';
import { ObservationComponent } from 'src/app/pages/observation/observation.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AccueilComponent } from '../components/accueil/accueil.component';

const routes: Routes = [
  {
    path: 'home',
    component: AccueilComponent,
    children: [
      {
        path: 'dash',
        component: DashboardComponent
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
    ]
  },
  /* {
    path: '',
    redirectTo: "home",
    pathMatch: 'full'
  } */

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

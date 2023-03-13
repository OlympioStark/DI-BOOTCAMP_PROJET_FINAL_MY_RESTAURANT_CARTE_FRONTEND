import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from 'src/app/pages/reservation/reservation.component';
import { InvitationComponent } from 'src/app/pages/invitation/invitation.component';
import { ObservationComponent } from 'src/app/pages/observation/observation.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

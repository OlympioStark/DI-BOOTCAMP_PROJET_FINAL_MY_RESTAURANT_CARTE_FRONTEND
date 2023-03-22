import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from 'src/app/pages/reservation/reservation.component';
import { InvitationComponent } from 'src/app/pages/invitation/invitation.component';
import { ObservationComponent } from 'src/app/pages/observation/observation.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }

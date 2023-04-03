import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ReservationComponent } from '../pages/reservation/reservation.component';
import { InvitationComponent } from '../pages/invitation/invitation.component';
import { ObservationComponent } from '../pages/observation/observation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule, TuiInputPhoneInternationalModule, TuiSortCountriesPipeModule, TuiTextAreaModule, TuiCarouselModule, TuiIslandModule } from '@taiga-ui/kit';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { DashboardRoutingModule } from '../routes/dashboard-routing.module';
import { AccueilComponent } from '../components/accueil/accueil.component';





@NgModule({
  imports : [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiInputPhoneInternationalModule,
    TuiSortCountriesPipeModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiCarouselModule,
    TuiIslandModule,
    MatDialogModule,
    CommonModule,
    /* HttpClientModule, */
    DashboardRoutingModule
  ],
  declarations : [
    DashboardComponent,
    ReservationComponent,
    InvitationComponent,
    ObservationComponent,
    NavbarComponent,
    SidebarComponent,
    AccueilComponent
  ]
})
export class CustomerLayoutModule {

}
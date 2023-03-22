import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule, TuiInputPhoneInternationalModule, TuiSortCountriesPipeModule, TuiTextAreaModule, TuiCarouselModule, TuiIslandModule } from '@taiga-ui/kit';
import { GestionnaireComponent } from '../pages/gestionnaire/gestionnaire.component';
import { GestionRoutingModule } from '../routes/gestion-routing.module';



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
    GestionRoutingModule
  ],
  declarations : [
    GestionnaireComponent
  ]
})
export class GestionLayoutModule {

}
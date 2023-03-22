import { NgModule } from '@angular/core';
import { IndexComponent } from '../pages/admin/index/index.component';
import { RestaurantComponent } from "../pages/admin/restaurant/restaurant.component";
import { TablesComponent } from '../components/tables/tables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule, TuiInputPhoneInternationalModule, TuiSortCountriesPipeModule, TuiTextAreaModule, TuiCarouselModule, TuiIslandModule } from '@taiga-ui/kit';
import { AdminRoutingModule } from '../routes/admin-routing.module';



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
    AdminRoutingModule
  ],
  declarations : [
    IndexComponent,
    RestaurantComponent,
    TablesComponent
  ]
})
export class AdminLayoutModule {

}
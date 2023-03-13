import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from '../routes/dashboard-routing/dashboard-routing.module';
import { RestaurantComponent } from '../pages/admin/restaurant/restaurant.component';
import { IndexComponent } from '../pages/admin/index/index.component';


@NgModule({
  imports : [DashboardRoutingModule],
  declarations : [RestaurantComponent,IndexComponent]
})
export class AdminLayoutModule {

}
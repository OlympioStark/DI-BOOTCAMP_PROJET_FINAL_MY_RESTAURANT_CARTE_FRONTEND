import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from 'src/app/pages/admin/index/index.component';
import { RestaurantComponent } from 'src/app/pages/admin/restaurant/restaurant.component';
import { TablesComponent } from 'src/app/components/tables/tables.component';

const routes: Routes = [
    {
        path: 'admin',
        component: IndexComponent
    },
    {
        path: 'restaurant',
        component: RestaurantComponent
    },
    {
        path: 'tables',
        component: TablesComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

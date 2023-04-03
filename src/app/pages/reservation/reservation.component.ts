import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/app/environment/dev';
import { Customer } from 'src/app/models/customer';
import { Reservation } from 'src/app/models/reservation';
import { Restaurant } from 'src/app/models/restaurant';
import { Tables } from 'src/app/models/tables';
import { ReservationService } from 'src/app/services/api/reservation.service';
import { RestaurantService } from 'src/app/services/api/restaurant.service';
import { TablesService } from 'src/app/services/api/tables.service';
import { StorageService } from 'src/app/services/Storage/storage.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  restaurant!: any;
  table!: any;
  idRest!: number;
  reservation: Reservation = new Reservation();

  constructor(private tableService: TablesService, private router : Router,
     private restaurantService: RestaurantService, private route:ActivatedRoute,
     private reservationService: ReservationService){ 
    
   }

   ngOnInit(): void {
    
    this.getRestaurants();
    this.getTables();
   }

   goToChoiceTable(){
      this.router.navigate(['/home/invitation']);
      this.reservationService.createReservation(this.reservation).subscribe((data: any) =>{
        console.log(data);
      });
    }

    getRestaurants() {
      this.restaurantService.getAllRestaurant().subscribe((data: any) =>{
        this.restaurant = data;
        console.log(this.restaurant);
      });
    }

    getTables() {
      this.tableService.getAllTable().subscribe((dat: any)=>{
        this.table = dat;
        console.log(this.table);
      });
    }

}

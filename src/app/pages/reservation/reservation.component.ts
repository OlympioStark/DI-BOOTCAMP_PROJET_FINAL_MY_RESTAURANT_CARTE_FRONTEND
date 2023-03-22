import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/app/environment/dev';
import { Customer } from 'src/app/models/customer';
import { Reservation } from 'src/app/models/reservation';
import { Restaurant } from 'src/app/models/restaurant';
import { Tables } from 'src/app/models/tables';
import { RestaurantService } from 'src/app/services/api/restaurant.service';
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

  constructor(private formBuilder: FormBuilder, private router : Router,
     private restaurantService: RestaurantService, private route:ActivatedRoute){ 
    
   }

   ngOnInit(): void {
    
    this.getRestaurants();
   }

   goToChoiceTable(){
      this.router.navigate(['/plats']);
    }

    getRestaurants() {
      this.restaurantService.getAllRestaurant().subscribe((data) =>{
        this.restaurant = data;
      });
    }

}

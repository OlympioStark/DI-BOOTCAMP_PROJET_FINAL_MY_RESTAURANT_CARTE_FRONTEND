import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { Restaurant } from 'src/app/models/restaurant';
import { ReservationService } from 'src/app/services/api/reservation.service';
import { RestaurantService } from 'src/app/services/api/restaurant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id!: number;
  reserv!: any[];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {

    this.reservationService.getAllReservation().subscribe((data) => {
      console.log(data);
      this.reserv = data;
    })
    
  }



}

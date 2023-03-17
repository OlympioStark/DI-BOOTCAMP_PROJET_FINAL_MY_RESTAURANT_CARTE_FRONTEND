import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/api/reservation.service';

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent {

  /* reservations!: Reservation;
  reserv!: any;

  constructor(private reservationService: ReservationService) {}

  totalLength!: any;
  page: number = 1;
  val = "Confirmé";
  val1 = "Annulé";

  ngOnInit(): void {
    
  }

  getUsers() {
    this.reservationService.getAllReservation().subscribe((data : any)=>{
      this.reserv = data;
      console.log(this.reserv);
    })
  } */

}

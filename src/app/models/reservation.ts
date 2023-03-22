import { Restaurant } from "./restaurant";
import { Tables } from "./tables";

export class Reservation {

    reservationId!: number;
    reservationDate!: Date;
    timeReservation!: String;
    restaurantReserved!: Restaurant;
    tableReserved!: Tables;
    status : boolean = true;

}

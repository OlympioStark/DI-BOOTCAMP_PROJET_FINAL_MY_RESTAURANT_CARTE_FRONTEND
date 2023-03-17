import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL = "http://localhost:8080/api/reserv/reservation";

  constructor(private httpClient: HttpClient) { }

  getAllReservation(): Observable<ReservationService[]> {
    return this.httpClient.get<ReservationService[]>(this.baseURL);
  }

  createReservation(reservation: Reservation): Observable<Object> {
    return this.httpClient.post(this.baseURL, reservation);
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.httpClient.get<Reservation>(this.baseURL +'/'+ id);
  }

  updateReservation(id: number, reservation: Reservation): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, reservation);
  }

  deleteReservation(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }
}

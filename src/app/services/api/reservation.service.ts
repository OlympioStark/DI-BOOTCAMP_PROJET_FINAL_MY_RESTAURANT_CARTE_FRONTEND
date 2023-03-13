import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL = "http://localhost:8080/api/customer";

  constructor(private httpClient: HttpClient) { }

  getAllCarte(): Observable<ReservationService[]> {
    return this.httpClient.get<ReservationService[]>(this.baseURL);
  }

  createCarte(reservation: Reservation): Observable<Object> {
    return this.httpClient.post(this.baseURL, reservation);
  }

  getCarteById(id: number): Observable<Reservation> {
    return this.httpClient.get<Reservation>(this.baseURL +'/'+ id);
  }

  updateCarte(id: number, reservation: Reservation): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, reservation);
  }

  deleteCarte(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }
}

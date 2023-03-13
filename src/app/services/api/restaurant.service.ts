import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseURL = "http://localhost:8080/api/customer";

  constructor(private httpClient: HttpClient) { }

  getAllCarte(): Observable<RestaurantService[]> {
    return this.httpClient.get<RestaurantService[]>(this.baseURL);
  }

  createCarte(restaurant: Restaurant): Observable<Object> {
    return this.httpClient.post(this.baseURL, restaurant);
  }

  getCarteById(id: number): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(this.baseURL +'/'+ id);
  }

  updateCarte(id: number, restaurant: Restaurant): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, restaurant);
  }

  deleteCarte(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }
}

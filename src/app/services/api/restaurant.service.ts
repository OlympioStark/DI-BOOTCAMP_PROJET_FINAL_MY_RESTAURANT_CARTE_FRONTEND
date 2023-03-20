import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseURL = "http://localhost:8080/api/rest/restaurant";

  constructor(private httpClient: HttpClient) { }

  getAllRestaurant(): Observable<RestaurantService[]> {
    return this.httpClient.get<RestaurantService[]>(this.baseURL);
  }

  createRestaurant(restaurant: Restaurant): Observable<Object> {
    return this.httpClient.post(this.baseURL, restaurant);
  }

  getRestaurantById(id: number): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(this.baseURL +'/'+ id);
  }

  updateRestaurant(id: number, restaurant: Restaurant): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, restaurant);
  }

  deleteRestaurant(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }
}

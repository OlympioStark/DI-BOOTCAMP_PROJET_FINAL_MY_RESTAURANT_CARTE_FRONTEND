import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseURL = "http://localhost:8080/api/customer";

  constructor(private httpClient: HttpClient) { }

  getAllCarte(): Observable<FoodService[]> {
    return this.httpClient.get<FoodService[]>(this.baseURL);
  }

  createCarte(food: Food): Observable<Object> {
    return this.httpClient.post(this.baseURL, food);
  }

  getCarteById(id: number): Observable<Food> {
    return this.httpClient.get<Food>(this.baseURL +'/'+ id);
  }

  updateCarte(id: number, food: Food): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, food);
  }

  deleteCarte(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }
  
}

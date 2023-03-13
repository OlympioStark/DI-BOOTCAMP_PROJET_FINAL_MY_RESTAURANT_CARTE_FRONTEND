import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carte } from 'src/app/models/carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  private baseURL = "http://localhost:8080/api/carte";

  constructor(private httpClient: HttpClient) { }

  getAllCarte(): Observable<CarteService[]> {
    return this.httpClient.get<CarteService[]>(this.baseURL);
  }

  createCarte(carte: Carte): Observable<Object> {
    return this.httpClient.post(this.baseURL, carte);
  }

  getCarteById(id: number): Observable<Carte> {
    return this.httpClient.get<Carte>(this.baseURL +'/'+ id);
  }

  updateCarte(id: number, carte: Carte): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, carte);
  }

  deleteCarte(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }
}

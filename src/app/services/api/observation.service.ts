import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observation } from 'src/app/models/observation';


@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  private baseURL = "http://localhost:8080/api/customer";

  constructor(private httpClient: HttpClient) { }

  getAllCarte(): Observable<ObservationService[]> {
    return this.httpClient.get<ObservationService[]>(this.baseURL);
  }

  createCarte(observation: Observation): Observable<Object> {
    return this.httpClient.post(this.baseURL, observation);
  }

  getCarteById(id: number): Observable<Observation> {
    return this.httpClient.get<Observation>(this.baseURL +'/'+ id);
  }

  updateCarte(id: number, observation: Observation): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, observation);
  }

  deleteCarte(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }

}

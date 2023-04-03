import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observation } from 'src/app/models/observation';


@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  private baseURL = "http://localhost:8080/api/mrc/obs/observation";

  constructor(private httpClient: HttpClient) { }

  getAllObservation(): Observable<ObservationService[]> {
    return this.httpClient.get<ObservationService[]>(this.baseURL);
  }

  createObservation(observation: Observation): Observable<Object> {
    return this.httpClient.post(this.baseURL, observation);
  }

  getObservationById(id: number): Observable<Observation> {
    return this.httpClient.get<Observation>(this.baseURL +'/'+ id);
  }

  updateObservation(id: number, observation: Observation): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, observation);
  }

  deleteObservation(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }

}

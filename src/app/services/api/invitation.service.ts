import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invitation } from 'src/app/models/invitation';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  private baseURL = "http://localhost:8080/api/customer";

  constructor(private httpClient: HttpClient) { }

  getAllCarte(): Observable<InvitationService[]> {
    return this.httpClient.get<InvitationService[]>(this.baseURL);
  }

  createCarte(invitation: Invitation): Observable<Object> {
    return this.httpClient.post(this.baseURL, invitation);
  }

  getCarteById(id: number): Observable<Invitation> {
    return this.httpClient.get<Invitation>(this.baseURL +'/'+ id);
  }

  updateCarte(id: number, invitation: Invitation): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, invitation);
  }

  deleteCarte(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }

}

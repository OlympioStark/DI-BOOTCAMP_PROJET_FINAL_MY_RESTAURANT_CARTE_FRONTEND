import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invitation } from 'src/app/models/invitation';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  private baseURL = "http://localhost:8080/api/mrc/inv/invitation";

  constructor(private httpClient: HttpClient) { }

  getAllInvitation(): Observable<InvitationService[]> {
    return this.httpClient.get<InvitationService[]>(this.baseURL);
  }

  createInvitation(invitation: Invitation): Observable<Object> {
    return this.httpClient.post(this.baseURL, invitation);
  }

  getInvitationById(id: number): Observable<Invitation> {
    return this.httpClient.get<Invitation>(this.baseURL +'/'+ id);
  }

  updateInvitation(id: number, invitation: Invitation): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, invitation);
  }

  deleteInvitation(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }

}

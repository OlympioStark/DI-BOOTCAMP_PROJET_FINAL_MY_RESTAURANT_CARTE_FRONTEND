import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tables } from 'src/app/models/tables';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  private baseURL = "http://localhost:8080/api/tables";

  constructor(private httpClient: HttpClient) { }

  getAllCarte(): Observable<TablesService[]> {
    return this.httpClient.get<TablesService[]>(this.baseURL);
  }

  createCarte(tables: Tables): Observable<Object> {
    return this.httpClient.post(this.baseURL, tables);
  }

  getCarteById(id: number): Observable<Tables> {
    return this.httpClient.get<Tables>(this.baseURL +'/'+ id);
  }

  updateCarte(id: number, tables: Tables): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, tables);
  }

  deleteCarte(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tables } from 'src/app/models/tables';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  private baseURL = "http://localhost:8080/api/tab/tables";

  constructor(private httpClient: HttpClient) { }

  getAllTable(): Observable<TablesService[]> {
    return this.httpClient.get<TablesService[]>(this.baseURL);
  }

  createTable(tables: Tables): Observable<Object> {
    return this.httpClient.post(this.baseURL, tables);
  }

  getTableById(id: number): Observable<Tables> {
    return this.httpClient.get<Tables>(this.baseURL +'/'+ id);
  }

  updateTable(id: number, tables: Tables): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, tables);
  }

  deleteTable(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private baseURL = "http://localhost:8080/api/customer";

  constructor(private httpClient: HttpClient) { }

  getAllCustomer(): Observable<CustomerService[]> {
    return this.httpClient.get<CustomerService[]>(this.baseURL);
  }

  createCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post(this.baseURL, customer);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseURL +'/'+ id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Object> {
    return this.httpClient.put(this.baseURL +'/'+ id, customer);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL +'/'+ id, {responseType:"text"})
  }
}

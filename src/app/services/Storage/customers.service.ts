import { environment } from '../../environment/dev';
import { StorageService } from './storage.service';
import { Customer } from "../../models/customer";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn :'root'
})
export class CustomersService {

  customers ?: Customer;

  constructor(private storageService : StorageService ){
    this.customers = JSON.parse(this.storageService.get(environment.ADACIKEY) as string);
  }

  logout(){
    this.storageService.delete(environment.ADACIKEY);
  }

  isConnected() : boolean {
    return !!this.customers;
  }

  getUser() : Customer{
   return this.customers as Customer;
  }
}
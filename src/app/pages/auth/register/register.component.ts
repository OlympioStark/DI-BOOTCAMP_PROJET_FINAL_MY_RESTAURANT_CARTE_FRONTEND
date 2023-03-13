import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environment/dev';
import { Customer } from 'src/app/models/customer';
import { StorageService } from '../../../services/Storage/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  erreur : string = "";
  customer!: Customer;

  constructor(private storageService: StorageService, private router : Router){ }


    register(){
  
      const validation = this.emailPattern.test(this.customer.email)
      && this.customer.password.length > 6;
  
      if(validation)
      {
        this.storageService.set({key : environment.ADACIKEY,value : JSON.stringify(this.customer)});
        return  this.router.navigate(["/login"]) ;
      }
  
      return this.erreur = "Veuillez renseigner tout les champs";
    }

}

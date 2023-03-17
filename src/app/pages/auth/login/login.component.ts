import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/Storage/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  readonly form = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

    erreur : string = '';
    customer : any = {};

  constructor(private customersService: CustomersService , private router : Router){

  }
  login(){
    const customers = this.customersService.getCustomer();

    if(customers?.email == this.customer.email && customers?.password == this?.customer.password)
    {
      return location.href = "/home";
    }
    return (this.erreur = "Email ou mot de passe incorrect !")
  }

}

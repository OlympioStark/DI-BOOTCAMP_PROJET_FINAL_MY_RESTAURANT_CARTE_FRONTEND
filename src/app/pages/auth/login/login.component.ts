import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/api/customer.service';
import { CustomersService } from 'src/app/services/Storage/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* readonly formLogin = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

    erreur : string = '';
    customer : any = {}; */

    customerC: any = {};
    loginName!: string;
    passwordC!: string;
    errorMessage: string = "Login incorrect";
    pwdMessage: string = "Mot de passe incorrect";
    name!: string;
    connect!: boolean;

  constructor(private customersService: CustomersService , private router : Router,
    private customerService: CustomerService){

  }

  ngOnInit(): void {
    this.customerService.isLogin = false;
  }

  login(){
    this.customerService.isLogin = true;
    this.router.navigate(["/home/home"]);

  
    /* const customers = this.customersService.getCustomer();

    if(customers?.email == this.customer.email && customers?.password == this?.customer.password)
    {
      return (this.router.navigate(["/home/dash"]));
    }
    return (this.erreur = "Email ou mot de passe incorrect !") 

    this.customerService.getCustomerByLogin(this.loginName).subscribe((response: any) => {
      this.customerC = response;
      console.log(this.customerC)

      if(this.customerC.password != this.passwordC)
      {

        this.router.navigate(["/auth/login"]);
        
         this.dialogueService.errorConnexion(this.pwdMessage)
        .afterClosed().subscribe((res : any) => {
          console.log(res);
        }) 
      } else {
        this.name = this.customerC.lastName;
        localStorage.setItem('name', this.name);
        this.customerService.isLogin = true;
        this.connect = this.customerService.isLogin;
        this.router.navigate(["/home"]);
      } 
    });*/
  }

}

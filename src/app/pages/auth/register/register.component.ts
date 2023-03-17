import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
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

  readonly form = new FormGroup ({
    lname: new FormControl('', [Validators.required]),
    fname: new FormControl('', [Validators.required]),
    number: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('password', Validators.required),
  })

  readonly countries = Object.values(TuiCountryIsoCode);
 

  countryIsoCode = TuiCountryIsoCode.CI;

  emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  erreur : string = "";
  customer!: Customer;

  constructor(private storageService: StorageService, private router : Router){ }


  connexion(){
  
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

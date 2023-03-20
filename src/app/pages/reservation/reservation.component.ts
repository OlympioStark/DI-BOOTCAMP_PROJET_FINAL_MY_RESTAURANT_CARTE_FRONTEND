import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environment/dev';
import { Customer } from 'src/app/models/customer';
import { StorageService } from 'src/app/services/Storage/storage.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router : Router){ 
    this.form = this.formBuilder.group ({
      locals: ['',Validators.required],
      libelleRest: ['',Validators.required],
    }) 
   }

    register(){
      this.router.navigate(['/plats']);
    }

}

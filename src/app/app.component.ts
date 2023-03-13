import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* readonly form = new FormGroup ({
    lastname: new FormControl('', [Validators.required, Validators.lastname]),
    firstname: new FormControl('', [Validators.required, Validators.firstname]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.password])
  }) */
}

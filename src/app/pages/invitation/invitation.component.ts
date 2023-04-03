import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import { Invitation } from 'src/app/models/invitation';
import { InvitationService } from 'src/app/services/api/invitation.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent {

  invitation: Invitation = new Invitation;

  formInvitation!: FormGroup;

  readonly countries = Object.values(TuiCountryIsoCode);
 

  countryIsoCode = TuiCountryIsoCode.CI;

  constructor(private formBuilder: FormBuilder, private router : Router,
            private invitationService: InvitationService){ 
    /*  */
   }

    inviter(){
      this.invitationService.createInvitation(this.invitation).subscribe((data: any) => {
      console.log(data);
      this.goToNextPage();
      },
      error => console.error(error))
    }

    goToNextPage() {
      this.router.navigate(['/home/home'])
    }

    onSubmit() {
      console.log(this.invitation);
    }

}

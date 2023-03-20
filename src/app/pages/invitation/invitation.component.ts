import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder, private router : Router,
            private invitationService: InvitationService){ 
    this.formInvitation = this.formBuilder.group ({
      gFullname: ['',Validators.required],
      gEmail: ['',Validators.required],
      gNumber: ['', Validators.required]
    }) 
   }

    inviter(){
      this.invitationService.createInvitation(this.invitation).subscribe((data: any) => {
      console.log(data);
      this.goToNextPage();
      })
    }

    goToNextPage() {
      this.router.navigate(['/home'])
    }

    onSubmit() {
      console.log(this.invitation);
    }

}

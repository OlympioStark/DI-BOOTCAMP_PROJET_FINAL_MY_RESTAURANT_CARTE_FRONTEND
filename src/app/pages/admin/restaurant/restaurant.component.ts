import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/alerts/alerts.service';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/api/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurantForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService,
    private router: Router, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogueRef: MatDialogRef<RestaurantComponent>, 
    private notifService: AlertsService) { 

      this.restaurantForm = this.formBuilder.group ({
      libelleRest: ['',Validators.required],
      pictureL: ['',Validators.required],
      localRest: ['',Validators.required],
    }) 
  }

    ngOnInit(): void {
    }
  
    saveUtilisateur() {
      this.restaurantService.createRestaurant(this.restaurantForm.value).subscribe((data) => {
        console.log(data);
        this.goToRestaurantList();
        this.notifService.enregistrer().afterClosed().subscribe((repEng : any) => {
          console.log(repEng);
        })
      },
      error =>{console.error(error)});
    }
  
    goToRestaurantList() {
      this.router.navigate(['/index']);
    }
  
    onSubmit() {
      console.log(this.restaurantForm.value);
      this.saveUtilisateur();
    }
  
    closeDialogue() {
      this.dialogueRef.close(false);
    }

    /* register(){
  
      const validation = this.emailPattern.test(this.customer.email)
      && this.customer.password.length > 6;
  
      if(validation)
      {
        this.storageService.set({key : environment.ADACIKEY,value : JSON.stringify(this.customer)});
        return  this.router.navigate(["/login"]) ;
      }
  
      return this.erreur = "Veuillez renseigner tout les champs";
    }
 */
}

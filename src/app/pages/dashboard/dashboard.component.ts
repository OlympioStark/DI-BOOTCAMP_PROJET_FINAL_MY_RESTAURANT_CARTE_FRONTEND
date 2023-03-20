import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/api/restaurant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id!: number;
  restaurant!: Restaurant[];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    
  }

  getPictureLink() {
    this.restaurantService.getRestaurantById(this.id).subscribe((data : any) =>{
      this.restaurant= this.restaurant;
      console.log(this.restaurant)
    })
  }

}

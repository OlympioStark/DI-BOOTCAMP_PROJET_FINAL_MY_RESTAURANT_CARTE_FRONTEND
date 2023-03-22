import { Component } from '@angular/core';
import { Observation } from 'src/app/models/observation';
import { ObservationService } from 'src/app/services/api/observation.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent {

  observation: Observation = new Observation();

  constructor(private observationService: ObservationService) {}

  shareOpinion() {
    this.observationService.createObservation(this.observation).subscribe((data: any) => {
      console.log(data);
    }, 
    error => console.error(error));
  }

}

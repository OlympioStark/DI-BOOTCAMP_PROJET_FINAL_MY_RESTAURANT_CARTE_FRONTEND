import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-dashboard',
  template: '<h2 class="tui-island__title">{{title}}</h2>,<p>{{description}}</p>, <img src="{{imageLink}}" alt="">',
  templateUrl: './carousel-dashboard.component.html',
  styleUrls: ['./carousel-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselDashboardComponent {

  @Input() title!: string;
  @Input() description!: string;
  @Input() imageLink!: string;

}

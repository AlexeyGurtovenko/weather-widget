import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-daily-forecast-short',
  templateUrl: './daily-forecast-short.component.html',
  styleUrls: ['./daily-forecast-short.component.scss']
})
export class DailyForecastShortComponent {

  @Input() weekday: string = 'Mon';
  @Input() imgUrl: string = '';
  @Input() maxTemp: number = NaN;
  @Input() minTemp: number = NaN;
  @Input() tempUnits: string = 'C';

  constructor() { }
}

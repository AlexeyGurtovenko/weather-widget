import { WeekDay } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-daily-forecast-short',
  templateUrl: './daily-forecast-short.component.html',
  styleUrls: ['./daily-forecast-short.component.scss']
})
export class DailyForecastShortComponent {

  private _weekday: string = '';

  @Input() set date(value: string) {
    if (value == null)
      return;
    
    const date = new Date(value);
    this._weekday = WeekDay[date.getDay()].slice(0, 3);
  };

  get weekday() {
    return this._weekday; 
  }

  @Input() imgUrl: string = '';
  @Input() maxTemp: number = NaN;
  @Input() minTemp: number = NaN;
  @Input() tempUnits: string = 'C';

  constructor() { }
}

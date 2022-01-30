import { Component, OnInit } from '@angular/core';
import { IFullDailyForecast } from '../models/daily-forecast.model';
import { WeatherApiService } from '../services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dailyForecast$ = this._weatherService.dailyForecast$;

  forecast: IFullDailyForecast | null = null;

  constructor (private _weatherService: WeatherApiService) {
  }

  ngOnInit(): void {
    this._weatherService.updateDailyForecast();
  }

  showExtendedForecast(day: IFullDailyForecast) {
    this.forecast = Object.assign(this.forecast ?? {}, day);
    
    this.forecast.hour =
      this.forecast.hour.filter((_, index) => index % 4 === 0); // every fourth hour of the day
  }
}

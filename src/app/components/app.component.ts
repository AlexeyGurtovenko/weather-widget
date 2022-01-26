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
    const startDate = new Date();
    const endDate = new Date(new Date().setHours(new Date().getHours() + 6));

    this.forecast = day;
    
    this.forecast.hour = 
    this.forecast.hour.filter(hour => {
      const date = new Date(hour.time);
      return date >= startDate && date <= endDate;
    })
  }

  hideExtendedForecast() {
    this.forecast = null;
  }
}

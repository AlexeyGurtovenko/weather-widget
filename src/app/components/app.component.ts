import { Component } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (private _weatherService: WeatherApiService) {
    // this._weatherService.getDailyForecast()
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DEFAULT_LOCATION } from '../constants';
import { ICurrentWeatherApiResponse } from '../models/current-weather-api-response.model';
import { ICurrentWeather } from '../models/current-weather.model';
import { IForecastApiResponse } from '../models/forecast-api-response.model';
import { IFullDailyForecast } from '../models/daily-forecast.model';
import { ILocation } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private _currentSubject = new ReplaySubject<ICurrentWeather>(1);

  get current$(): Observable<ICurrentWeather> {
    return this._currentSubject.asObservable();
  }

  private _dailyForecastSubject = new ReplaySubject<IFullDailyForecast[]>(1);

  get dailyForecast$(): Observable<IFullDailyForecast[]> {
    return this._dailyForecastSubject.asObservable();
  }
  
  constructor (private _http: HttpClient) { }
  
  updateCurrentWeather(location: string = DEFAULT_LOCATION.name) {

    const url = `${environment.base_weather_api_url}/current.json`;
    
    let params = new HttpParams();
    params = params.append('key', environment.weather_api_key);
    params = params.append('q', location);
    params = params.append('aqi', 'no');

    this._http.get<ICurrentWeatherApiResponse>(url, { params })
      .pipe(catchError(error => { throw error })) // TODO: display HttpErrors in a more user friendly way
      .subscribe(data => this._currentSubject.next(data.current));
  }

  updateDailyForecast(location: string = DEFAULT_LOCATION.name, days: number = 3) {

    const url = `${environment.base_weather_api_url}/forecast.json`;
    
    let params = new HttpParams();
    params = params.append('key', environment.weather_api_key);
    params = params.append('q', location);
    params = params.append('days', days);
    params = params.append('aqi', 'no');
    params = params.append('alerts', 'no');

    this._http.get<IForecastApiResponse>(url, { params })
      .pipe(catchError(error => { throw error })) // TODO: display HttpErrors in a more user friendly way
      .subscribe(data => {
        this._currentSubject.next(data.current);
        this._dailyForecastSubject.next(data.forecast.forecastday);
      });
  }

  searchLocation(location: string = DEFAULT_LOCATION.name): Observable<ILocation[]> {

    const url = `${environment.base_weather_api_url}/search.json`;
    
    let params = new HttpParams();
    params = params.append('key', environment.weather_api_key);
    params = params.append('q', location);

    return this._http.get<ILocation[]>(url, { params })
      .pipe(catchError(error => { throw error })); // TODO: display HttpErrors in a more user friendly way
  }
}

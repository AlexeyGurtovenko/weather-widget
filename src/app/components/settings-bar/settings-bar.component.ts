import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap, takeUntil } from 'rxjs';
import { ILocation } from 'src/app/models/location.model';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { DEDAULT_DEBOUNCE_TIME, DEFAULT_LOCATION } from '../../constants';
import { BaseComponent } from '../base-component/base.component';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss']
})
export class SettingsBarComponent extends BaseComponent implements OnInit {

  @ViewChild('cityInput', { static: true }) search!: ElementRef;

  selectedCity = DEFAULT_LOCATION.name;
  cityList: ILocation[] = [DEFAULT_LOCATION];

  constructor (private _weatherService: WeatherApiService) {
    super();
  }

  ngOnInit(): void {
    fromEvent<Event>(this.search.nativeElement, 'input')
      .pipe(
        map(event => (event.target as HTMLInputElement).value.trim().toLocaleLowerCase()),
        debounceTime(DEDAULT_DEBOUNCE_TIME),
        filter(value => value.length > 3),
        distinctUntilChanged(),
        switchMap(value => this._weatherService.searchLocation(value)),
        takeUntil(this.isAlive)
      )
      .subscribe(locations => this.cityList = locations);
  }

  onSelectionChange(e: Event) {
    this.selectedCity = (e.target as HTMLInputElement).value;
    this._weatherService.updateDailyForecast(this.selectedCity);
  }

  refresh() {
    this._weatherService.updateDailyForecast(this.selectedCity);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap, takeUntil } from 'rxjs';
import { ILocation } from 'src/app/models/location.model';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { DEDAULT_DEBOUNCE_TIME, DEFAULT_CITY_NAME } from '../../constants';
import { BaseComponent } from '../base-component/base.component';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss']
})
export class SettingsBarComponent extends BaseComponent implements OnInit  {

  search: FormControl = new FormControl(DEFAULT_CITY_NAME);

  cityList: ILocation[] = [];

  constructor (private _weatherService: WeatherApiService) { 
    super();
  }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(DEDAULT_DEBOUNCE_TIME),
        filter((value: string) => value.trim().length > 3),
        distinctUntilChanged(),
        switchMap((value: string) => this._weatherService.searchLocation(value.trim().toLocaleLowerCase())),
        takeUntil(this.isAlive)
      )
      .subscribe(locations => this.cityList = locations);
  }

  onChange(e: any) {
    console.log(e);
  } 
}

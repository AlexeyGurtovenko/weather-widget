import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_CITY_NAME } from '../../constants';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss']
})
export class SettingsBarComponent implements OnInit {

  @Input() cityName: string = DEFAULT_CITY_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}

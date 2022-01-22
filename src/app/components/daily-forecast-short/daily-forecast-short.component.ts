import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-daily-forecast-short',
  templateUrl: './daily-forecast-short.component.html',
  styleUrls: ['./daily-forecast-short.component.scss']
})
export class DailyForecastShortComponent implements OnInit {

  @Input() weekday: string = '';
  @Output() selected = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}

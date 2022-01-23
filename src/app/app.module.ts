import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { BaseComponent } from './components/base-component/base.component';
import { SettingsBarComponent } from './components/settings-bar/settings-bar.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DailyForecastShortComponent } from './components/daily-forecast-short/daily-forecast-short.component';
import { RangePipe } from './pipes/range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SettingsBarComponent,
    BaseComponent,
    CurrentWeatherComponent,
    DailyForecastShortComponent,
    RangePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

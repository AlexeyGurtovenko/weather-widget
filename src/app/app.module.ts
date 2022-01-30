import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { createCustomElement } from '@angular/elements';

import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './components/app.component';
import { BaseComponent } from './components/base-component/base.component';
import { SettingsBarComponent } from './components/settings-bar/settings-bar.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DailyForecastShortComponent } from './components/daily-forecast-short/daily-forecast-short.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsBarComponent,
    BaseComponent,
    CurrentWeatherComponent,
    DailyForecastShortComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private injector: Injector) {
    const element = createCustomElement(AppComponent, { injector });
    customElements.define('weather-widget', element);
  }
 }

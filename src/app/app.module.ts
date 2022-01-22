import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './base-component/base.component';
import { SettingsBarComponent } from './settings-bar/settings-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsBarComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

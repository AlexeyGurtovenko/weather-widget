import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { BaseComponent } from './components/base-component/base.component';
import { SettingsBarComponent } from './components/settings-bar/settings-bar.component';

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPanelComponent } from './weather-panel.component';

@NgModule({
  declarations: [
    WeatherPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    WeatherPanelComponent
  ]
})
export class WeatherPanelModule { }

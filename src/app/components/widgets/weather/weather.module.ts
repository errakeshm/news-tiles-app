import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { MathModule } from '../../../components/pipes/maths/math.module';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    MathModule
  ],
  exports :[
    WeatherComponent
  ]
})
export class WeatherModule { }

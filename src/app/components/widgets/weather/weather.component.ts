import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from 'src/app/components/api/appconstants';
import { LocationService } from '../../../utility/services/location/location.service';
import { WeatherService } from '../../../utility/services/weather/weather.service';
import { ILocationCoordinates } from 'src/app/components/api/geolocation.model';
import { IWeatherModel } from '../../api/weather.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  animations:[
    trigger('openClose',[
      state('open', style({
        opacity:1
      })),
      state('close', style({
        opacity:0
      })),
      transition('open=>close',[
        animate('200ms ease-in')
      ]),
      transition('close=>open',[
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class WeatherComponent implements OnInit {

  constructor(public locationService : LocationService,
    public weatherService: WeatherService) { }
  // To show weather panel based on the input coordinates
  @Input() set configuration(config:ILocationCoordinates){
     this.locationCoordinates = config;
  }
  get configuration():ILocationCoordinates{
    return this.locationCoordinates;
  }
  @Input() set panelStyle(pStyle:string){
    this.pStyle = pStyle;
  }
  @Input() isActive:boolean = true;

  get panelStyle(){
    return this.pStyle;
  }

  @Input() dailyForecastCount: number = 3;

  locationCoordinates:ILocationCoordinates;
  weatherModel:IWeatherModel;
  pStyle:string;

  ngOnInit(): void {
    if(this.checkInputConfig()){
      console.log(this.configuration);
     this.weatherService.getCurrentWeather(this.configuration.latitude, this.configuration.longitude)
      .subscribe((model:IWeatherModel) => {
        this.weatherModel = model;
      });
    }
      
  }

  checkInputConfig():boolean{
    return this.configuration !==undefined
      && this.configuration!=null
      && this.configuration.latitude!==undefined 
      && this.configuration.longitude!==undefined;
  }

  getImage(key:string):string{
    return AppConstants.WeatherCodeImgMap[key].img;
  }

  getIcon(key:string):string{
    return AppConstants.WeatherCodeImgMap[key].icon;
  }

  getDailyForecastCount(){
    return new Array(this.dailyForecastCount);
  }
}

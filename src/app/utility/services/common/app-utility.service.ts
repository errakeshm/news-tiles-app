import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppUtilityService {

  constructor() { }

  public isDebugEnabled():Boolean {
    return !environment.production && environment.isDebugEnabled;
  }

  public isInMemApiEnabled():Boolean {
    return environment.isInMemApiEnabled;
  }

  public getInMemOrRealtimeData(response){
    if(this.isInMemApiEnabled()){
      return response[0];
    }
    return response;
  }

  public getNewsAPiUrl(){
    return environment.url.news;
  }

  public getOpenWeatherUrl(){
    return environment.url.weather;
  }

  public getNewsApiKey(){
    return environment.keys.news;
  }

  public getWeatherApiKey(){
    return environment.keys.weather;
  }
}

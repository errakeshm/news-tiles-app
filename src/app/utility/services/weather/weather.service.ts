import { Injectable } from '@angular/core';
import { IWeatherModel, IWeatherCondition, ICurrent } from 'src/app/components/api/weather.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppUtilityService } from '../common/app-utility.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private openWeatherURL: string;
  private apiKey:string;
  constructor(private http:HttpClient,
    private appUtilityService:AppUtilityService) { 
    this.openWeatherURL = this.appUtilityService.getOpenWeatherUrl();
    this.apiKey = this.appUtilityService.getWeatherApiKey();
  }

  getCurrentWeather(lat:number, lon:number):Observable<IWeatherModel>{
    let httpParams = new HttpParams();
    let url:string = `${this.openWeatherURL}/onecall`;
    url = url+"?lat="+lat.toString()+"&lon="+lon.toString()+"&units=metric&appid="+this.apiKey
    /*httpParams.append("lat", lat.toString());
    httpParams.append("lon", lon.toString());
    httpParams.append("units","metric");
    httpParams.append("appid", this.apiKey);
    let httpHeaders = new HttpHeaders();
    return this.http.get<IWeatherModel>(url, { headers:httpHeaders, params : httpParams });*/
    return this.http.get<IWeatherModel>(url);
  }
}

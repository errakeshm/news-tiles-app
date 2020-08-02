import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../../components/api/appconstants';

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

  public getBaseUrl(){
    return environment.url.primary;
  }

  public getApiKey(){
    return environment.apiKey;
  }
}

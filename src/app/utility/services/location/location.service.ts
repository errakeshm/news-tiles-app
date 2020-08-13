import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/components/api/appconstants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  public getGeoLocation(): Observable<any>{
    if(navigator.geolocation){
      return Observable.create( observer =>
        {
          navigator.geolocation.getCurrentPosition((position)=>{
          observer.next(position);
          observer.complete();
          });
        }
      );
    }
    return null;
  }
}

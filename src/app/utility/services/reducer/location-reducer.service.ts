import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ILocationCoordinates } from '../../../components/api/geolocation.model';
import { geolocationLoggedAction } from '../../store/actions/geo.action';
import { Observable } from 'rxjs';
import * as locationRoot from '../../store/reducers/geo.reducer';

@Injectable({
  providedIn: 'root'
})
export class LocationReducerService {

  constructor(public store: Store<locationRoot.IGeoLocState>) { }
  
  locationLogged(position: ILocationCoordinates) {
    this.store.dispatch(geolocationLoggedAction({ position }));
  }

  getCurrentLocation():Observable<ILocationCoordinates>{
    return this.store.pipe(select(locationRoot.selectGeolocation))
  }

}

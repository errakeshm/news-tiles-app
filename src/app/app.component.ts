import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoggerService, LogLevel } from './utility/services/common/logger.service';
import { LocationService } from './utility/services/location/location.service';
import { Observable, Subscriber, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { LocationReducerService } from './utility/services/reducer/location-reducer.service';
import { ILocationCoordinates } from './components/api/geolocation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tiles-news';
  constructor(
    public loggerService: LoggerService,
    public locationService: LocationService,
    public locationReducerService: LocationReducerService) { }
  private unsubscriber = new Subject();
  ngOnInit() {
    this.loggerService.log(LogLevel.AUTHOR, AppComponent.name);
    this.locationService.getGeoLocation()
      // Another way of unsubscribing to an obsever. takeUntil keeps on emitting values until the unsubscriber observable emits.
      // The unsubscriber observable will emit in the destroy method.
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(
        position => {
          let coords: ILocationCoordinates = { 'latitude': position.coords.latitude, 'longitude': position.coords.longitude };
          this.locationReducerService.locationLogged(coords);
        }
      );

    /*this.locationReducerService.getCurrentLocation().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe(
      (coords: ILocationCoordinates) => {
         this.loggerService.log(LogLevel.INFO, AppComponent.name, coords.latitude + ' - ' + coords.longitude);
      }
    )*/
  }

  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}

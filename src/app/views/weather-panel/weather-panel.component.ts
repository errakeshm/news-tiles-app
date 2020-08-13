import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from 'src/app/components/api/appconstants';
import { LocationService } from '../../utility/services/location/location.service';
import { ILocationCoordinates } from 'src/app/components/api/geolocation.model';
@Component({
  selector: 'weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {

  constructor(public locationService : LocationService) { }
  @Input() configuration:ILocationCoordinates;
  geolocation:Map<string,number> = new Map();
  
  ngOnInit(): void {
    
  }
}

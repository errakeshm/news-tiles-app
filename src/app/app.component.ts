import { Component } from '@angular/core';
import { LoggerService, LogLevel } from './utility/services/logger-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiles-news';
  constructor(public loggerService: LoggerService){

  }
  ngOnInit(){
    this.loggerService.log(LogLevel.AUTHOR,AppComponent.name);
  }
}

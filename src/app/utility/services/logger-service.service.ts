import { Injectable } from '@angular/core';
import { AppUtilityService } from './app-utility.service';

export enum LogLevel {
  INFO = "INFO",
  DEBUG = "DEBUG",
  ERROR = "ERROR"
}

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {

  constructor(private appUtilityService: AppUtilityService) { }

  public log(logLevel : LogLevel, className:string, message:string):void{
    if(this.appUtilityService.isDebugEnabled()){
      if(logLevel == LogLevel.ERROR){
        console.error(`${className} : ${logLevel} - ${message}`)
      }
    }
  }
}

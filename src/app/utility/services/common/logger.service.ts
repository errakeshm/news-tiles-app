import { Injectable } from '@angular/core';
import { AppUtilityService } from './app-utility.service';

export enum LogLevel {
  INFO = "INFO",
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  AUTHOR = "AUTHOR"
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private appUtilityService: AppUtilityService) { }
  
  public log(logLevel : LogLevel, className:string, message?:Object):void{
    if(this.appUtilityService.isDebugEnabled()){
      if(logLevel == LogLevel.ERROR){
        console.error(`${className} : ${logLevel} - ${message}`)
      } else if(logLevel == LogLevel.DEBUG){
        console.debug(`${className} : ${logLevel} - ${message}`);
      } else if(logLevel == LogLevel.AUTHOR){
        console.log(this.getAuthData())
      } else{
        console.log(`${className} : ${logLevel} - ${message}`);
      }
    }
  }

  private getAuthData(){
    return `
    _______             __                            __              __       __            __                              __               
    /       \           /  |                          /  |            /  \     /  |          /  |                            /  |              
    $$$$$$$  |  ______  $$ |   __   ______    _______ $$ |____        $$  \   /$$ |  ______  $$ |____    ______   _______   _$$ |_    __    __ 
    $$ |__$$ | /      \ $$ |  /  | /      \  /       |$$      \       $$$  \ /$$$ | /      \ $$      \  /      \ /       \ / $$   |  /  |  /  |
    $$    $$<  $$$$$$  |$$ |_/$$/ /$$$$$$  |/$$$$$$$/ $$$$$$$  |      $$$$  /$$$$ |/$$$$$$  |$$$$$$$  | $$$$$$  |$$$$$$$  |$$$$$$/   $$ |  $$ |
    $$$$$$$  | /    $$ |$$   $$<  $$    $$ |$$      \ $$ |  $$ |      $$ $$ $$/$$ |$$ |  $$ |$$ |  $$ | /    $$ |$$ |  $$ |  $$ | __ $$ |  $$ |
    $$ |  $$ |/$$$$$$$ |$$$$$$  \ $$$$$$$$/  $$$$$$  |$$ |  $$ |      $$ |$$$/ $$ |$$ \__$$ |$$ |  $$ |/$$$$$$$ |$$ |  $$ |  $$ |/  |$$ \__$$ |
    $$ |  $$ |$$    $$ |$$ | $$  |$$       |/     $$/ $$ |  $$ |      $$ | $/  $$ |$$    $$/ $$ |  $$ |$$    $$ |$$ |  $$ |  $$  $$/ $$    $$ |
    $$/   $$/  $$$$$$$/ $$/   $$/  $$$$$$$/ $$$$$$$/  $$/   $$/       $$/      $$/  $$$$$$/  $$/   $$/  $$$$$$$/ $$/   $$/    $$$$/   $$$$$$$ |
                                                                                                                                     /  \__$$ |
                                                                                                                                     $$    $$/ 
                                                                                                                                      $$$$$$/                                                                                                  
   `
  }
}

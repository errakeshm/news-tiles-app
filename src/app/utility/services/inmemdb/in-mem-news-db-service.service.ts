import { Injectable } from '@angular/core';
import  sportsdb from '../../../../assets/local-db/sportsdb.json';
import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemNewsDbServiceService implements InMemoryDbService {

  constructor() { }
  createDb(){
    return { 
      "top-headlines":sportsdb
    };
  }
}

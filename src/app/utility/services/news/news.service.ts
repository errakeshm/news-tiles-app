import { Injectable } from '@angular/core';
import { SearchModel, HeadLineResponse, NavbarItem } from '../../../components/api/search.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AppUtilityService } from '../common/app-utility.service';
import { faGlobe, faBicycle, faBuilding, faAtom, faFlask, faFilm, faRobot } from '@fortawesome/free-solid-svg-icons';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private googleNewsURL: string;
  private apiKey: string;
  constructor(
    private http: HttpClient,
    private appUtilityService: AppUtilityService
  ) {
    this.googleNewsURL = this.appUtilityService.getBaseUrl();
    this.apiKey = this.appUtilityService.getApiKey();
  }
  fetchHeadLineNews(searchInput: SearchModel): Observable<any> {
    let headLineURL: string = `${this.googleNewsURL}/top-headlines`;
    let httpParams = new HttpParams();
    Object.keys(searchInput).forEach((key: string) => {
      httpParams = httpParams.append(key, searchInput[key]);
    });
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('X-Api-Key', this.apiKey);
    return this.http.get<any>(headLineURL, { headers: httpHeaders, params: httpParams });
  }

  fetchDefaultTopics():Observable<any>{
    let items:NavbarItem[] = new Array();
    items.push(new NavbarItem(faGlobe, 'Technology','Technology',1,20));
    items.push(new NavbarItem(faBuilding, 'Business','Business',1,20));
    items.push(new NavbarItem(faFilm, 'Entertainment','Entertainment',1,20));
    items.push(new NavbarItem(faAtom, 'Science','Science',1,20));
    items.push(new NavbarItem(faFlask, 'Health','Health',1,20));
    items.push(new NavbarItem(faBicycle, 'Sports','Sports',1,20));
    return of(items);
  }
}
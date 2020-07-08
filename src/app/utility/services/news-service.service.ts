import { Injectable } from '@angular/core';
import { SearchModel, HeadLineResponse } from '../../components/api/searchmodel';
import { AppConstants } from '../../components/api/appconstants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    private http: HttpClient
  ) {
    this.googleNewsURL = AppConstants.APP_URL;
    this.apiKey = AppConstants.API_KEY;
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
}
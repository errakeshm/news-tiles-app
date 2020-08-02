import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SearchModel, HeadLineResponse } from '../../components/api/searchmodel';
import { Observable, Subscription } from 'rxjs';
import { NewsService } from '../../utility/services/news-service.service';
import { LoggerService, LogLevel } from '../../utility/services/logger-service.service';
import { AppConstants } from '../../components/api/appconstants';
import { AppUtilityService } from 'src/app/utility/services/app-utility.service';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-news-panel',
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.css'],
  animations:[
    trigger('shift',[
      state('shiftNone',style({
        width:'100%',
        marginLeft:0,
      })),
      state('shiftRight',style({
        width:'80%',
        marginLeft:'20%'
      })),
      transition('shiftNone=>shiftRight',[
        animate('200ms ease-in')
      ]),
      transition('shiftRight=>shiftNone',[
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class NewsPanelComponent implements OnInit, OnDestroy {
  
  @Input() set searchInput(data:SearchModel){
    this._searchData = data;
    if(this._searchData == undefined || this._searchData == null){
      this._isInitialized = false;
    } else{
      this._isInitialized = true;
    }
  }
  get searchInput(){
    return this._searchData;
  }
  public isInitialized(){
    return this._isInitialized;
  }
  public getSearch(){
    return this._searchData;
  }
  @Input() shift: string = 'left';
  private _searchData:SearchModel;
  private _isInitialized:Boolean;
  newsResponse: Subscription;
  newsArticles: Array<HeadLineResponse>;
  noOfArticles: number;
  constructor(
    public newsService: NewsService,
    private appUtilityService: AppUtilityService,
    private loggerService: LoggerService
  ) { }
  
  ngOnChanges(event){
    this.fetchNews()
  }

  fetchNews(){
    if (this.isInitialized()) {
      this.loggerService.log(LogLevel.INFO, NewsPanelComponent.name, "Calling news Service");
      this.newsResponse = this.newsService.fetchHeadLineNews(this.getSearch()).subscribe(
        (response: any) => {
          this.newsArticles = (this.appUtilityService.getInMemOrRealtimeData(response)).articles.map((news: any) => {
            this.loggerService.log(LogLevel.INFO, NewsPanelComponent.name, "Successfully Fetched News Data");
            let indvNews: HeadLineResponse = new HeadLineResponse();
            indvNews.content = news.content;
            indvNews.description = news.description;
            indvNews.sourceId = news.source.id;
            indvNews.sourceName = news.source.name;
            indvNews.title = news.title;
            indvNews.url = news.url;
            indvNews.urlToImage = news.urlToImage;
            if (indvNews.urlToImage == null) {
              indvNews.urlToImage = "/assets/images/clouds-5368435_640.jpg"
            }
            if (indvNews.description == null) {
              indvNews.description = indvNews.title;
            }
            NewsPanelComponent.setAnimations(indvNews);
            return indvNews;
          });
          this.noOfArticles = this.newsArticles.length;
        },
        (error:any)=>{
          this.loggerService.log(LogLevel.ERROR, NewsPanelComponent.name, "Unable to fetch data from News API : ");
        }
      );
    }
  }

  ngOnInit() {
    this.newsArticles = null;
    this.fetchNews();
  }

  private static setAnimations(news: HeadLineResponse) {
    let type = Math.floor(Math.random() * AppConstants.VARIANCE_TRANSITION_RATE.MAX) + 1;
    if (type >= AppConstants.VARIANCE_TRANSITION_RATE.MIN)
      news.animType = "ui-tile-rotate";
    else
      news.animType = "ui-tile-slider";
  }

  getAnimations(){
    if(this.shift=='left'){
      return 'shiftRight';
    } else if(this.shift == 'none'){
      return 'shiftNone';
    }
  }
  ngOnDestroy() {
    if (this.newsResponse != undefined && !this.newsResponse.closed) {
      this.newsResponse.unsubscribe();
    }
  }
}


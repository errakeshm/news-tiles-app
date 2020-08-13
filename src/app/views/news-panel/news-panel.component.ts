import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SearchModel, HeadLineResponse, SearchParamModel, NewsPanelShiftDirection } from '../../components/api/search.model';
import { Observable, Subscription, of } from 'rxjs';
import { NewsService } from '../../utility/services/news/news.service';
import { LoggerService, LogLevel } from '../../utility/services/common/logger.service';
import { PageReducerService } from '../../utility/services/reducer/page-reducer.service';
import { AppConstants } from '../../components/api/appconstants';
import { AppUtilityService } from 'src/app/utility/services/common/app-utility.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-news-panel',
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.css'],
  animations: [
    trigger('shiftLeftFull', [
      state('full', style({
        width: '100%',
        marginLeft: 0,
        marginRight: 0
      })),
      state('left', style({
        width: '60%',
        marginLeft: '20%',
      })),
      transition('full=>left', [
        animate('200ms ease-in')
      ]),
      transition('left=>full', [
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class NewsPanelComponent implements OnInit, OnDestroy {

  private _searchData: SearchParamModel;
  private _previousSearchData: SearchParamModel;
  private _isInitialized: Boolean;
  private newsResponse$: Subscription;
  private searchSubscriber$: Subscription;
  private pageReducerSubscriber$: Subscription;
  isLeftNavbarTriggered : Boolean = true;
  newsArticles: Array<HeadLineResponse>;
  public isInitialized() {
    return this._isInitialized;
  }

  public setSearch(data: SearchParamModel) {
    this._searchData = data;
    if (this._searchData == undefined || this._searchData == null) {
      this._isInitialized = false;
    } else {
      this._isInitialized = true;
    }
  }
  public getSearch() {
    return this._searchData;
  }

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private appUtilityService: AppUtilityService,
    private loggerService: LoggerService,
    private pageReducerService: PageReducerService
  ) { }


  ngOnInit() {
    this.loggerService.log(LogLevel.INFO, NewsPanelComponent.name, "Inside ngOnInit");
    this.searchSubscriber$ = this.route.paramMap.pipe(
      switchMap(
        (params) => {
          let searchModel: SearchModel = new SearchModel(String(params.get('category')),
            Number(params.get('page')),
            Number(params.get('pageSize')),
            params.get('country'));
          return of(searchModel);
        }
      )
    ).subscribe(
      searchModel => {
        this.setSearch(searchModel);
        this.fetchNews();
      }
    );

    this.pageReducerSubscriber$ = this.pageReducerService.isLeftSidebarEnabled()
    .subscribe(
      isEnabled => {
        if (isEnabled != undefined) {
          this.isLeftNavbarTriggered = isEnabled;
        }
      }
    )
  }

  ngOnDestroy() {
    this.loggerService.log(LogLevel.INFO, NewsPanelComponent.name, 'Component destroyed')
    if (this.searchSubscriber$ !== undefined && !this.searchSubscriber$.closed) {
      this.searchSubscriber$.unsubscribe();
    }

    if (this.newsResponse$ !== undefined && !this.newsResponse$.closed) {
      this.newsResponse$.unsubscribe();
    }

    if (this.pageReducerSubscriber$ !== undefined && !this.pageReducerSubscriber$.closed) {
      this.pageReducerSubscriber$.unsubscribe();
    }
  }

  fetchNews() {
    if (this.isInitialized()) {
      this.loggerService.log(LogLevel.INFO, NewsPanelComponent.name, "Calling news Service");
      this.newsResponse$ = this.newsService.fetchHeadLineNews(this.getSearch()).subscribe(
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
            this._previousSearchData = Object.assign(this._searchData, {});
            this._isInitialized = false;
            return indvNews;
          });
        },
        (error: any) => {
          this.loggerService.log(LogLevel.ERROR, NewsPanelComponent.name, "Unable to fetch data from News API : ");
        }
      );
    }
  }

  private static setAnimations(news: HeadLineResponse) {
    let type = Math.floor(Math.random() * AppConstants.VARIANCE_TRANSITION_RATE.MAX) + 1;
    if (type >= AppConstants.VARIANCE_TRANSITION_RATE.MIN)
      news.animType = "ui-tile-rotate";
    else
      news.animType = "ui-tile-slider";
  }

  getAnimations() {
    if (this.isLeftNavbarTriggered) {
      return 'full'
    } else {
      return 'left';
    }
  }

  // Incase data is sent via inputs
  ngOnChanges(event) {
    let flag: Boolean = false;
    if (this._previousSearchData !== undefined && this._previousSearchData !== null) {
      let searchValues = this.getSearch();
      flag = false;
      for (let key in Object.keys(searchValues)) {
        if (searchValues[key] !== this._previousSearchData[key]) {
          flag = true;
        }
      }
    }
    if (!flag) {
      this.fetchNews()
    }
  }
}


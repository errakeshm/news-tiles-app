import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SearchModel,HeadLineResponse } from '../../components/api/searchmodel';
import { Observable,Subscription } from 'rxjs';
import { NewsService } from '../../utility/services/news-service.service';
import { AppConstants } from '../../components/api/appconstants';
@Component({
  selector: 'app-news-panel',
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.css']
})
export class NewsPanelComponent implements OnInit,OnDestroy {
  @Input() searchInput:SearchModel;
  newsResponse:Subscription;
  newsArticles:Array<HeadLineResponse>;
  noOfArticles:number;
  constructor(
    public newsService:NewsService
  ) { }
  ngOnInit() {
    console.log('ngOnInit');
    this.newsArticles = null;
    this.newsResponse = this.newsService.fetchHeadLineNews(this.searchInput).subscribe(
      (response:any)=>{
        this.newsArticles = response.articles.map((news:any)=>{
          let indvNews:HeadLineResponse = new HeadLineResponse();
          indvNews.content=news.content;
          indvNews.description=news.description;
          indvNews.sourceId=news.source.id;
          indvNews.sourceName=news.source.name;
          indvNews.title=news.title;
          indvNews.url=news.url;
          indvNews.urlToImage=news.urlToImage;
          if(indvNews.urlToImage == null){
            indvNews.urlToImage = "/assets/images/clouds-5368435_640.jpg"
          }
          if(indvNews.description == null){
            indvNews.description = indvNews.title;
          }
          let type=Math.floor(Math.random()*AppConstants.VARIANCE_TRANSITION_RATE.MAX)+1;
          if(type>=AppConstants.VARIANCE_TRANSITION_RATE.MIN)
            indvNews.animType="tile-rotate";
          else
            indvNews.animType="tile-slider";
          return indvNews;
        });
        this.noOfArticles=this.newsArticles.length;
      }
    );
  }
  ngOnDestroy(){
    if(this.newsResponse!=undefined && !this.newsResponse.closed){
      this.newsResponse.unsubscribe();
    }
  }
}


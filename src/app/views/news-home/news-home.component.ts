import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchModel, NavbarItem } from 'src/app/components/api/searchmodel';
import { NewsService } from 'src/app/utility/services/news-service.service';
import { LoggerService, LogLevel } from 'src/app/utility/services/logger-service.service';
import { Subscription } from 'rxjs';
import { NewsPanelComponent } from '../news-panel/news-panel.component';
@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit, OnDestroy {

  searchInput:SearchModel;
  shift:string = 'left';
  isSidebarActive:Boolean = true;

  sidebarItems:NavbarItem[] = new Array();
  fetchTopics$:Subscription;

  constructor(public newsService:NewsService, public loggerService:LoggerService){

  }
  ngOnInit(){
    this.fetchTopics$ = this.newsService.fetchDefaultTopics().subscribe(m=>{
      this.sidebarItems = m
      this.setSearchModel(this.sidebarItems[0]);
    });
  }
  
  onSidebarClick(event){
    if(event){
      this.shift='left';
      this.isSidebarActive = true;
    } else{
      this.shift = 'none';
      this.isSidebarActive = false;
    }
  }

  onItemClick(searchText:string, event){
    this.loggerService.log(LogLevel.INFO, NewsPanelComponent.name, 'Sidebar topic clicked - '+searchText);
    for(let item of this.sidebarItems){
      item.isSelected = false;
      if(item.searchText == searchText){
        item.isSelected = true;
        this.setSearchModel(item);
      }
    }
  }

  public setSearchModel(navbarItem:NavbarItem){
      this.searchInput = new SearchModel();
      this.searchInput.category=navbarItem.searchText;
      this.searchInput.page=navbarItem.page;
      this.searchInput.pageSize=navbarItem.pageSize;
      this.searchInput.country='us';
  }

  ngOnDestroy(){
    this.fetchTopics$.unsubscribe();
  }
}

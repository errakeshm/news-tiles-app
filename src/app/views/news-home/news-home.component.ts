import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchModel, NavbarItem } from 'src/app/components/api/searchmodel';
import { NewsService } from 'src/app/utility/services/news-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit, OnDestroy {

  title = 'newsTiles';
  searchInput:SearchModel;
  shift:string = 'left';
  isSidebarActive:Boolean = true;

  sidebarItems:NavbarItem[] = new Array();
  fetchTopics$:Subscription;

  constructor(public newsService:NewsService){

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
    for(let item of this.sidebarItems){
      item.isSelected = false;
      if(item.searchText == searchText){
        item.isSelected = true;
        this.setSearchModel(item);
      }
    }
    console.log(this.sidebarItems)
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

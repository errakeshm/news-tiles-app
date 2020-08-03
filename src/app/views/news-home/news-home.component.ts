import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchModel, NavbarItem, SearchParamModel } from 'src/app/components/api/searchmodel';
import { NewsService } from 'src/app/utility/services/news/news.service';
import { LoggerService, LogLevel } from 'src/app/utility/services/common/logger.service';
import { PageReducerService } from '../../utility/services/reducer/page-reducer.service';
import { Subscription } from 'rxjs';
import { NewsPanelComponent } from '../news-panel/news-panel.component';
@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit, OnDestroy {

  searchInput: SearchModel;
  leftSidebarActive: Boolean = true;
  sidebarItems: NavbarItem[] = new Array();
  fetchTopics$: Subscription;

  constructor(public newsService: NewsService,
    public loggerService: LoggerService,
    private pageReducerService: PageReducerService) {

  }
  ngOnInit() {
    this.fetchTopics$ = this.newsService.fetchDefaultTopics().subscribe(m => {
      this.sidebarItems = m
      this.setSearchModel(this.sidebarItems[0]);
    });
    this.pageReducerService.leftSidebarTriggered();
  }

  onHamburgerClick(event) {
    this.loggerService.log(LogLevel.INFO, NewsHomeComponent.name, "On Hamburger Click");
    this.pageReducerService.hamburgerClicked();
    this.pageReducerService.leftSidebarTriggered();
    this.leftSidebarActive = !this.leftSidebarActive;
  }
  /**
   * To be used only when the news panel is used as a component directly in news home. When the link on the sidebar is clicked this is triggered.
   * @param searchText 
   * @param event 
   */
  onItemClick(searchText: string, event) {
    this.loggerService.log(LogLevel.INFO, NewsPanelComponent.name, 'Sidebar topic clicked - ' + searchText);
    for (let item of this.sidebarItems) {
      item.isSelected = false;
      if (item.searchText == searchText) {
        item.isSelected = true;
        this.setSearchModel(item);
      }
    }
  }

  getParamList(item: NavbarItem) {
    let search: SearchParamModel = new SearchParamModel(item.searchText, item.page, item.pageSize, 'us')
    return search;
  }


  public setSearchModel(navbarItem: NavbarItem) {
    this.searchInput = new SearchModel();
    this.searchInput.category = navbarItem.searchText;
    this.searchInput.page = navbarItem.page;
    this.searchInput.pageSize = navbarItem.pageSize;
    this.searchInput.country = 'us';
  }

  ngOnDestroy() {
    this.fetchTopics$.unsubscribe();
  }
}

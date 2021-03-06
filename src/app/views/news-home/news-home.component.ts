import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchModel, NavbarItem, SearchParamModel, FeatureButton, INameValue } from 'src/app/components/api/search.model';
import { NewsService } from 'src/app/utility/services/news/news.service';
import { LoggerService, LogLevel } from 'src/app/utility/services/common/logger.service';
import { PageReducerService } from '../../utility/services/reducer/page-reducer.service';
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
import { NewsPanelComponent } from '../news-panel/news-panel.component';
import { rippleAnimation } from 'src/app/animations/animations';
import { LocationReducerService } from 'src/app/utility/services/reducer/location-reducer.service';
import { takeUntil } from 'rxjs/operators';
import { ILocationCoordinates } from 'src/app/components/api/geolocation.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css'],
  animations:[
    rippleAnimation({
      hoverColor: '#9a67ea'
    })
  ]
})
export class NewsHomeComponent implements OnInit, OnDestroy {

  searchInput: SearchModel;
  //leftSidebarActive: Boolean = true;
  sidebarItems: NavbarItem[] = new Array();
  unsubscriber = new Subject();
  animationState: boolean = false;
  coordinates:ILocationCoordinates;
  featureButtons:Array<FeatureButton> = [];
  featureButtonToggle:Map<String,Boolean> = new Map();
  constructor(public newsService: NewsService,
    public loggerService: LoggerService,
    private pageReducerService: PageReducerService,
    private locationReducerService:LocationReducerService,
    private router: Router,
    private activatedRoute : ActivatedRoute) {

  }
  ngOnInit() {
    this.newsService.fetchDefaultTopics().pipe(takeUntil(this.unsubscriber)).subscribe(m => {
      this.sidebarItems = m
      this.setSearchModel(this.sidebarItems[0]);
      this.sidebarItems[0].isSelected = true;
      this.router.navigate(['newspanel', this.getParamList(this.sidebarItems[0])], {relativeTo : this.activatedRoute})
    });

    this.locationReducerService.getCurrentLocation().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe(
      (coords: ILocationCoordinates) => {
         this.coordinates = coords;
      }
    )
    this.featureButtons.push({name: 'widget', icon:faThLarge})
    this.featureButtonToggle.set('widget', false);
  }

  onHamburgerClick(event) {
    this.loggerService.log(LogLevel.INFO, NewsHomeComponent.name, "On "+event.name+" Click");
   
    if(event.name == 'hamburger'){
      this.pageReducerService.hamburgerClicked();
      this.pageReducerService.leftSidebarTriggered();
    }
    this.featureButtonToggle[event.name] = event.value;
  }
  /**
   * To be used only when the news panel is used as a component directly in news home. When the link on the sidebar is clicked this is triggered.
   * @param searchText 
   * @param event 
   */
  onItemClick(searchText: string, event) {
    this.loggerService.log(LogLevel.INFO, NewsPanelComponent.name, 'Sidebar topic clicked - ' + searchText);
    console.log(searchText);
    //this.animationState = !this.animationState;
    for (let item of this.sidebarItems) {
      item.isSelected = false;
      if (item.searchText == searchText) {
        item.isSelected = true;
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
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}

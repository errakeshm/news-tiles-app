import { Component, OnInit } from '@angular/core';
import { SearchModel } from 'src/app/components/api/searchmodel';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit {

  title = 'newsTiles';
  searchInput:SearchModel;
  ngOnInit(){
    this.searchInput = new SearchModel();
    this.searchInput.category='sports';
    this.searchInput.page=1;
    this.searchInput.pageSize=20;
    this.searchInput.country='us';
  }

}

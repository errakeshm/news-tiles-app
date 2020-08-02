import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsHomeRoutingModule } from './news-home-routing.module';
import { NewsPanelModule } from '../news-panel/news-panel.module';
import { NewsHomeComponent } from './news-home.component';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { HeaderModule } from '../../components/header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NewsHomeComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    HeaderModule,
    NewsPanelModule,
    FontAwesomeModule,
    NewsHomeRoutingModule
  ]
})
export class NewsHomeModule { }

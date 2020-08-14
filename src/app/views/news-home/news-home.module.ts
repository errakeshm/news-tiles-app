import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsHomeRoutingModule } from './news-home-routing.module';
import { NewsPanelModule } from '../news-panel/news-panel.module';
import { NewsHomeComponent } from './news-home.component';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { HeaderModule } from '../../components/header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherModule } from '../../components/widgets/weather/weather.module';

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
    WeatherModule,
    NewsHomeRoutingModule
  ]
})
export class NewsHomeModule { }

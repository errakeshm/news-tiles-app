import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';

import { NewsHomeComponent } from './news-home/news-home.component';
import { NewsHomeModule } from './news-home/news-home.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }

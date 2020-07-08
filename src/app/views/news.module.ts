import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileModule } from '../components/tile/tile.module';

import { NewsHomeComponent } from './news-home/news-home.component';
import { NewsPanelComponent } from './news-panel/news-panel.component';

@NgModule({
  declarations: [
    NewsPanelComponent,
    NewsHomeComponent
  ],
  imports: [
    CommonModule,
    TileModule
  ],
  exports:[
    NewsHomeComponent
  ]
})
export class NewsModule { }

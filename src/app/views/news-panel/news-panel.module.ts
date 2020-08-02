import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPanelComponent } from './news-panel.component';
import { TileModule } from 'src/app/components/tile/tile.module';


@NgModule({
  declarations: [
    NewsPanelComponent
  ],
  imports: [
    CommonModule,
    TileModule
  ],
  exports :[
    NewsPanelComponent
  ]
})
export class NewsPanelModule { }

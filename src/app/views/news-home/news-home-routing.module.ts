import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsHomeComponent } from './news-home.component';
import { NewsPanelComponent } from '../news-panel/news-panel.component';

const routes: Routes = [
  { 
    path: '', 
    component: NewsHomeComponent 
    ,children:[
      {
        path:'newspanel', component: NewsPanelComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsHomeRoutingModule { }

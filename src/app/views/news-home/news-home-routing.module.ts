import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsHomeComponent } from './news-home.component';

const routes: Routes = [
  { 
    path: '', 
    component: NewsHomeComponent 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsHomeRoutingModule { }

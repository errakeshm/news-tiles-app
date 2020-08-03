import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPanelComponent } from './news-panel.component';

const routes: Routes = [
  { 
    path: 'nn', component: NewsPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPanelRoutingModule { }

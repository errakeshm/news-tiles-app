import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: "tilenews", 
    loadChildren : ()=> import('./views/news.module').then(m=>m.NewsModule) 
  },
  {
    path:'', redirectTo:'tilenews', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

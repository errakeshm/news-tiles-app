import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Feature Module Routes
const routes:Routes = [
    {
        path: 'home', 
        loadChildren: () => import('./news-home/news-home.module').then(m => m.NewsHomeModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class NewsRoutingModule {

}
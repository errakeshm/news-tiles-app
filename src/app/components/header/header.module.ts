import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [ 
        HeaderComponent 
    ],
    imports:[
        CommonModule,
        FontAwesomeModule
    ],
    exports: [ HeaderComponent ]
})
export class HeaderModule{

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HTTP_INTERCEPTOR_PROVIDERS } from './utility/interceptors/index';
import { environment } from 'src/environments/environment';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemNewsDbServiceService } from './utility/services/inmemdb/in-mem-news-db-service.service';

import { StoreModule } from '@ngrx/store';
import { pagePropertiesReducer } from './utility/reducers/page.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({pagePropertiesReducer}),
    environment.isInMemApiEnabled ? InMemoryWebApiModule.forRoot(InMemNewsDbServiceService, { delay: 1000 }) : []
  ],
  providers: [ HTTP_INTERCEPTOR_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }

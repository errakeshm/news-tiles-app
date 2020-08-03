import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers/page.reducer'
import { createSelector } from '@ngrx/store';
import { hamburgerTriggeredAction, navigationLinkClickedAction, leftSidebarTriggeredAction } from '../../actions/page.action';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageReducerService {
  constructor(public store: Store<any>){
  }
  hamburgerClicked(){
    this.store.dispatch(hamburgerTriggeredAction());
  }
  leftSidebarTriggered(){
    this.store.dispatch(leftSidebarTriggeredAction());    
  }
  navLinkClicked(linkId:string){
    this.store.dispatch(navigationLinkClickedAction({linkId}));
  }
  isHamburgerClicked():Observable<Boolean>{
    return this.store.pipe(select(fromRoot.selectIsHamburgerClicked))
  }
  isLeftSidebarEnabled():Observable<Boolean>{
    return this.store.pipe(select(fromRoot.selectIsLeftNavEnabled))
  }
  getLinkClicked():Observable<String>{
    return this.store.pipe(select(fromRoot.selectNavbarLink))
  }

}
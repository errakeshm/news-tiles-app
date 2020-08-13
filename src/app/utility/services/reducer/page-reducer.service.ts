import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as pageRoot from '../../../utility/store/reducers/page.reducer';
import { createSelector } from '@ngrx/store';
import { hamburgerTriggeredAction, navigationLinkClickedAction, leftSidebarTriggeredAction } from '../../../utility/store/actions/page.action';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageReducerService {
  constructor(public store: Store<pageRoot.IPageState>){
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
    return this.store.pipe(select(pageRoot.selectIsHamburgerClicked))
  }
  isLeftSidebarEnabled():Observable<Boolean>{
    return this.store.pipe(select(pageRoot.selectIsLeftNavEnabled))
  }
  getLinkClicked():Observable<String>{
    return this.store.pipe(select(pageRoot.selectNavbarLink))
  }

}
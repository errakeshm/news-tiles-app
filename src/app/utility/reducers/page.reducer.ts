import * as PageAction from '../actions/page.action';
import { createReducer, on, Action } from '@ngrx/store';

export interface PageState{
    hamburgerTriggered : Boolean;
    linkId:string;
    leftSidebarEnabled:Boolean;
    rightSidebarEnabled:Boolean;
}
export let initialState:PageState ={
    hamburgerTriggered : true,
    leftSidebarEnabled: true,
    rightSidebarEnabled: false,
    linkId : null,
}

const _pagePropertiesReducer = createReducer(
    initialState,
    on(PageAction.hamburgerTriggeredAction, 
        state => {
            return { ...state, hamburgerTriggered : !state.hamburgerTriggered }
        }),
    on(PageAction.leftSidebarTriggeredAction,
        state =>{
            return { ...state, leftSidebarEnabled: !state.leftSidebarEnabled }
        }),
    on(PageAction.navigationLinkClickedAction, 
        (state, props)=>{
            return {...state, linkId : props['linkId']}
        })
)

export const pagePropertiesReducer = (state: PageState, action:Action) => {
    return _pagePropertiesReducer(state,action);
}

export const selectIsHamburgerClicked = (state: PageState) => state['pagePropertiesReducer'].hamburgerTriggered;
export const selectNavbarLink = (state: PageState) => state['pagePropertiesReducer'].linkId;
export const selectIsLeftNavEnabled = (state: PageState) => state['pagePropertiesReducer'].leftSidebarEnabled;
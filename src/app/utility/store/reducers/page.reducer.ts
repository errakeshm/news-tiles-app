import * as PageAction from '../actions/page.action';
import { createReducer, on, Action } from '@ngrx/store';

export interface IPageState{
    hamburgerTriggered : Boolean;
    linkId:string;
    leftSidebarEnabled:Boolean;
    rightSidebarEnabled:Boolean;
}
export let initialState:IPageState ={
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

export const pagePropertiesReducer = (state: IPageState, action:Action) => {
    return _pagePropertiesReducer(state,action);
}

export const selectIsHamburgerClicked = (state: IPageState) => state['pageState'].hamburgerTriggered;
export const selectNavbarLink = (state: IPageState) => state['pageState'].linkId;
export const selectIsLeftNavEnabled = (state: IPageState) => state['pageState'].leftSidebarEnabled;
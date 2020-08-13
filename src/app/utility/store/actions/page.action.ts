import { Action, createAction, props } from '@ngrx/store';

export enum PageActionTypes {
    HAMBURGER_TRIGGERED = '[Hamburger Clicked] Hamburger Clicked',
    NAVBAR_LINK_CLICKED = '[Navbar Link Clicked] Link Clicked',
    LEFT_SIDEBAR_TRIGGERED = '[Left Sidebar Triggered] Sidebar Triggered',
    RIGHT_SIDEBAR_TRIGGERED = '[Right Sidebar Triggered] Sidebar Triggered'
}

export const hamburgerTriggeredAction = createAction(
     PageActionTypes.HAMBURGER_TRIGGERED)

export const navigationLinkClickedAction = createAction(
        PageActionTypes.NAVBAR_LINK_CLICKED,
        props<{linkId : string}>())

export const leftSidebarTriggeredAction = createAction(
        PageActionTypes.LEFT_SIDEBAR_TRIGGERED)

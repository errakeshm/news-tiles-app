import { createAction, props } from "@ngrx/store";
import { ILocationCoordinates } from '../../../components/api/geolocation.model';

export enum GeoLocActionTypes {
    POSITION_LOGGED = '[Position Logged]'
}

export const geolocationLoggedAction = createAction(
    GeoLocActionTypes.POSITION_LOGGED,
    props<{position:ILocationCoordinates}>()
    );
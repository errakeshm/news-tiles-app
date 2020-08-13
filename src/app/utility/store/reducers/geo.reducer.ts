import { createReducer, on, Action } from '@ngrx/store';
import { ILocationCoordinates } from '../../../components/api/geolocation.model';
import * as GeoLocAction from '../actions/geo.action';


export interface IGeoLocState {
    position: ILocationCoordinates
}

export let initialState: IGeoLocState = {
    position: {}
}
const _geoLocaReducer = createReducer(
    initialState,
    on(GeoLocAction.geolocationLoggedAction,
        (state, props) => {
            return { ...state, position: { latitude: props['position'].latitude, longitude: props['position'].longitude } }
        })
)

export const geoLocReducer = (state:IGeoLocState, action:Action)=>{
    return _geoLocaReducer(state,action);
}
export const selectGeolocation = (state: IGeoLocState)=>{
    return state['locationState'].position;
};

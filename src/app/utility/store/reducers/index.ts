import { IGeoLocState, geoLocReducer} from './geo.reducer';
import { IPageState, pagePropertiesReducer } from './page.reducer';
import { ActionReducerMap } from '@ngrx/store';

interface AppState{
    locationState : IGeoLocState,
    pageState : IPageState
}

export const reducers: ActionReducerMap<AppState> = {
    locationState : geoLocReducer,
    pageState : pagePropertiesReducer
}
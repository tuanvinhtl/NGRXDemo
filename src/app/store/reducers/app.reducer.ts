import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { userReducers } from './user.reducer';
import { configReducer } from './config.reducer';
import { routerReducer } from '@ngrx/router-store';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducer
};


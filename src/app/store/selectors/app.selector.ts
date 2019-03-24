import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';


const selectApp = (state: IAppState) => state;

export const selectorApp = createSelector(
    selectApp,
    (state: IAppState) => state
);


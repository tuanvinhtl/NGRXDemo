import { IAppState } from '../states/app.state';
import { createSelector } from '@ngrx/store';
import { IConfigState } from '../states/config.state';

const selectConfig = (state: IAppState) => state.config;

export const selectorConfig = createSelector(
    selectConfig,
    (state: IConfigState) => state.config
);


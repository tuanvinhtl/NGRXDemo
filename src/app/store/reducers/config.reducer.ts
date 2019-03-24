import { initialConfigState, IConfigState } from '../states/config.state';
import { ConfigActions, EConfigActions } from '../actions/config.action';

export const configReducer = (state = initialConfigState, action: ConfigActions): IConfigState => {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload
            };
        }
        default: return state;
    }

};

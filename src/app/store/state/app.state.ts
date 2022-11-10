import {StateNamesEnum as StateNames} from '../enums/state-names.enum';
import {UserState} from './user.state';
import {ActionReducerMap} from '@ngrx/store';
import {userReducer} from '../reducers/user.reducer';
import {UserEffects} from '../effects/user.effects';
import {CommonState} from './common.state';
import {commonReducer} from '../reducers/common.reducer';
import {CommonEffects} from '../effects/common-effects.service';

export interface AppState {
    [StateNames.USER_STATE_NAME]: UserState;
    [StateNames.COMMON_STATE_NAME]: CommonState;

}

export const allReducers: ActionReducerMap<AppState> = {
    [StateNames.USER_STATE_NAME]: userReducer,
    [StateNames.COMMON_STATE_NAME]: commonReducer
};

export const allEffects = [
    UserEffects,
    CommonEffects,
];

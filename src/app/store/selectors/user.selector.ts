import {createFeatureSelector, createSelector} from '@ngrx/store';

import {StateNamesEnum as StateNames} from '../enums/state-names.enum';
import {UserState} from '../state/user.state';

const getUserState = createFeatureSelector<UserState>(StateNames.USER_STATE_NAME);


export const getAllUsers = createSelector(getUserState, (state) => {
    return state.users;
});

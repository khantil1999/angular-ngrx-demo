import {createReducer, on} from '@ngrx/store';
import {addUserSuccess, deleteUserSuccess, getUsersSuccess, updateUserSuccess,} from '../actions/user.action';
import {initialState} from '../state/user.state';


const _userReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, action) => {
    return {
      ...state,
      users: action.users
    };
  }),

  on(addUserSuccess, (state, action) => {
    return {
      ...state,
      users: [...state.users, action.user],
    };
  }),

  on(updateUserSuccess, (state, action) => {
    const allUsres = [...state.users];
    const index = allUsres.findIndex((el) => el.id === action.user.id);
    allUsres[index] = {...action.user};
    return {
      ...state,
      users: allUsres,
    };
  }),

  on(deleteUserSuccess, (state, action) => {
    const allUsres = [...state.users];
    const index = allUsres.findIndex((el) => el.id === action.id);
    allUsres.splice(index, 1);
    return {
      ...state,
      users: allUsres,
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}

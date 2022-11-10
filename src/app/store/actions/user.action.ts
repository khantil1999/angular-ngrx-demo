import {Action, createAction, props} from '@ngrx/store';
import {IUserModel} from '../../model/user.model';
import {UserStateActionsTypes as Types} from '../enums/action-types.enum';

export const getUsers = createAction(Types.GET_USER);
export const getUsersSuccess = createAction(Types.GET_USER_SUCCESS, props<{ users: IUserModel[] }>());
export const getUsersFailure = createAction(Types.GET_USER_FAILURE, props<{ error: any }>());

export const addUser = createAction(Types.ADD_USER, props<{ user: IUserModel }>());
export const addUserSuccess = createAction(Types.ADD_USER_SUCCESS, props<{ user: IUserModel }>());
export const addUserFailure = createAction(Types.ADD_USER_FAILURE, props<{ error: any }>());

export const updateUser = createAction(Types.UPDATE_USER, props<{ user: IUserModel }>());
export const updateUserSuccess = createAction(Types.UPDATE_USER_SUCCESS, props<{ user: IUserModel }>());
export const updateUserFailure = createAction(Types.UPDATE_USER_FAILURE, props<{ error: any }>());

export const deleteUser = createAction(Types.DELETE_USER, props<{ id: string }>());
export const deleteUserSuccess = createAction(Types.DELETE_USER_SUCCESS, props<{ id: string }>());
export const deleteUserFailure = createAction(Types.DELETE_USER_FAILURE, props<{ error: any }>());




// export class GetUsers  implements Action {
//     readonly type = Types.GET_USER;
//
//     constructor(public payload: { users: IUserModel[]}) {}
// }

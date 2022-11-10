import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../services/user.service';

import * as UsersActions from '../actions/user.action';
import * as CommonActions from '../actions/common.action';

import {catchError, exhaustMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

import {Store} from '@ngrx/store';

@Injectable()
export class UserEffects {
    constructor(
        private userService: UserService,
        private actions$: Actions,
        private store: Store
    ) {
    }

    getUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UsersActions.getUsers),
            exhaustMap(() => {
                return this.userService.onGet().pipe(
                    map((res) => {
                        return UsersActions.getUsersSuccess({users: res});
                    }),
                    catchError((error) => {
                        return of(UsersActions.getUsersFailure({error}));
                    })
                );
            })
        );
    });

    addUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UsersActions.addUser),
            exhaustMap((actions) => {
                return this.userService.onPost(actions.user).pipe(
                    map((res) => {
                        this.store.dispatch(
                            CommonActions.showToastMessage({message: 'User Added', messageType: 'Success'})
                        );
                        return UsersActions.addUserSuccess({user: res});
                    }),
                    catchError((error) => {
                        this.store.dispatch(
                            CommonActions.showToastMessage({
                                message: 'Something went wrong',
                                messageType: 'Danger',
                            })
                        );
                        return of(UsersActions.addUserFailure({error}));
                    })
                );
            })
        );
    });

    updateUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UsersActions.updateUser),
            exhaustMap((actions) => {
                return this.userService.onPut(actions.user).pipe(
                    map((res) => {
                        this.store.dispatch(
                            CommonActions.showToastMessage({message: 'User Updated', messageType: 'Success'})
                        );
                        return UsersActions.updateUserSuccess({user: res});
                    }),
                    catchError((error) => {
                        this.store.dispatch(
                            CommonActions.showToastMessage({
                                message: 'Something went wrong',
                                messageType: 'Danger',
                            })
                        );
                        return of(UsersActions.updateUserFailure({error}));
                    })
                );
            })
        );
    });

    deleteUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UsersActions.deleteUser),
            exhaustMap((actions) => {
                return this.userService.onDelete(actions.id)
                    .pipe(
                        map((res) => {
                            this.store.dispatch(
                                CommonActions.showToastMessage({message: 'User Deleted', messageType: 'Success'})
                            );
                            return UsersActions.deleteUserSuccess({id: res});
                        }),
                        catchError((error) => {
                            this.store.dispatch(
                                CommonActions.showToastMessage({
                                    message: 'Something went wrong',
                                    messageType: 'Danger',
                                })
                            );
                            return of(UsersActions.deleteUserFailure({error}));
                        })
                    );
            })
        );
    });


}

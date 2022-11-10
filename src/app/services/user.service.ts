import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IUserModel} from '../model/user.model';
import {initialState} from '../store/state/user.state';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor() {
    }

    onGet(): Observable<any> {
        return of(initialState.users);
    }

    onPost(data: IUserModel): Observable<any> {
        return of(data);
    }

    onPut(data: IUserModel): Observable<any> {
        return of(data);
    }

    onDelete(id: string): Observable<any> {
        return of(id);
    }

}

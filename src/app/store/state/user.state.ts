import {IUserModel} from '../../model/user.model';

export interface UserState {
    users: IUserModel[];
}

export const initialState: UserState = {
    users: [
        {
            id: '1',
            name: 'user 1',
            designation: 'manager',
            about: 'test about',
        },
        {
            id: '2',
            name: 'user 2',
            designation: 'developer',
            about: 'test about 1',
        },
        {
            id: '3',
            name: 'user 3',
            designation: 'tester',
            about: 'test about 3',
        },
    ]
};

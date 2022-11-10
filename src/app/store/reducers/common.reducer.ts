import {createReducer} from '@ngrx/store';
import {initialState} from '../state/common.state';


const _commonReducer = createReducer(initialState, );


export function commonReducer(state: any, action: any) {
    return _commonReducer(state, action);
}

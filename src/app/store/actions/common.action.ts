import {CommonStateActionTypes as Types} from '../enums/action-types.enum';
import {createAction, props} from '@ngrx/store';

export const showToastMessage = createAction(Types.SHOW_TOAST_MESSAGE, props<{ message: string, messageType: string }>())

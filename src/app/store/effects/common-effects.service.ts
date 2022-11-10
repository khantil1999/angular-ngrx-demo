import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CommonService} from '../../services/common.service';
import * as CommonActions from '../actions/common.action';
import {map} from 'rxjs/operators';

@Injectable()
export class CommonEffects {

    constructor(private actions: Actions, private commonService: CommonService) {
    }


    showMessage$ = createEffect(() => {
        return this.actions.pipe(
            ofType(CommonActions.showToastMessage),
            map((action) => {
                this.commonService.showMessage(action.message, action.messageType);
            })
        );
    }, {dispatch: false});
}

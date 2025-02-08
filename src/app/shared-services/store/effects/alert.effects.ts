import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map } from "rxjs";

import { AlertMessage } from "../../interfaces/common.interface";

import * as fromAlertAction from "./../actions/alert.action";
import * as fromSharedStore from "../../store";

const DELAY = 5000;

@Injectable()
export class AlertEffects {
    
    constructor(
        readonly actions$: Actions,
        readonly store: Store<any>
    ){}

    autoDissimisableAlertEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromAlertAction.SHOW_ALERT),
        map((data: AlertMessage) => {
            
            if(data.autoDismissible === undefined){
                setTimeout(() => {
                    this.store.dispatch(new fromSharedStore.ResetAlert({}));
                }, DELAY);
            }
            return new fromSharedStore.NoAction();
        })
    ));
}
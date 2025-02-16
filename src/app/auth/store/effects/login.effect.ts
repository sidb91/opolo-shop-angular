import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map } from "rxjs";

import { AccountInfo } from "./../actions/auth.action";
import * as fromAuthStore from "./../../store";
import * as fromSharedStore from "./../../../shared-services/store";

@Injectable()
export class LoginEffects {

    constructor(readonly store: Store<any>,
        readonly actions$: Actions
    ){}

    loginEffects$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuthStore.LOGIN_SUCCESS),
        map((action: fromAuthStore.AuthActions) => action.payload),
        map(
            (response: AccountInfo) => {
                this.store.dispatch(
                    new fromAuthStore.FetchUserProfile(response?.username)
                );
                return new fromSharedStore.NoAction();
            }
        )
    ), { dispatch: false })



}
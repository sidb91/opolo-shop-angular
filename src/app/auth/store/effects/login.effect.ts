import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap } from "rxjs";

import * as fromAuthStore from "./../../store";
import { LoginService } from "@app/app-services/api-services/login-services/login.service";

@Injectable()
export class LoginEffects {

    constructor(readonly store: Store<any>,
        readonly actions$: Actions,
        readonly loginService: LoginService
    ){}

    loginEffects$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuthStore.LOGIN),
        map((action: fromAuthStore.AuthActions) => action.payload),
        switchMap(([payload]) => {
            
            return this.loginService.getLoginDetails(payload).pipe(
                map(response => new fromAuthStore.LoginSuccess(response)),
                catchError(error => of(new fromAuthStore.LoginFail(error)))
            );
        })
    ))



}
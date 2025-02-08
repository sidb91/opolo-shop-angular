import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap } from "rxjs";

import * as fromCustomerDetailsStore from "../../store";

const DELAY = 5000;

@Injectable()
export class CustomerDetailsEffects {
    
    constructor(
        readonly actions$: Actions,
        readonly store: Store<any>,
        readonly userService: CommonService
    ){}

    loadCustomerDetails$ = createEffect(() => this.actions$.pipe(
        ofType(fromCustomerDetailsStore.FETCH_CUSTOMER_DETAILS),
        map((action: fromCustomerDetailsStore.customerDetailsAction) => action.payload),
        switchMap(id => {
            return this.userService.getCustomerDetails(id).pipe(
                map(response => 
                    new fromCustomerDetailsStore.FetchCustomerDetailsSuccess(response)
                ),
                catchError(error => of(new fromCustomerDetailsStore.FetchCustomerDetailsFailure(error)))
            );
        })
    ));
}
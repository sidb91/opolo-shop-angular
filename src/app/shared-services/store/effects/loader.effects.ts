import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { HideLoader, ShowLoader } from "../actions/loader.action";
import { map } from "rxjs";

@Injectable()
export class LoaderEffects { 

    constructor(readonly actions$: Actions){}

    showLoaderEffect$ = createEffect(() => this.actions$.pipe(
        ofType(),
        map(() => new ShowLoader())
    ));

    hideLoaderEffect$ = createEffect(() => this.actions$.pipe(
        ofType(),
        map(() => new HideLoader())
    ));
}
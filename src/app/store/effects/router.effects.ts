import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

import * as RouterActions from './../actions/router.action';

@Injectable()
export class RouterEffects {

  constructor(
    readonly action$: Actions,
    readonly router: Router,
    readonly location: Location
  ) {}

  navigate$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.GO),
        map((action: RouterActions.Go) => action.payload),
        tap(({ path, query: queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.BACK),
        tap(() => {
          this.location.back();
        })
      ),
    { dispatch: false }
  );

  navigateforward$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.FORWARD),
        tap(() => {
          this.location.forward();
        })
      ),
    { dispatch: false }
  );
}

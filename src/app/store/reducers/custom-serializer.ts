
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import { RouterStateUrl } from '../../shared-services/models/router-state.interface';

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

//router reducer
export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer
}

//router root state
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(
    'routerReducer'
);

@Injectable()
export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;

        //iterate router state tree
        //Get the first child i.e. abc/:id
        while(state.firstChild){
            state = state.firstChild;
        }

        const { params } = state;

        //this object will be binded with our state tree
        return { url, queryParams, params };
    }
}
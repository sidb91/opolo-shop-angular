import { createSelector } from "@ngrx/store";
import { getRouterState } from "../reducers";


export const getQueryParam = (queryParam: string) => createSelector(
    getRouterState,
    router => {
        return router?.state?.queryParams[queryParam];
    }
);
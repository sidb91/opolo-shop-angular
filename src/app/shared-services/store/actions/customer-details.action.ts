import { Action } from "@ngrx/store";

export const FETCH_CUSTOMER_DETAILS = '[Shared] Fetch Customer Details';
export const FETCH_CUSTOMER_DETAILS_SUCCESS = '[Shared] Fetch Customer Details Success';
export const FETCH_CUSTOMER_DETAILS_FAILURE = '[Shared] Fetch Customer Details Fail';

export class FetchCustomerDetails implements Action {
    readonly type = FETCH_CUSTOMER_DETAILS;
    constructor(public payload: any){}
}

export class FetchCustomerDetailsSuccess implements Action {
    readonly type = FETCH_CUSTOMER_DETAILS_SUCCESS;
    constructor(public payload: any){}
}

export class FetchCustomerDetailsFailure implements Action {
    readonly type = FETCH_CUSTOMER_DETAILS_FAILURE;
    constructor(public payload: any){}
}

export type customerDetailsAction = 
    FetchCustomerDetails | FetchCustomerDetailsFailure | FetchCustomerDetailsSuccess
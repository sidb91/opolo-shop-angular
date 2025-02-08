import { Action } from "@ngrx/store";

import { AlertMessage } from '../../../shared-services/interfaces/common.interface';

export const SHOW_ALERT = '[App alert] Show Alert';
export const HIDE_ALERT = '[App alert] Hide Alert';
export const RESET_ALERT = '[App alert] Reset Alert';
export const NO_ACTION = '[App alert] No Action';

export class ShowAlert implements Action {
    readonly type = SHOW_ALERT;
    constructor(public payload: AlertMessage){}
}

export class ResetAlert implements Action {
    readonly type = RESET_ALERT;
    constructor(public payload: AlertMessage){}
}

export class NoAction implements Action {
    readonly type = NO_ACTION;
}

export type AlertAction = ShowAlert | ResetAlert | NoAction
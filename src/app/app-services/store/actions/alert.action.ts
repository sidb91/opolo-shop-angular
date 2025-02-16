import { Action } from "@ngrx/store";

import { AlertMessage } from "@app/shared-services/interfaces/common.interface";
import { NO_ACTION, RESET_ALERT, SHOW_ALERT } from "@app/shared-services/store";


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


export type AlertAction = ShowAlert | ResetAlert | NoAction;
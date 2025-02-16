import { Action } from "@ngrx/store";

export const FETCH_WORKSPACE_DETAILS = "[Application] Fetch Workspace Details";
export const FETCH_WORKSPACE_DETAILS_SUCCESS = "[Application] Fetch Workspace Details Success";
export const FETCH_WORKSPACE_DETAILS_FAIL = "[Application] Fetch Workspace Details Fail";

export class FetchWorkspaceDetails implements Action {
    readonly type = FETCH_WORKSPACE_DETAILS;
    constructor(public payload: any){};
}

export class FetchWorkspaceDetailsSuccess implements Action {
    readonly type = FETCH_WORKSPACE_DETAILS_SUCCESS;
    constructor(public payload: any){};
}

export class FetchWorkspaceDetailsFail implements Action {
    readonly type = FETCH_WORKSPACE_DETAILS_FAIL;
    constructor(public payload: any){};
}

export type WorkspaceDetailsAction = FetchWorkspaceDetails |
    FetchWorkspaceDetailsSuccess | FetchWorkspaceDetailsFail;
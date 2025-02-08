import { Action } from "@ngrx/store";

export const SHOW_LOADER = '[Shared] Show Loader';
export const HIDE_LOADER = '[Shared] Hide Loader';

export class ShowLoader implements Action {
    readonly type = SHOW_LOADER;
}

export class HideLoader implements Action {
    readonly type = HIDE_LOADER;
}

export type LoaderAction = ShowLoader | HideLoader;
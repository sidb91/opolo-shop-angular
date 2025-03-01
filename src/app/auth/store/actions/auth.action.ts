import { Action } from "@ngrx/store";

import { LoginDetailsInf } from "@app/app-services/api-services/login-services/login-service.interface";
import { UserProfileInf } from "@app/app-services/api-services/user-service/user-service.interface";


//Login actions
export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGOUT = '[Auth] Logout';

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: string){}
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: LoginDetailsInf){}
}

export class LoginFail implements Action {
    readonly type = LOGIN_FAIL;
    constructor(public payload: any){}
}

export class Logout implements Action {
    readonly type = LOGOUT;
    constructor(public payload: string){}
}


//User Profile actions
export const FETCH_USER_PROFILE = '[Auth] Fetch User Profile';
export const FETCH_USER_PROFILE_SUCCESS = '[Auth] Fetch User Profile Success';
export const FETCH_USER_PROFILE_FAIL = '[Auth] Fetch User Profile Fail';

export class FetchUserProfile implements Action {
    readonly type = FETCH_USER_PROFILE;
    constructor(public payload: string){}
}

export class FetchUserProfileSuccess implements Action {
    readonly type = FETCH_USER_PROFILE_SUCCESS;
    constructor(public payload: UserProfileInf){}
}

export class FetchUserProfileFail implements Action {
    readonly type = FETCH_USER_PROFILE_FAIL;
    constructor(public payload: any){}
}

export type AuthActions = Login | LoginSuccess | LoginFail | Logout
    | FetchUserProfile | FetchUserProfileSuccess | FetchUserProfileFail;
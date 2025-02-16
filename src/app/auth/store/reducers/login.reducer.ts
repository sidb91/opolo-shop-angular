import * as fromLoginActions from './../actions';

export interface LoginDetailsState {
    roles: string[];
    userEmail: string;
    userName: string;
    isAuthenticated: boolean;
    hasValidRole: boolean;
    loading: boolean;
    loaded: boolean;
    error: boolean;
    accountPayload: any;
}

export const initialState: LoginDetailsState = {
    roles: null!,
    userEmail: null!,
    userName: null!,
    isAuthenticated: false,
    hasValidRole: true,
    loading: false,
    loaded: false,
    error: false,
    accountPayload: null
}

export function reducer(
    state: LoginDetailsState = initialState,
    action: fromLoginActions.AuthActions
): LoginDetailsState {
    
    switch(action.type) {

        case fromLoginActions.LOGIN: {
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false
            }
        }

        case fromLoginActions.LOGIN_SUCCESS: {
            
            const roles = action.payload?.accountPayload.idTokenClaims.roles;
            const userEmail = action.payload?.useremail;
            const userName = action.payload?.name;
            const isAuthenticated = action.payload?.isAuthenticated;
            const accountPayload = action.payload.accountPayload;

            return {
                ...state,
                roles,
                userEmail,
                userName,
                isAuthenticated,
                loading: false,
                loaded: true,
                error: false,
                accountPayload
            }
        }

        case fromLoginActions.LOGIN_FAIL: {

            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                loaded: false,
                error: true
            }
        }

        case fromLoginActions.LOGOUT : {
            localStorage.clear();
            return {
                ...state
            }
        }
    }

    return state;
}

export const userEmail = (state: LoginDetailsState) => state?.userEmail;
export const userName = (state: LoginDetailsState) => state?.userName;
export const roles = (state: LoginDetailsState) => state?.roles;
export const isAuthenticated = (state: LoginDetailsState) => state?.isAuthenticated;
export const hasValidRole = (state: LoginDetailsState) => state?.hasValidRole;
export const loaded = (state: LoginDetailsState) => state?.loaded;
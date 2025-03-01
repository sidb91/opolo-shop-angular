import * as fromAuthActions from './../actions';

import { UserProfileInf } from "@app/app-services/api-services/user-service/user-service.interface";

export interface UserProfileState{
    data: UserProfileInf;
    isManager: boolean;
    userId: string;
    loading: boolean;
    loaded: boolean;
    error: boolean;
}

export const initialState: UserProfileState = {
    data: null!,
    isManager: false,
    userId: null!,
    loading: false,
    loaded: false,
    error: false
}

export function reducer(
    state: UserProfileState = initialState,
    action: fromAuthActions.AuthActions
) : UserProfileState {

    switch(action.type){

        case fromAuthActions.FETCH_USER_PROFILE: {
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false
            }
        }

        case fromAuthActions.FETCH_USER_PROFILE_SUCCESS: {
            const data = action.payload;
            const isManager = action.payload.manager;
            const userId = action.payload.user_id;

            return {
                ...state,
                loading: false,
                loaded: true,
                error: false,
                data,
                isManager,
                userId
            }
        }

        case fromAuthActions.FETCH_USER_PROFILE_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: true
            }
        }
    }

    return state;

}

export const userProfiles = (state: UserProfileState) => state?.data;
export const manager = (state: UserProfileState) => state?.isManager;
export const userId = (state: UserProfileState) => state?.userId;


export const userProfileLoaded = (state: UserProfileState) => state.loaded;
export const userProfileLoading = (state: UserProfileState) => state.loading;
export const userProfileError = (state: UserProfileState) => state.error;



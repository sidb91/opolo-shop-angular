import { FeatureModuleNames } from "@app/app-services/enum/feature-names.enum";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromLoginReducer from './login.reducer';
import * as fromUserProfileReducer from './user-profile.reducer';


export interface AuthState {
    loginDetails: fromLoginReducer.LoginDetailsState;
    userProfile: fromUserProfileReducer.UserProfileState;
}

export const reducers: ActionReducerMap<AuthState, any> = {
    loginDetails: fromLoginReducer.reducer,
    userProfile: fromUserProfileReducer.reducer
}

export const getAuthState = createFeatureSelector<AuthState>(FeatureModuleNames.auth);
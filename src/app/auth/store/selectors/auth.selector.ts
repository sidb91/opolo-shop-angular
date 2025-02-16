import { createSelector } from "@ngrx/store";

import * as fromFeature from "./../reducers";
import * as  fromLoginReducer from "./../reducers/login.reducer";
import * as fromUserProfileReducer from "./../reducers/user-profile.reducer";


//Accessing the auth store
const getLoginRootState: any = createSelector(
    fromFeature.getAuthState,
    (state: fromFeature.AuthState) => state.loginDetails
);

export const userEmail = createSelector(
    getLoginRootState,
    fromLoginReducer.userEmail
)

export const userName = createSelector(
    getLoginRootState,
    fromLoginReducer.userName
)

export const userRoles = createSelector(
    getLoginRootState,
    fromLoginReducer.roles
)

export const isAuthenticated = createSelector(
    getLoginRootState,
    fromLoginReducer.isAuthenticated
)

//accessing user profile store
const getUserProfileRootState: any = createSelector(
    fromFeature.getAuthState,
    (state: fromFeature.AuthState) => state.userProfile
);

export const userProfile: any = createSelector(
    getUserProfileRootState,
    fromUserProfileReducer.userProfiles
);

export const isManager: any = createSelector(
    getUserProfileRootState,
    fromUserProfileReducer.manager
);

export const userId: any = createSelector(
    getUserProfileRootState,
    fromUserProfileReducer.userId
);
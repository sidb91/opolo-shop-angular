import * as fromWorkspaceAction from "../actions";

export interface WorkspaceDetailsState {
    entities: { [lifeId: string]: null };
    loading: boolean;
    loaded: boolean;
    error: boolean;
}

export const initialState:  WorkspaceDetailsState = {
    entities: null!,
    loading: false,
    loaded: false,
    error: false
}


export function reducer(
    state = initialState,
    action: fromWorkspaceAction.WorkspaceDetailsAction
): WorkspaceDetailsState {

    switch(action.type) {

        case fromWorkspaceAction.FETCH_WORKSPACE_DETAILS: {
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false
            }
        }

        case fromWorkspaceAction.FETCH_WORKSPACE_DETAILS_SUCCESS: {

            const taskArray = [action.payload];
            const entities = taskArray.reduce(
                (entities: {[lifeId: string]: any }, lifeTask: any) => {
                    return null
                },
                {
                    ...state.entities
                }
            )

            return {
                ...state,
                loading: false,
                loaded: true,
                error: false,
                entities
            }
        }

        case fromWorkspaceAction.FETCH_WORKSPACE_DETAILS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: true
            }
        }

        default:
            return state;
    }
}
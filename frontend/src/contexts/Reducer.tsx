import { InitialStateTypes } from "./Context";

export enum ActionKind {
    LOGIN_START = "LOGIN_START",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILURE = "LOGIN_FAILURE",
    UPDATE_START = "UPDATE_START",
    UPDATE_SUCCESS = "UPDATE_SUCCESS",
    UPDATE_FAILURE = "UPDATE_FAILURE",
    LOGOUT = "LOGOUT",
}

export type Action = {
    type: ActionKind;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
};

export const Reducer = (
    state: InitialStateTypes,
    action: Action,
): InitialStateTypes => {
    switch (action.type) {
        case ActionKind.LOGIN_START:
            return {
                isFetching: true,
                isError: false,
            };
        case ActionKind.LOGIN_SUCCESS:
            return {
                user: action.payload,
                isFetching: false,
                isError: false,
            };
        case ActionKind.LOGIN_FAILURE:
            return {
                isFetching: false,
                isError: true,
            };
        case ActionKind.UPDATE_START:
            return {
                ...state,
                isFetching: true,
            };
        case ActionKind.UPDATE_SUCCESS:
            return {
                user: action.payload,
                isFetching: false,
                isError: false,
            };
        case ActionKind.UPDATE_FAILURE:
            return {
                user: state.user,
                isFetching: false,
                isError: true,
            };
        case ActionKind.LOGOUT:
            return {
                user: null,
                isFetching: false,
                isError: false,
            };
        default:
            return state;
    }
};

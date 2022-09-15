import { Action, ActionKind } from "./Reducer";

export const LoginStart = () => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user: Action) => ({
    type: ActionKind.LOGIN_SUCCESS,
    payload: user.payload,
});

export const LoginFailure = () => ({
    type: ActionKind.LOGIN_FAILURE,
});

export const Logout = () => ({
    type: ActionKind.LOGOUT,
});

export const UpdateStart = () => ({
    type: ActionKind.UPDATE_START,
});

export const UpdateSuccess = (user: Action) => ({
    type: ActionKind.UPDATE_SUCCESS,
    payload: user,
});

export const UpdateFailure = () => ({
    type: ActionKind.UPDATE_FAILURE,
});

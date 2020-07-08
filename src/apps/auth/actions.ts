import {ThunkDispatch} from "redux-thunk";
import {authenticate, createAccount as createAccountSource} from '../../datasources';
import * as constants from "./constants";
import * as types from "./types";

export interface LoadAuthsAction {
    type: constants.AUTHENTICATE;
    payload: types.Auth;
}

export interface LogoutAction {
    type: constants.LOGOUT;
}

export type Action = LoadAuthsAction | LogoutAction;
export type Dispatch = ThunkDispatch<{}, {}, Action>;

export function logout() {
    return (dispatch: Dispatch): Promise<types.Auth> => new Promise((resolve, reject) => {
        dispatch({
            type: constants.LOGOUT,
        });
    });
}

export function createAccount(username: string, password: string) {
    return (dispatch: Dispatch): Promise<types.Auth> => createAccountSource({username, password}).then(res => {
        dispatch({
            type: constants.AUTHENTICATE,
            payload: {
                id: res.user.id,
                token: res.accessToken,
                username: res.user.username,
            },
        });
        return {
            id: res.user.id,
            token: res.accessToken,
            username: res.user.username,
        };
    });;
}

export function login(username: string, password: string) {
    return (dispatch: Dispatch): Promise<types.Auth> => authenticate({username, password}).then(res => {
        dispatch({
            type: constants.AUTHENTICATE,
            payload: {
                id: res.user.id,
                token: res.accessToken,
                username: res.user.username,
            },
        });
        return {
            id: res.user.id,
            token: res.accessToken,
            username: res.user.username,
        };
    });;
}

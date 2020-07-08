import {Action} from "./actions";
import * as constants from "./constants";
import * as types from "./types";

export function auth(state: types.Auth = {id: 0, token: '', username: ''}, action: Action) {
    switch (action.type) {
        case constants.AUTHENTICATE:
            return action.payload;
        case constants.LOGOUT:
            return {
                id: 0,
                token: ''
            };
        default:
            return state;
    }
}

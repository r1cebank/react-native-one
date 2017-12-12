import * as ActionTypes from '../actionTypes';

export function updatePermissions (permissions) {
    return { type: ActionTypes.UPDATE_PERMISSIONS, permissions };
}

export function updateState (state) {
    return { type: ActionTypes.UPDATE_STATE, state };
}

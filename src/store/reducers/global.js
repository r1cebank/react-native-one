/**
 * Reducer for settings
 * @param {any} state
 * @param {any} action
 */

import * as ActionTypes from '../actionTypes';

function reducer (state = {}, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_PERMISSIONS: {
            return {
                ...state,
                permissions: action.permissions
            };
        }
        case ActionTypes.UPDATE_STATE: {
            return {
                ...state,
                state: action.state
            };
        }
        default:
            return state;
    }
}

export default reducer;

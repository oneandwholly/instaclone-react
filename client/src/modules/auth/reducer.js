import * as a from './actionTypes';

const initialState = {
    authenticated: false,
    auth_user: null,
    auth_error: null
};

export default (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case a.AUTHENTICATE:
            newState = { ...state, authenticated: true };
            return newState;
        default:
            return state;
    }
}


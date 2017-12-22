import { combineReducers } from 'redux';

import auth from './modules/auth';
import user from './modules/user';
import form from './modules/form';

const rootReducer = combineReducers({
    [auth.constants.NAME]: auth.reducer,
    [user.constants.NAME]: user.reducer,
    [form.constants.NAME]: form.reducer,
});

export default rootReducer;
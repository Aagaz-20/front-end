import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';

import { authReducer } from './authReducer';
import { eventRegistrationReducer } from './eventRegistration';
import { errorsReducer } from './errorsReducer';

export default combineReducers({
    form: formReducer,
    authReducer: authReducer,
    eventRegistration: eventRegistrationReducer,
    errors: errorsReducer
});

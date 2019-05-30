import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loginReducer from "./loginReducer";
import signupReducer from './signupReducer';

export default combineReducers({
    auth: authReducer,
    loginReducer: loginReducer,
    signupReducer

});

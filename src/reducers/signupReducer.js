import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types'
const initialState = {
    isSuccessful: false,
    token: '',
    errors: null,
};


const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isSuccessful: true,
                token: action.payload
            };
        case REGISTER_FAIL:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
}

export default signupReducer;
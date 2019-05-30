import loginReducer from '../reducers/loginReducer';
import signupReducer from '../reducers/signupReducer';
import {
    LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL,
} from '../actions/types'


describe('logins a user', () => {
    it('should return initial state', () => {
        expect(loginReducer(undefined, {})).toEqual(
            {

                isSuccessful: false,
                token: '',
                errors: null,


            }
        );
    }
    )

it('should update the LOGIN_SUCCESS', () => {
    expect(loginReducer([], { type: LOGIN_SUCCESS, token: '' })).toEqual({
        isSuccessful: true,
        token: undefined,
    });
})

it('should update state if there is LOGIN_FAIL', () => {
    expect(loginReducer([], { type: LOGIN_FAIL, errors: '' })).toEqual({
        errors: undefined
    });

});
it('should return initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(
        {

            isSuccessful: false,
            token: '',
            errors: null

        }
    );
}
)
it('should update the REGISTER_SUCCESS', () => {
    expect(signupReducer([], { type: REGISTER_SUCCESS, token: '' })).toEqual({
        isSuccessful: true,
        token: undefined,
    });

})
it('should update state if there is REGISTER_FAIL', () => {
    expect(signupReducer([], { type: REGISTER_FAIL, errors: '' })).toEqual({
        errors: undefined,
    });
})
}
);

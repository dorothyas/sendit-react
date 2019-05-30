import { LOGIN_FAIL, LOGIN_SUCCESS } from './types';
import { toast } from "react-toastify";

const loginAction = loginData => (dispatch) => {

    return fetch(`https://stargal-dorothy.herokuapp.com/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
        .then(response => response.json())
        .then((data) => {
            if (data.Message) {
                toast.success(`${data.Message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false
                });
                dispatch({
                    type: LOGIN_FAIL,
                    payload: data.errors,
                });

            } else {
                toast.success(`${data.message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false
                });
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: data,
                });

            }
        },
        )
};

export default loginAction;
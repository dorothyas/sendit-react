import { REGISTER_FAIL, REGISTER_SUCCESS } from './types';
import { toast } from "react-toastify";

const registerAction = registerData => (dispatch) => {

    return fetch(`https://stargal-dorothy.herokuapp.com/api/v1/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
    })
        .then(response => response.json())
        .then((data) => {
            if (data.Message === "Email already exists") {
                console.log(data.Message)
                toast.success(`${data.Message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false
                });
                dispatch({
                    type: REGISTER_FAIL,
                    payload: data.errors,
                });
                
            } else {
                toast.success(`${data.Message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false
                });
                
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: data,
                });
                
            }
        },
        )
};

export default registerAction;
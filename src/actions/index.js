import axios from 'axios';

export const registerAction = formValues => async dispatch => {
    const data = formValues;
    try{
        const response = await axios.post('http://localhost:3001/register', data);
        dispatch({
            type: 'REGISTER',
            payload: response.data.msg
        })
        return true;
    }
    catch(err){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })
        return true;
    }

}

export const loginAction = formValues => async dispatch => {
    const data = formValues
    try{
        const response = await axios.post('http://localhost:3001/login', data);
        dispatch({
            type: 'LOGIN',
            payload: response.data
        })

        return true;
    }
    catch(err){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })

        return true;
    }
}

export const forgotPasswordAction = formValues => async dispatch => {
    const data = formValues;
    try{
        const response = await axios.post('http://localhost:3001/forgotpassword' ,data);
        dispatch({
            type: 'FORGOTPASSWORD',
            payload: response.data.msg
        })

        return true;
    }
    catch(err){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })

        return true;
    }
}

export const resetPasswordAction = formValues => async dispatch => {
    const data = formValues;
    try{
        const response = await axios.post('http://localhost:3001/resetpassword' ,data);
        dispatch({
            type: 'RESETPASSWORD',
            payload: response.data.msg
        })
        return true;
    }
    catch(err){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })
        return true;
    }
}
import axios from 'axios';

export const registerAction = formValues => async dispatch => {
    const data = formValues;
    try{
        const response = await axios.post('https://aagaz-server.herokuapp.com/register', data);
        dispatch({
            type: 'REGISTER',
            payload: response.data.data
        })
        return true;
    }
    catch(err){
        if(err.response){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })}
        return true;
    }

}

export const loginAction = formValues => async dispatch => {
    const data = formValues
    try{
        const response = await axios.post('https://aagaz-server.herokuapp.com/login', data);
        dispatch({
            type: 'LOGIN',
            payload: response.data
        })
        window.localStorage.setItem("token", response.data.token)

        return true;
    }
    catch(err){
        if(err.response){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })}

        return true;
    }
}

export const loginDataAction = (token) => async dispatch => {
    try{
        const response = await axios.get('https://aagaz-server.herokuapp.com/logindata',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({
            type: 'LOGIN',
            payload: response.data.data
        })

    }
    catch(err){
        if(err.response){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })
        }
    }
}

export const logoutAction = () => dispatch => {
    dispatch({
        type: 'LOGOUT',
        payload: {msg: 'Logged Out'}
    })
    window.localStorage.removeItem('token')
}

export const forgotPasswordAction = formValues => async dispatch => {
    const data = formValues;
    try{
        const response = await axios.post('https://aagaz-server.herokuapp.com/forgotpassword' ,data);
        dispatch({
            type: 'FORGOTPASSWORD',
            payload: response.data.msg
        })

        return true;
    }
    catch(err){
        if(err.response){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })
        }  
        return true;
    }
}

export const resetPasswordAction = formValues => async dispatch => {
    const data = formValues;
    try{
        const response = await axios.post('https://aagaz-server.herokuapp.com/resetpassword' ,data);
        dispatch({
            type: 'RESETPASSWORD',
            payload: response.data.msg
        })
        return true;
    }
    catch(err){
        if(err.response){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })}
        return true;
    }
}

export const eventRegistrationAction = (formValues, eventName) =>  async dispatch => {
    let data = formValues;
    data.eventName = eventName;
    const token =window.localStorage.getItem('token')

    try{
        const response = await axios.post('https://aagaz-server.herokuapp.com/eventregistration',
        data ,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response)
        dispatch({
            type: 'EVENTREGISTRATION',
            payload: response.data.msg
        })
        return true;
    }
    catch(err){
        if(err.response){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })}
        return true;
    }
}

export const emailVerifyAction = (token) => async dispatch => {
    try{
        const response = await axios.get(`https://aagaz-server.herokuapp.com/verification/${token}`)

        dispatch({
            type: 'EMAILVERIFY',
            payload: response.data.msg
        })
    }
    catch(err){
        if(err.response){
        dispatch({
            type: 'ERROR',
            payload: {title: err.response.statusText , msg: err.response.data.msg}
        })}
        return true;
    }
}
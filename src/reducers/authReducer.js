export const authReducer = (state={}, action) => {
    switch(action.type){
        case 'REGISTER': 
            return state = {registered : true, msg : action.payload};
        case 'LOGIN':
            return state = {loginData: action.payload};
        case 'FORGOTPASSWORD':
            return state = {forgotPassword: action.payload};
        case 'RESETPASSWORD':
            return state = {resetPassword: action.payload};
        case 'ERROR':
            return state = {error: action.payload}
        default:
            return state;
    }
}
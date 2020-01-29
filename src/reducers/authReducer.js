export const authReducer = (state={}, action) => {
    switch(action.type){
        case 'REGISTER': 
            return state = {...this,isRegistered : true, data:action.payload};
        case 'LOGIN':
            return state = {...this,loginData: action.payload, isLoggedIn: true};
        case 'LOGOUT':
            return state = {...this,msg: action.payload.msg, isLoggedIn: false}
        case 'FORGOTPASSWORD':
            return state = {...this,forgotPassword: action.payload};
        case 'RESETPASSWORD':
            return state = {...this,resetPassword: action.payload};
        default:
            return state;
    }
}
export const errorsReducer = (state={}, action) => {
    switch(action.type){
        case 'ERROR':
            return state = {...this,error: action.payload};
        case 'REGISTER': 
            return state = {...this};
        case 'LOGIN':
            return state = {...this};
        case 'LOGOUT':
            return state = {...this}
        case 'FORGOTPASSWORD':
            return state = {...this};
        case 'RESETPASSWORD':
            return state = {...this};
        case 'EVENTREGISTRATION':
            return state = {...this};
        case 'EMAILVERIFY':
            return state = {...this}
        default:
            return state;
    }
}
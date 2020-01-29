export const eventRegistrationReducer = (state={}, action) => {
    switch(action.type){
        case 'EVENTREGISTRATION':
            return state = {...this,eventRegistration: action.payload}
        case 'EMAILVERIFY':
            return state = {msg: action.payload, isEmailVerified: true}
        case 'ERROR':
            return state = {...this};
        default:
            return state;
    }
}
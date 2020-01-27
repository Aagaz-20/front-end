export const eventRegistrationReducer = (state={}, action) => {
    switch(action.type){
        case 'EVENTREGISTRATION':
            return state = {...this,eventRegistration: action.payload}
        case 'ERROR':
            return state = {...this};
        default:
            return state;
    }
}
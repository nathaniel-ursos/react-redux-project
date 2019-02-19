const initialState = {
    signinError: null
}

const signinReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                signinError: 'Login Failed. Please try again!'
            }
        case 'LOGIN_SUCCESS':
        alert('Successfuly Login')
            return {
                ...state,
                signinError: null
            }
            case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
            default:
                return state;
    }
};

export default signinReducer;
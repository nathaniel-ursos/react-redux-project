const initialState = {
    signupError: null
}

const signupReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SIGNUP_SUCCESS':
        alert('Successfuly signup!')
            return {
                ...state,
                signupError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                signupError: action.err.message
            }
            default:
                return state;
    }
};

export default signupReducer
const initialState = {}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
            case 'UPDATE_PROFILE':
        alert('Profile Successfuly Updated')
            return {
                ...state,
            }
        case 'UPDATE_PROFILE_ERROR':
            console.log('add product error', action.err);
            return state;
        default:
            return state;
    }
}

export default productReducer
const initialState = {}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
        alert('Product Successfuly Added')
            return {
                ...state,
            }
        case 'ADD_PRODUCT_ERROR':
            console.log('add product error', action.err);
            return state;

            case 'UPDATE_PROJECT':
        alert('Product Successfuly Updated')
            return {
                ...state,
            }
        case 'UPDATE_PRODUCT_ERROR':
            console.log('add product error', action.err);
            return state;
        case 'DELETE_PRODUCT':
            alert('Product Successfuly Deleted')
                return state;
        default:
            return state;
    }
}

export default productReducer
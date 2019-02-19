import authReducer from './signinReducer'
import signupReducer from './signupReducer'
import profileReducer from './profileReducer'
import productReducer from './productReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    signup: signupReducer,
    profile: profileReducer,
    product: productReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer
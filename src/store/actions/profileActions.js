export const updateProfile = (user, key) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {

        const firestore = getFirestore();
        
        firestore.collection('users').doc(key).set({
            ...user,

        }).then(() => {
            dispatch({type: 'UPDATE_PROFILE', user})
        }).catch((err) => {
            dispatch({type: 'UPDATE_PROFILE_ERROR', err})
        })
      }
}
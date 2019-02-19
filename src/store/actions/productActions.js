export const addProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('products').add({
            ...product,
            createdAt: new Date()

        }).then (() => {
            dispatch({ type: 'ADD_PRODUCT', product });
        }).catch((err) => {
            dispatch({ type: 'ADD_PRODUCT_ERROR', err });
        })

    }
};

export const updateProduct = (product, key) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {

        const firestore = getFirestore();
        
        firestore.collection('products').doc(key).set({
            ...product,

        }).then(() => {
            dispatch({type: 'UPDATE_PROJECT', product})
        }).catch((err) => {
            dispatch({type: 'UPDATE_PROJECT_ERROR', err})
        })
      }
}

export const deleteProduct = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {

        const firestore = getFirestore()

        firestore.collection('products').doc(id).delete().then(() => {
            dispatch({type: 'DELETE_PRODUCT'})
        }).catch((err) => {
        console.error("delete error: ", err)
        });
      }
}
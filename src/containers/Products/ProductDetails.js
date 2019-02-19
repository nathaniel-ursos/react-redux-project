import React from 'react'
import Navbar from '../Dashboard/Navbar/Navbar'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ProductDetails = (props) => {
    const { product, auth } = props;
    const id = props.match.params.id;
   console.log(product)
    if (!auth.uid) return <Redirect to='/signin' />
    if (product) {
        return (
        <div>
        <Navbar />
        <br></br><br></br>
         <h5 className="font-italic">Product Details</h5><br></br>
             <div className="container">
                 <div className="col-5 mx-auto">
                     <ul className="list-group ">
                         <li className="list-group-item text-left ">Product Name: &nbsp;&nbsp;&nbsp;<label>{product.productNumber}</label></li>
                         <li className="list-group-item text-left ">Product Name: &nbsp;&nbsp;&nbsp;<label>{product.productName}</label></li>
                         <li className="list-group-item text-left">Product Brand:&nbsp;&nbsp;&nbsp;<label>{product.productBrand}</label></li>
                         <li className="list-group-item text-left">Product Color:&nbsp;&nbsp;&nbsp;<label>{product.productColor}</label></li>
                         <li className="list-group-item text-left">Description:&nbsp;&nbsp;&nbsp;<label>{product.productDesc}</label></li>
                         <li className="list-group-item text-left">Created On:&nbsp;&nbsp;&nbsp;<label>{moment(product.createdAt.toDate()).format('lll')}</label></li>
                     </ul><br></br>
                     <Link className="badge-pill badge-success" to={'/update-product/' + id} >Update</Link>
                 </div>
             </div>
        </div>
        )
    } else {
        return (     
            <p>Loading ...</p>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const products = state.firestore.data.products;
    const product = products ? products[id] : null
    
    return {
        product: product,
        auth: state.firebase.auth
    }
  
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection : 'products' }])
  )(ProductDetails)
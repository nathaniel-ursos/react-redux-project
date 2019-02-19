import React, { Component } from 'react'

import Navbar from '../Dashboard/Navbar/Navbar'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../store/actions/productActions';
 import './Product.css';


 class ProductLists extends Component {
    
    delete =(event) => {
        const id = event.target.getAttribute('data-key');
        event.preventDefault()
        this.props.deleteProduct(id)
    }

    render() {
    
    const { products, auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />
    if (products) {
    return (    
       <div>
             <Navbar />
             <div className="container">
             <div className="col-9">
            <br></br><br></br><h5 className="text-left font-italic">Product Lists</h5><br></br>
          

           <table className="table table-hover">
            <thead className="thead-light">
                <tr>
                <th scope="col">Product No.</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Brand</th>
                <th scope="col"><span className="text-default" >Actions</span></th>
           
                </tr>
            </thead>
            <tbody>  

                { products && products.map(product => {
                     
                return (

                   
                    <tr key={product.id}>
                    <td >{product.productNumber}</td>
                    <td >{product.productName}</td>
                    <td>{product.productBrand}</td>
                    <td ><Link data-toggle="tooltip" title="Product details" className="badge badge-success" to={'/product/' + product.id}>Details</Link>&nbsp;&nbsp;&nbsp;
                    <Link data-toggle="tooltip" title="Delete product"  className="badge badge-danger" to="" onClick={this.delete.bind(this)} data-key={product.id}>Delete</Link></td>
                    </tr>
                    )
                })}           


            </tbody>
            </table>
            </div>
       </div>
       </div>
    )
} else {
    return (     
        <p>Loading . . . </p>
    )
}
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.firestore.ordered.products,
      auth: state.firebase.auth
    }
  
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(deleteProduct(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      { collection : 'products', orderBy: ['productNumber', 'asc']}
    ])
  )(ProductLists)





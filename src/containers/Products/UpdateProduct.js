import React, { Component } from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Navbar from '../Dashboard/Navbar/Navbar'
import { Redirect } from 'react-router-dom'
import { updateProduct } from '../../store/actions/productActions';


// import './CounterOutput.css';

class UpdateProduct extends Component {
      constructor(props) {
        super(props);

       if(props.product) {
        this.state = {
            ...this.state,
            productNumber: props.product.productNumber,
            productName: props.product.productName,
            productBrand : props.product.productBrand,
            productColor: props.product.productColor,
            productDesc: props.product.productDesc,
            createdAt: props.product.createdAt
          };}
      }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
           
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateProduct(this.state, this.props.match.params.id);
        this.props.history.push('/product-lists');
        }
    

    render() {
        const { auth, product } = this.props
        
        if (!auth.uid) return <Redirect to='/signin' />
        if (product) {      
        return  (
        <div>
        <Navbar />
        <br></br><br></br>
        <h5 className="font-italic">Update product</h5><br></br>
                <div  className="row justify-content-center">
                    <div className="col-sm-4">
                        <form onSubmit={this.handleSubmit}>
                            
                            <input type="text" id="productNumber" className="form-control  form-control-bg" placeholder="Product No." defaultValue={product.productNumber}   required onChange={this.handleChange} ></input><br></br>

                            <input type="text" id="productName" className="form-control  form-control-bg" placeholder="Product Name" defaultValue={product.productName}   required onChange={this.handleChange} ></input><br></br>

                            <input type="text" id="productBrand" className="form-control  form-control-bg" placeholder="Product Brand" defaultValue={product.productBrand} required onChange={this.handleChange}/><br></br>

                            <input type="text" id="productColor" className="form-control  form-control-bg" placeholder="Product Color" defaultValue={product.productColor} required onChange={this.handleChange}/><br></br>

                            <textarea type="text" id="productDesc" className="form-control  form-control-bg" placeholder="Product Description" defaultValue={product.productDesc} required onChange={this.handleChange}/><br></br>

                            <button type="submit" className="btn btn-warning btn-bg  btn-block ">Update</button><br></br>
                        </form> 
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateProduct: (product, key) => dispatch(updateProduct(product, key))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect ([
        { collection: 'products' }
    ])
)(UpdateProduct)
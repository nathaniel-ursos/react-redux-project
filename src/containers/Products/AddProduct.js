import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Dashboard/Navbar/Navbar';
import { addProduct } from '../../store/actions/productActions';
import { Redirect } from 'react-router-dom'


// import './CounterOutput.css';

class AddProduct extends Component {
    state = {
        productNumber:'',
        productName:'',
        productBrand:'',
        productColor:'',
        productDesc: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
           
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state);
        
        this.props.addProduct(this.state);
        this.props.history.push('/product-lists')

        }
    

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' />
    return <div>
        <Navbar />
        <br></br><br></br>
        <h5 className="font-italic">Add new product</h5><br></br>
           
                <div  className="row justify-content-center">
                    <div className="col-sm-4">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="productNumber" className="form-control  form-control-bg" placeholder="Product No." required onChange={this.handleChange}/><br></br>

                            <input type="text" id="productName" className="form-control  form-control-bg" placeholder="Product Name" required onChange={this.handleChange}/><br></br>

                            <input type="text" id="productBrand" className="form-control  form-control-bg" placeholder="Product Brand" required onChange={this.handleChange}/><br></br>

                            <input type="text" id="productColor" className="form-control  form-control-bg" placeholder="Product Color" required onChange={this.handleChange}/><br></br>

                            <textarea type="text" id="productDesc" className="form-control  form-control-bg" placeholder="Product Description" required onChange={this.handleChange}/><br></br>

                            <button type="submit" className="btn btn-warning btn-bg  btn-block ">Add</button><br></br>
                        </form> 
                    </div>
                </div>   
        </div>   
    }
  }

  const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      addProduct: (product) => dispatch(addProduct(product))
    }
  
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);



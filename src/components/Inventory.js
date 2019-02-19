import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from '../containers/Dashboard/Dashboard';
import Signin from '../containers/Signin/Signin';
import Signup from '../containers/Signup/Signup';
import UserProfile from '../containers/Profile/UserProfile';
import UpdateProfile from '../containers/Profile/UpdateProfile';
import AddProduct from '../containers/Products/AddProduct';
import UpdateProduct from '../containers/Products/UpdateProduct';
import ProductDetails from '../containers/Products/ProductDetails';
import ProductLists from '../containers/Products/ProductList';

//import * as actionTypes from '../../constant/actions';


class Inventory extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/product/:id" component={ProductDetails} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup"  component={Signup} />
                    <Route path="/profile"  component={UserProfile} />
                    <Route path="/update-profile"  component={UpdateProfile} />
                    <Route path="/product-lists"  component={ProductLists} />
                    <Route path="/add-product"  component={AddProduct} />
                    <Route path="/update-product/:id"  component={UpdateProduct} />
                </Switch>
            </div>
        );
    }
}





export default Inventory;
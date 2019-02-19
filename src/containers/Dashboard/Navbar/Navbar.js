import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/signinActions'


const Navbar = (props) => {

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <NavLink className="navbar-brand text-white"  to="">Dashboard</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item ">
                        <NavLink className="nav-link text-warning font-weight-light" to="/product-lists">Product Lists</NavLink>
                    </li>&nbsp;&nbsp;
                    <li className="nav-item ">
                        <NavLink className="nav-link text-warning font-weight-light" to="/add-product">Add Product</NavLink>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
            <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
               {props.user.firstName}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <NavLink to="/profile" className="dropdown-item ">Profile</NavLink>
                <span className="no-underline"  onClick={props.signOut}><button  className="dropdown-item text-danger" type="button">Logout</button></span>
            </div>
            </div>
            </div>
        </nav>

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        user: state.firebase.profile
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
  


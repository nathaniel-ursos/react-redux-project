import React from 'react'
import Navbar from '../Dashboard/Navbar/Navbar'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

const UserProfile = (props) => {
    const { user, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (user) {
        return (
        <div>
        <Navbar />
        <br></br><br></br>
         <h5 className="font-italic">User Information</h5><br></br>
             <div className="container">
                 <div className="col-5 mx-auto">
                     <ul className="list-group ">
                         <li className="list-group-item text-left ">First Name: &nbsp;&nbsp;&nbsp;<label>{user.firstName}</label></li>
                         <li className="list-group-item text-left ">Last Name: &nbsp;&nbsp;&nbsp;<label>{user.lastName}</label></li>
                     </ul><br></br>
                     <Link className="badge-pill badge-success" to="/update-profile" >Update</Link>
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

const mapStateToProps = (state) => {
    
    
    return {
        user: state.firebase.profile,
        auth: state.firebase.auth
    }
  
  }

export default connect(mapStateToProps)(UserProfile)
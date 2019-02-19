import React, { Component } from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Navbar from '../Dashboard/Navbar/Navbar'
import { Redirect } from 'react-router-dom'
import { updateProfile } from '../../store/actions/profileActions';


// import './CounterOutput.css';

class UpdateProfile extends Component {
      constructor(props) {
        super(props);

       if(props.user) {
        this.state = {
            ...this.state,
            firstName: props.user.firstName,
            lastName: props.user.lastName,
          };}
      }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
           
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateProfile(this.state, this.props.auth.uid);
        this.props.history.push('/profile');
        }
    

    render() {
        const { auth, user } = this.props
        
        if (!auth.uid) return <Redirect to='/signin' />
          
        return  (
        <div>
        <Navbar />
        <br></br><br></br>
        <h5 className="font-italic">Update Profile</h5><br></br>
                <div  className="row justify-content-center">
                    <div className="col-sm-4">
                        <form onSubmit={this.handleSubmit}>
                            
                            <input type="text" id="firstName" className="form-control  form-control-bg" placeholder="First Name" defaultValue={user.firstName}   required onChange={this.handleChange} ></input><br></br>

                            <input type="text" id="lastName" className="form-control  form-control-bg" placeholder="Last Name" defaultValue={user.lastName}   required onChange={this.handleChange} ></input><br></br>

                            <button type="submit" className="btn btn-warning btn-bg  btn-block ">Update</button><br></br>
                        </form> 
                    </div>
                </div>   
        </div> 
            )
 
    }
  }

  const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        user: state.firebase.profile
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (user, key) => dispatch(updateProfile(user, key))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect ([
        { collection: 'users' }
    ])
)(UpdateProfile)
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/signinActions';
import { Redirect } from 'react-router-dom'


// import './CounterOutput.css';

class Signin extends Component {
    state = {
        email:'',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signIn(this.state)
        }
    

    render() {
        const { signinError, auth} = this.props;
        if (auth.uid) return <Redirect to='/' />
        console.log(auth);
        return <div  className="container ">
            <br></br><br></br>
            <h2>User Login</h2><br></br>
            
                    <div  className="row justify-content-center">
                        <div className="col-sm-4">
                            <form onSubmit={this.handleSubmit}>
                                <div className="alert-danger">
                                    { signinError ? <p>{signinError}</p> : null }
                                </div>
                                <input type="text" id="email" className="form-control  form-control-bg" placeholder="Email" required onChange={this.handleChange}/><br></br>

                                <input type="password" id="password" className="form-control  form-control-bg" placeholder="Password" required onChange={this.handleChange}/><br></br>

                                <button type="submit" className="btn btn-warning btn-bg  btn-block ">Login</button><br></br>

                                <p className="form-control-sm text-secondary">Not registered?&nbsp; <Link className="text-warning" to="/signup">Create an Account</Link></p>

                            </form> 
                        </div>
                    </div>
            
            </div>   
    }
  }

  const mapStateToProps = (state) => {
    return {
        signinError: state.auth.signinError,
        auth: state.firebase.auth
    }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)


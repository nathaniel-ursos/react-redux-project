import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/signupActions'


// import './CounterOutput.css';

class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signUp(this.state)
        }
    

    render() {
        const { auth, signupError } = this.props;
        if (auth.uid) return <Redirect to='/' />
    return <div  className="container">
    <br></br><br></br><h2>Registration</h2>
            <form onSubmit={this.handleSubmit}>

                <div  className="row justify-content-center">
                    <div className="col-sm-2">
                        <p className="form-control-sm"> </p>
                
                        <input type="text" id="firstName" className="form-control  form-control-bg" placeholder="First name" onChange={this.handleChange}/>
                    </div>
                    <div className="col-sm-2 ">
                        <p className="form-control-sm"> </p>
                        <input type="text" id="lastName" className="form-control  form-control-bg" placeholder="Last name" onChange={this.handleChange}/><br></br>
                    </div>
                </div>

                <div  className="row justify-content-center">
                    <div className="col-sm-4">
        
                        <input type="text" id="email" className="form-control  form-control-bg" placeholder="Email" onChange={this.handleChange}/><br></br>

                        <input type="password" id="password" className="form-control  form-control-bg" placeholder="Password" onChange={this.handleChange}/><br></br>

                        <button type="submit" className="btn btn-warning btn-bg  btn-block" >Submit</button><br></br>
                        
                        <p className="form-control-sm text-secondary">Already have an account?&nbsp; <Link className="text-warning" to="/signin">Sign in</Link></p>

                        <div className="alert-danger">
                            { signupError ? <p>{signupError}</p> : null }
                        </div>
                    </div>
                </div>    
            </form>
    </div>

    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        signupError: state.signup.signupError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
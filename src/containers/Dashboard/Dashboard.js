import React, { Component } from 'react'

import Navbar from './Navbar/Navbar';
import Notifications from './Notifications/Notifications';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


 class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
          <div className="col-6 ml-auto">
          <br></br><br></br><br></br><br></br><br></br><br></br><h1>This is Dashboard</h1>
            </div>
            <div className="col-6 ml-auto">
              <Notifications />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }

}

export default connect(mapStateToProps)(Dashboard)

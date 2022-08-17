import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddressForm from '../Account/AddressForm';

class Register extends Component {
    constructor() {
      super()
      this.state = {
         
      }
    }
  render() {
    return (
      <div>
        <h2>Create an Account</h2>
        <AddressForm />
        <button>Create Account!</button>
      </div>
    )
  }
}

const mapDispatch = (dispatch)=> {
    return {
        
    };
};

export default connect(null, mapDispatch)(Register)
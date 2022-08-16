import React, { Component } from 'react'
import { connect } from 'react-redux';

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
        <form onSubmit={ onSubmit }>
            <input name='username' onChange={ onChange } value={ username }/>
            <input type='password' name='password' value={ password } onChange={ onChange }/>
            <input placeholder='First Name' name='firstName' required='required' value={ firstName } onChange={ onChange }/>
            <input placeholder='Last Name' name='lastName' required='required' value={ lastName } onChange={ onChange }/>
            <input placeholder='Email address' name='email' required='required' value={ email } onChange={ onChange }/>
            <input placeholder='Street address' name='' required='required' value={  } onChange={ onChange }/>
            <input placeholder='Street address optional' name='' value={  } onChange={ onChange }/>
            <input placeholder='City' name='' required='required' value={  } onChange={ onChange }/>
            <input placeholder='State' name='' required='required' value={  } onChange={ onChange }/>
            <input placeholder='Zip Code' name='' required='required' value={  } onChange={ onChange }/>
            <button>Create Account!</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch)=> {
    return {
        login: (credentials)=> {
            dispatch(login(credentials));
        }
    };
};

export default connect(null, mapDispatch)(Register)
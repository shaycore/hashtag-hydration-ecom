import React, { Component } from 'react'
import { connect } from 'react-redux';

class AddressForm extends Component {
    constructor() {
      super()
      this.state = {
         
      }
    }
  render() {
    return (
      <div>
        <h2>Please enter your address in the fields below:</h2>
        <form onSubmit={ onSubmit }>
            <input name='username' onChange={ onChange } value={ username }/>
            <input type='password' name='password' value={ password } onChange={ onChange }/>
            <input placeholder='First Name' name='firstName' required='required' value={ firstName } onChange={ onChange }/>
            <input placeholder='Last Name' name='lastName' required='required' value={ lastName } onChange={ onChange }/>
            <input placeholder='Email address' name='email' required='required' value={ email } onChange={ onChange }/>
            <input placeholder='Address' name='addressLine1' required='required' value={ addressLine1 } onChange={ onChange }/>
            <input placeholder='Apt, Suite, PO Box (optional)' name='addressLine2' value={ addressLine2 } onChange={ onChange }/>
            <input placeholder='City' name='city' required='required' value={ city } onChange={ onChange }/>
            <input placeholder='State' name='state' required='required' value={ state } onChange={ onChange }/>
            <input placeholder='Postal Code' name='zipCode' required='required' value={ zipCode } onChange={ onChange }/>
            <input placeholder='Country' name='country' required='required' value={ country } onChange={ onChange }/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch)=> {
    return {
        
    };
};

export default connect(null, mapDispatch)(AddressForm)
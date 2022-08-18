import React, { Component } from 'react'
import { connect } from 'react-redux';

class AddressForm extends Component {
    constructor() {
      super()
      this.state = {
        // firstName: this.props.user ? this.props.user.firstName : "",
        // lastName: this.props.user ? this.props.user.lastName : "",
        // address: this.props.user ? this.props.user.address : "",
        // city: this.props.user ? this.props.user.city : "",
        // state: this.props.user ? this.props.user.state : "",
        // zipCode: this.props.user ? this.props.user.zipCode : "",
      }
    }
  render() {
    const { firstName, lastName, address, city, state, zipCode } = this.state;
    return (
      <div>
        <h2>Please enter your address in the fields below:</h2>
        <form>
            <input placeholder='First Name' name='firstName' required value={ firstName } />
            <input placeholder='Last Name' name='lastName' required value={ lastName } />
            <input placeholder='Address' name='address' required value={ address } />
            <input placeholder='City' name='city' required value={ city } />
            <input placeholder='State' name='state' required value={ state } />
            <input placeholder='Postal Code' name='zipCode' required value={ zipCode } />
            <button>Save</button>
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
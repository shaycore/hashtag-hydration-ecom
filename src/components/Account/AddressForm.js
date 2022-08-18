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
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev){
    this.setState({ [ev.target.name]: ev.target.value });
  }
  onSubmit(ev){
    ev.preventDefault();
    this.props.login(this.state);
  }
  render() {
    const { onChange, onSubmit } = this;
    const { firstName, lastName, address, city, state, zipCode } = this.state;
    return (
      <div>
        <h2>Please enter your address in the fields below:</h2>
        <form onSubmit={ onSubmit }>
            <input placeholder='First Name' name='firstName' required value={ firstName } onChange={ onChange }/>
            <input placeholder='Last Name' name='lastName' required value={ lastName } onChange={ onChange }/>
            <input placeholder='Address' name='address' required value={ address } onChange={ onChange }/>
            <input placeholder='City' name='city' required value={ city } onChange={ onChange }/>
            <input placeholder='State' name='state' required value={ state } onChange={ onChange }/>
            <input placeholder='Postal Code' name='zipCode' required value={ zipCode } onChange={ onChange }/>
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
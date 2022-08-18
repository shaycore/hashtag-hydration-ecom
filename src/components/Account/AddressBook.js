import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddressForm from './AddressForm';

 class UserAddressBook extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h2>UserAddressBook</h2>
        <div><AddressForm /></div>
      </div>
    )
  }
}

export default connect()(UserAddressBook)
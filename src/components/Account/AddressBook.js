import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddressForm from './AddressForm';
import { fetchAddresses } from '../../store/addressStore';

class UserAddressBook extends Component {
  componentDidMount(){
    this.props.fetchAddresses();
  }
  componentDidUpdate(prevProps){

  }

  render() {
    // const { addresses, auth } = this.props;
    // console.log(addresses);
    // const userAddresses = addresses.filter(address => address.userId === auth.id);
    return (
      <div>
        <h2>Your Address Book has () addresses</h2>
        <div><AddressForm /></div>
      </div>
    )
  }
};

const mapDispatch = (dispatch)=> {
    return {
        fetchAddresses: ()=> dispatch(fetchAddresses()),
    };
};
const mapStateToProps = (state)=> {
    return state;
};

export default connect(mapStateToProps, mapDispatch)(UserAddressBook)
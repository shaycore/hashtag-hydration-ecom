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
        <div className="container-fluid bg-secondary mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center" >
              <h1 className="font-weight-semi-bold text-uppercase mb-3">Address Book</h1>
              <div className="d-inline-flex">
                  <p className="m-0 px-2">-</p>
                  <p className="m-0">Address Book</p>
              </div>
          </div>
      </div> 
        <h3 className="font-weight-semi-bold">Your Address Book has () addresses</h3>
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
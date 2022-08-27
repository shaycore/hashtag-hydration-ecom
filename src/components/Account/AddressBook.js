import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAddress, fetchAddresses } from "../../store";

class AddressBook extends React.Component{
    constructor() {
        super();
        this.state= {
        };
        this.deleteAddress = this.deleteAddress.bind(this);
    }
    componentDidMount(){
        this.props.fetchAddresses();
    }
    componentDidUpdate(){
    }
    deleteAddress(address) {
      this.props.deleteAddress(address);
    }
    render() {
      const { addresses, auth } = this.props;
      const userAddresses = addresses.filter(address => address.userId === auth.id)
      const { deleteAddress } = this;
      return (
        <div>
            <div className="container-fluid bg-secondary mb-5">
                  <div className="d-flex flex-column align-items-center justify-content-center" >
                      <h1 className="font-weight-semi-bold text-uppercase mb-3">Address Book</h1>
                      <div className="d-inline-flex">
                          <p className="m-0 px-2">-</p>
                          <p className="m-0">Saved Addresses</p>
                      </div>
                  </div>
              </div>
            <div className='text-center'>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {
                    userAddresses.map( address => {
                        return (
                            <li key={ address.id } className='mb-5'>
                              <p className='mb-0'>
                                { address.firstName } { address.lastName }<br />
                                { address.address }<br />
                                { address.city }, { address.state } { address.zipCode }<br />
                                { address.country }
                              </p>
                              <Link to='/account/addressbook/edit' style={{ textDecoration: 'none'}} id='editLink'>Edit</Link>
                              <button onClick={ () => deleteAddress(address) } id='deleteButton' style={{ border: 'none' }}>Delete</button>
                            </li>
                        )
                    })
                  }
                </ul>
                <Link to='/account/addressbook/new'><button className="btn btn-primary py-2 px-4">Add New Address</button></Link>
            </div>
        </div>
      )
    }
}

const mapStateToProps = ({ addresses, auth }) => {
    return { addresses, auth };
};

const mapDispatch = (dispatch)=> {
    return {
        fetchAddresses: () => dispatch(fetchAddresses()),
        deleteAddress: (address) => dispatch(deleteAddress(address))
    };
};


export default connect(mapStateToProps, mapDispatch)(AddressBook);
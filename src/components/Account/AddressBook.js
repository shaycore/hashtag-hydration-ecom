import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAddresses, } from "../../store";
import axios from 'axios';

class AddressBook extends React.Component{
    constructor() {
        super();
        this.state= {
        };
    }
    componentDidMount(){
        this.props.fetchAddresses();
    }
    componentDidUpdate(){
    }
    render() {
      const { addresses, auth } = this.props;
      const userAddresses = addresses.filter(address => address.userId === auth.id)

      return (
        <div>
          <h3>Saved Addresses</h3>
          <ul>
              {
                userAddresses.map( address => {
                    return (
                        <li key={ address.id }>
                          <p>
                            { address.firstName } { address.lastName }<br />
                            { address.address }<br />
                            { address.city }, { address.state } { address.zipCode }<br />
                            { address.country }
                          </p>
                          <Link to='/account/addressbook/edit'>Edit</Link>
                          <button id='deleteButton' style={{ border: 'none'}}>Delete</button>
                        </li>
                    )
                })
              }
          </ul>
          <Link to='/account/addressbook/new'><button>Add New Address</button></Link>
        </div>
      )
    }
}

const mapStateToProps = ({ addresses, auth }) => {
    return { addresses, auth };
};

const mapDispatch = (dispatch)=> {
    return {
        fetchAddresses: ()=> dispatch(fetchAddresses()),
    };
};


export default connect(mapStateToProps, mapDispatch)(AddressBook);
  
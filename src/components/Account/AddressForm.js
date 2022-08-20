import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createAddress } from '../../store/addressReducer';

class AddressForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // componentDidMount(){
  //   this.setState({ 
  //     firstName: this.props.address.firstName,
  //     lastName: this.props.address.lastName,
  //     address: this.props.address.address,
  //     city: this.props.address.city,
  //     state: this.props.address.state,
  //     zipCode: this.props.address.zipCode,
  //   });
  // }
  // componentDidUpdate(prevProps){
  //   if(!prevProps.address.id && this.props.address.id){
  //     this.setState({ 
  //       firstName: this.props.address.firstName,
  //       lastName: this.props.address.lastName,
  //       address: this.props.address.address,
  //       city: this.props.address.city,
  //       state: this.props.address.state,
  //       zipCode: this.props.address.zipCode,
  //     });
  //   }
  // }
  //async save(ev){
  //   ev.preventDefault();
  //   const updatedaddress = { 
  //     firstName: this.props.address.firstName,
  //     lastName: this.props.address.lastName,
  //     address: this.props.address.address,
  //     city: this.props.address.city,
  //     state: this.props.address.state,
  //     zipCode: this.props.address.zipCode,
  //   };
  //   console.log(updatedaddress)
  //   try {
  //     await this.props.update(updatedAddress);
  //   }
  //   catch(err){
  //     this.setState({ error: err.response.data });
  //   }
  // }
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
            <input placeholder='First Name' name='firstName' required value={ firstName } onChange={ ev => this.setState({ firstName: ev.target.value })}/>
            <input placeholder='Last Name' name='lastName' required value={ lastName } onChange={ ev => this.setState({ lastName: ev.target.value })}/>
            <input placeholder='Address' name='address' required value={ address } onChange={ ev => this.setState({ address: ev.target.value })}/>
            <input placeholder='City' name='city' required value={ city } onChange={ ev => this.setState({ city: ev.target.value })}/>
            <input placeholder='State' name='state' required value={ state } onChange={ ev => this.setState({ state: ev.target.value })}/>
            <input placeholder='Postal Code' name='zipCode' required value={ zipCode } onChange={ ev => this.setState({ zipCode: ev.target.value })}/>
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
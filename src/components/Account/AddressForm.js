import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createAddress } from '../../store/addressStore'

class AddressForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
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
  async save(ev){
    ev.preventDefault();
    const updatedaddress = { 
      firstName: this.props.address.firstName,
      lastName: this.props.address.lastName,
      address: this.props.address.address,
      city: this.props.address.city,
      state: this.props.address.state,
      zipCode: this.props.address.zipCode,
    };
    console.log(updatedaddress)
    try {
      await this.props.update(updatedaddress);
    }
    catch(err){
      this.setState({ error: err.response.data });
    }
  }
  onChange(ev){
    this.setState({ [ev.target.name]: ev.target.value });
  }
  async onSubmit(ev){
    ev.preventDefault();
    await this.props.createAddress({ ...this.state });
  }
  render() {
    const { onChange, onSubmit } = this;
    const { firstName, lastName, address, city, state, zipCode } = this.state;
    return (
      <div>
        <h2>Please enter your address in the fields below:</h2>
        <form onSubmit={ onSubmit }>
            <input 
              required
              placeholder='First Name' 
              name='firstName'  
              value={ firstName } 
              onChange={ onChange }
              //onChange={ ev => this.setState({ firstName: ev.target.value })}/>
            />
            <input 
              required
              placeholder='Last Name' 
              name='lastName'  
              value={ lastName } 
              onChange={ onChange }
            />
            <input 
              required
              placeholder='Address' 
              name='address'  
              value={ address } 
              onChange={ onChange }
            />
            <input 
              required
              placeholder='City' 
              name='city'  
              value={ city } 
              onChange={ onChange }
            />
            <input 
              required
              placeholder='State' 
              name='state'  
              value={ state } 
              onChange={ onChange }
            />
            <input 
              required
              placeholder='Postal Code' 
              name='zipCode'  
              value={ zipCode } 
              onChange={ onChange }
            />
            <button>Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => state;

const mapDispatch = (dispatch)=> {
    return {
        createAddress: (address) => {
          dispatch(createAddress(address))
        }
    };
};

export default connect(mapStateToProps, mapDispatch)(AddressForm)
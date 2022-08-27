import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAddress } from '../../store';
import { Link } from 'react-router-dom';

class AddressForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: ''
        }
        this.save = this.save.bind(this);
    }
    save(ev) {
        ev.preventDefault();
        const newAddress = {
            userId: this.props.auth.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            country: this.state.country
        };
        this.props.createAddress(newAddress);
    }
    render() {
        const { firstName, lastName, address, city, state, zipCode, country } = this.state;
        const { save } = this;
        return (
            <div className='mt-5' style={{ maxWidth: '800px', width: '50%', dislay: 'block', margin: '0 auto' }}>
                <h4 className='text-center'>Add an Address</h4>
                <form onSubmit={ save }>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>First Name</p>
                        <input className="form-control" value={ firstName } onChange={ ev => this.setState({ firstName: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Last Name</p>
                        <input className="form-control" value={ lastName } onChange={ ev => this.setState({ lastName: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Street Address</p>
                        <input className="form-control" value={ address } onChange={ ev => this.setState({ address: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>City</p>
                        <input className="form-control" value={ city } onChange={ ev => this.setState({ city: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>State</p>
                        <input className="form-control" value={ state } onChange={ ev => this.setState({ state: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Zip Code</p>
                        <input className="form-control" value={ zipCode } onChange={ ev => this.setState({ zipCode: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Country</p>
                        <input className="form-control" value={ country } onChange={ ev => this.setState({ country: ev.target.value })}></input><br />
                    </div>
                    <div className='text-center'>
                        <Link to='/account/addressbook'><button className="btn btn-primary py-2 px-4 mr-5" >Cancel</button></Link>
                        <button className="btn btn-primary py-2 px-4 ml-5" disabled={ !firstName || !lastName || !address || !city || !state || !zipCode || !country}>Save</button>
                    </div>
                </form>
            </div>

        )
    }
};

const mapDispatchToProps = (dispatch, { history }) => {
    return {
        createAddress: (address) => dispatch(createAddress(address, history))
    }
}

export default connect(state => state, mapDispatchToProps)(AddressForm);

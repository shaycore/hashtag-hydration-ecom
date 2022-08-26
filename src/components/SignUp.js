import React, { Component } from 'react';
import { login, createUser } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignUp extends Component{
  constructor(){
    super();
    this.state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev){
    this.setState({ [ev.target.name]: ev.target.value });
  }
  onSubmit(ev){
    ev.preventDefault();
    const newUser = {
        ...this.state,
        isGuest: false,
        isAdmin: false,
        avatar: '',

    };
    this.props.signUp(newUser);
  }
  render(){
    const { onChange, onSubmit } = this;
    const { username, password, firstName, lastName, email } = this.state;
    return (
      <div className='container-fluid pt-5'>
      <div className='text-center mb-4'>
        <h2 className='section-title px-5'>
          <span className='px-2'>Sign Up</span>
        </h2>
      </div>
      <div className='row px-xl-5 text-center '>
        <div className='col-lg mb-5'>
          <div className='contact-form'>
            <form onSubmit={ onSubmit }>
              <p style={{ marginBottom: '0.5rem' }}>Username</p>
              <div className='control-group'>
                <input className='form-control' style={{ maxWidth: '300px', width: '30%', dislay: 'block', margin: '0 auto' }} name='username' onChange={ onChange } value={ username }/>
                <p className='help-block text-danger'></p>
              </div>
              <p style={{ marginBottom: '0.5rem' }}>Password</p>
              <div className='control-group'>
                <input className='form-control' style={{ maxWidth: '300px', width: '30%', dislay: 'block', margin: '0 auto' }} type='password' name='password' value={ password } onChange={ onChange }/>
                <p className='help-block text-danger'></p>
              </div>
              <p style={{ marginBottom: '0.5rem' }}>First Name</p>
              <div className='control-group'>
                <input className='form-control' style={{ maxWidth: '300px', width: '30%', dislay: 'block', margin: '0 auto' }} name='firstName' onChange={ onChange } value={ firstName }/>
                <p className='help-block text-danger'></p>
              </div>
              <p style={{ marginBottom: '0.5rem' }}>Last Name</p>
              <div className='control-group'>
                <input className='form-control' style={{ maxWidth: '300px', width: '30%', dislay: 'block', margin: '0 auto' }} name='lastName' onChange={ onChange } value={ lastName }/>
                <p className='help-block text-danger'></p>
              </div>
              <p style={{ marginBottom: '0.5rem' }}>Email</p>
              <div className='control-group mb-4'>
                <input className='form-control' style={{ maxWidth: '300px', width: '30%', dislay: 'block', margin: '0 auto' }} name='email' onChange={ onChange } value={ email }/>
                <p className='help-block text-danger'></p>
              </div>
              <button className="btn btn-primary py-2 px-4">Sign Up</button>
              <br/>
            </form>
          </div>
          <div className='text-center'>
            <p className='section-title px-5'>
              <span className='px-2'>or</span>
            </p>
          </div>
          <a href='/api/sessions/github'><button className="btn btn-primary py-2 px-4 mb-4">Continue with Github</button></a>
          <p>Already on HashTag Hydration? <Link to='/signin'>Login</Link></p>
        </div>
      </div>
    </div>
    );
  }
}

const mapDispatch = (dispatch, ownProps)=> {
  const { history } = ownProps;
  return {
    signUp: async(newUser) => {
      const credentials = {
        username: newUser.username,
        password: newUser.password
      }
      await dispatch(createUser(newUser)),
      await dispatch(login(credentials, history));
    }
  };
};

export default connect(null, mapDispatch)(SignUp);

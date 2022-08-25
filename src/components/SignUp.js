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
      <div>
        <form onSubmit={ onSubmit }>
            <p>Username</p>
            <input name='username' onChange={ onChange } value={ username }/>
            <p>Password</p>
            <input type='password' name='password' onChange={ onChange } value={ password }/>
            <p>First Name</p>
            <input name='firstName' onChange={ onChange } value={ firstName }/>
            <p>Last Name</p>
            <input name='lastName' onChange={ onChange } value={ lastName }/>
            <p>Email</p>
            <input name='email' onChange={ onChange } value={ email }/><br />
            <button className="btn btn-primary px-3">Sign Up</button>
        </form>
        <p>----------------or----------------</p>
        <a href='/api/sessions/github'><button className="btn btn-primary px-3">Continue with Github</button></a>
        <p>Already on HashTag Hydration? <Link to='/signin'>Login</Link></p>
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

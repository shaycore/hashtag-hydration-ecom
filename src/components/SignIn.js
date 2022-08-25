import React, { Component } from 'react';
import { login } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignIn extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev){
    this.setState({ [ev.target.name]: ev.target.value });
  }
  onSubmit(ev){
    ev.preventDefault();
    this.props.login(this.state);
  }
  render(){
    const { onChange, onSubmit } = this;
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={ onSubmit }>
          <p>Username</p>
          <input name='username' onChange={ onChange } value={ username }/>
          <p>Password</p>
          <input type='password' name='password' value={ password } onChange={ onChange }/>
          <br />
          <button className="btn btn-primary px-3">Login</button>
          <br/>
        </form>
        <p>--------or--------</p>
        <a href='/api/sessions/github'><button className="btn btn-primary px-3">Continue with Github</button></a>
        <p>Not on HashTag Hydration yet? <Link to='/signup'>Sign up</Link></p>
      </div>
    );
  }
}

const mapDispatch = (dispatch, ownProps)=> {
  const { history } = ownProps;
  return {
    login: (credentials)=> {
      dispatch(login(credentials, history));
    }
  };
};

export default connect(null, mapDispatch)(SignIn);

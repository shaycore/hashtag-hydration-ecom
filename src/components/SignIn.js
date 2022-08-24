import React, { Component } from 'react';
import { login } from '../store';
import { connect } from 'react-redux';

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
          <input name='username' onChange={ onChange } value={ username }/><br />
          <p>Password</p>
          <input type='password' name='password' value={ password } onChange={ onChange }/><br />
          <button>Login</button>
        </form>
        <a href='/api/sessions/github'><button>Login with Github</button></a>
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

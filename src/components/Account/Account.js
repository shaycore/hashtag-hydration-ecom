import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, logout } from '../../store/auth';
import { Link, Route, HashRouter as Router } from 'react-router-dom';


class Account extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            avatar: ''
        }
        this.save = this.save.bind(this);
    }
    componentDidMount() {
        this.setState({
            firstName: this.props.auth.firstName,
            lastName: this.props.auth.lastName,
            email: this.props.auth.email,
            avatar: this.props.auth.avatar
        })
        this.el.addEventListener('change', ev => {
            const file = ev.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                this.setState({ avatar: reader.result });
            })
            reader.readAsDataURL(file);
        })
    }
    componentDidUpdate(prevProps) {
        if(!prevProps.auth.id && this.props.auth.id) {
            this.setState({
                firstName: this.props.auth.firstName,
                lastName: this.props.auth.lastName,
                email: this.props.auth.email,
                avatar: this.props.auth.avatar
            })
        }
    }
    save(ev) {
        ev.preventDefault();
        const user = {
            id: this.props.auth.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            avatar: this.state.avatar
        }
        this.props.update(user);
    }
    render() {
        const { firstName, lastName, email, avatar } = this.state;
        const { save } = this;
        const { logout } = this.props;
        return (
            <div>
                <h3>Account Details</h3>
                <Link to={'/account/orderhistory'}>View Past Orders</Link>
                <form onSubmit={ save }>
                    <p>Profile Picture</p>
                    <img src={ avatar } style={{ height: 150, width: 150 }} /><br />
                    <input type='file' ref={ el => this.el = el }/>
                    <Link to='/account/addressbook'>Address book</Link>
                    <p>First Name</p>
                    <input value={ firstName || '' } onChange={ ev => this.setState({ firstName: ev.target.value })}></input>
                    <p>Last Name</p>
                    <input value={ lastName || ''} onChange={ ev => this.setState({ lastName: ev.target.value })}></input>
                    <p>Email Address</p>
                    <input value={ email || ''} onChange={ ev => this.setState({ email: ev.target.value })}></input><br />
                    <button className="btn btn-primary px-3">Save Changes</button>
                </form>
                <button className="btn btn-primary px-3" onClick={ logout }>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch, { history }) => {
    return {
        update: (user) => dispatch(updateUser(user)),
        logout: ()=> dispatch(logout(history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
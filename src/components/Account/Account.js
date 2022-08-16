import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../store/users'

class Account extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
        this.save = this.save.bind(this);
    }
    componentDidMount() {
        this.setState({
            firstName: this.props.auth.firstName,
            lastName: this.props.auth.lastName,
            email: this.props.auth.email
        })
    }
    componentDidUpdate(prevProps) {
        if(!prevProps.auth.id && this.props.auth.id) {
            this.setState({
                firstName: this.props.auth.firstName,
                lastName: this.props.auth.lastName,
                email: this.props.auth.email
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
            isGuest: false,
            isAdmin: false
        }
        console.log(user)
        this.props.update(user);
    }
    render() {
        const { firstName, lastName, email } = this.state;
        const { save } = this;
        return (
            <div>
                <h3>Account Details</h3>
                <form onSubmit={ save }>
                    <p>First Name</p>
                    <input value={ firstName || '' } onChange={ ev => this.setState({ firstName: ev.target.value })}></input>
                    <p>Last Name</p>
                    <input value={ lastName || ''} onChange={ ev => this.setState({ lastName: ev.target.value })}></input>
                    <p>Email Address</p>
                    <input value={ email || ''} onChange={ ev => this.setState({ email: ev.target.value })}></input>
                    <button>Save Changes</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        update: (user) => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
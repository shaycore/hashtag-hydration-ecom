import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser } from '../../store';

class _User extends Component {
    constructor(){
        super();
        this.state = {
            user: {}
        };
        this.destroy = this.destroy.bind(this);
    }
    componentDidMount(){
        this.props.fetchUsers();
        this.setState({
            user: this.props.user
        })
    }
    componentDidUpdate(prevProps){
        if(!prevProps.user.id && this.props.user.id) {
            this.setState({
                user: this.props.user
            })
        }
    }
    destroy(ev) {
        this.props.destroy(this.props.user)
    }
    render(){
        const { user } = this.state;
        const { destroy } = this;
        return (
            <div>
                <Link to={'/admin/users/'}>Return to All Users</Link>
                <ul id='user'>
                    { user.avatar && <img src={ user.avatar } alt='User Image' style={{ height: 150, width: 150 }} /> }<br />
                    First Name: { user.firstName } <br />
                    Last Name: { user.lastName } <br />
                    Email: { user.email } <br />
                    Username: { user.username } <br />
                    Created At: { user.createdAt } <br />
                    <button onClick={ destroy } className="btn btn-primary px-3">Delete</button>
                </ul>
            </div>
        );
    }
}

const mapState = ({ users }, ownProps) => {
    const id = ownProps.match.params.id;
    const user = users.find( user => user.id === id*1) || {};
    return {
        user
    };
};

const mapDispatch = (dispatch, { history }) => {
    return {
        fetchUsers: ()=> dispatch(fetchUsers()),
        destroy: (user) => dispatch(deleteUser(user, history))
    };
};

const User = connect(mapState, mapDispatch)(_User);

export default User;
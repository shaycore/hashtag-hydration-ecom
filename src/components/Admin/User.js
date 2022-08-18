import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class _User extends Component {
    constructor(){
        super();
        this.state = {
            user: {}
        };
    }
    componentDidMount(){
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
    render(){
        const { user } = this.state;
        return (
            <div id='user'>
                <Link to={'/admin/users/'}>Return to All Users</Link>
                <br />
                <img src={ user.avatar } alt='User Image' /><br />
                First: { user.firstName } <br />
                Last: { user.lastName } <br />
                Email: { user.email } <br />
                Username: { user.username } <br />
                Created At: { user.createdAt }
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

// const mapDispatch = (dispatch, { history, match }) => {
//     return {
//     };
// };

const User = connect(mapState)(_User);

export default User;
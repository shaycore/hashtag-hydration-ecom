import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from "../../store";


class Users extends React.Component{
    componentDidMount(){
        this.props.fetchUsers();
    }
    componentDidUpdate(prevProps){

    }
    render(){
        const { users } = this.props;
        return (
        <div>
            <h1>List of Users ({users.length})</h1>
            <ul id='users'>
                {
                    users.map( user => {
                        return (
                            <li key={ user.id }>
                                <Link to={`/admin/users/${user.id}`}>
                                    { user.fullName } - { user.email}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        );

    }
}
const mapDispatch = (dispatch)=> {
    return {
        fetchUsers: ()=> dispatch(fetchUsers())
    };
};
const mapStateToProps = (state)=> {
    return state;
};

export default connect(mapStateToProps, mapDispatch)(Users);
  
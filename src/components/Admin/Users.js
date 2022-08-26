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
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">
                            List of Users ({users.length})
                        </h1>
                        <div className="d-inline-flex">
                            <p className="m-0">
                                <Link to={'/admin/'}>Return to Admin Main</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="row px-xl-5 justify-content-center">
                        <div className="col-lg-8 table-responsive mb-5">
                            <table className="table table-bordered text-center mb-0">
                                <thead className="bg-secondary text-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Access</th>
                                        <th>View More</th>

                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    {
                                        users.map( user => {
                                            return (
                                                <tr key={ user.id }>
                                                    <td className="align-middle">
                                                        { user.id }
                                                    </td>
                                                    <td className="align-middle">
                                                        { user.fullName }
                                                    </td>
                                                    <td className="align-middle">
                                                        { user.username }
                                                    </td>
                                                    <td className="align-middle">
                                                        { user.email }
                                                    </td>
                                                    <td className="align-middle">
                                                        { (user.isAdmin === false) ? "Customer":"Admin" }
                                                    </td>
                                                    <td className="align-middle">
                                                        <Link to={`/admin/users/${user.id}`}>View More</Link> <br />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
  
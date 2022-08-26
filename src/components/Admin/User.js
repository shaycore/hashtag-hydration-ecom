import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser, fetchOrders } from '../../store';

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
        this.props.fetchOrders();
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
        const { relevantOrders } = this.props;
        const { destroy } = this;
        return (
            <div>
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">
                            Profile of User {user.fullName}
                        </h1>
                        <div className="d-inline-flex">
                            <p className="m-0">
                                <Link to={'/admin/users/'}>Return to Admin Users List</Link>
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
                                        <th>Avatar</th>
                                        <th>Username</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Access</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    <tr key={ user.id }>
                                        <td className="align-middle">
                                            { user.id }
                                        </td>
                                        <td className="align-middle">
                                            { user.avatar && <img src={ user.avatar } alt='User Image' style={{ height: 100, width: 100, borderRadius:"50%" }} /> }
                                        </td>
                                        <td className="align-middle">
                                             { user.username }
                                        </td>
                                        <td className="align-middle">
                                            { user.fullName }
                                        </td>
                                        <td className="align-middle">
                                            { user.email }
                                        </td>
                                        <td className="align-middle">
                                            { (user.isAdmin === false) ? "Customer":"Admin" }
                                        </td>
                                        <td className="align-middle">
                                            <button onClick={ destroy } className="btn btn-primary px-3">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <br />
                            <table className="table table-bordered text-center mb-0">
                                <thead className="bg-secondary text-dark">
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Placed</th>
                                        <th>View Order</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    { relevantOrders ? relevantOrders.map(order => {
                                        var newDate = new Date(order.createdAt).toDateString().toString();
                                        return (
                                            <tr key={ order.id }>
                                                <td className="align-middle">
                                                    Order #{ order.id }
                                                </td>
                                                <td className="align-middle">
                                                    { newDate }
                                                </td>
                                                <td className="align-middle">
                                                    <Link to={`/admin/orders/${order.id}`}>View Order</Link> <br />
                                                </td>
                                            </tr>                                            
                                        )}):""
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

const mapState = ({ users, orders }, ownProps) => {
    const id = ownProps.match.params.id;
    const user = users.find( user => user.id === id*1) || {};
    const relevantOrders = orders.filter(order => order.userId === user.id);
    console.log(relevantOrders);
    return {
        user,
        relevantOrders
    };
};

const mapDispatch = (dispatch, { history }) => {
    return {
        fetchUsers: ()=> dispatch(fetchUsers()),
        fetchOrders: ()=> dispatch(fetchOrders()),
        destroy: (user) => dispatch(deleteUser(user, history))
    };
};

const User = connect(mapState, mapDispatch)(_User);

export default User;
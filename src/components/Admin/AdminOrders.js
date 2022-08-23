import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders, fetchUsers } from "../../store";


class AdminOrders extends React.Component{
    componentDidMount(){
        this.props.fetchOrders();
        this.props.fetchUsers();
    }
    componentDidUpdate(prevProps){

    }
    render(){
        const { orders, users } = this.props;
        return (
        <div>
            <h1>List of Orders ({orders.length})</h1>
            <ul id='orders'>
                {
                    orders.map( order => {
                        const user = users.find(user => user.id === order.userId) || 'Unavailable';
                        return (
                            <li key={ order.id }>
                                <Link to={`/admin/orders/${order.id}`}>Order #{ order.id }</Link> <br />
                                Placed by: <Link to={`/admin/users/${user.id}`}>{ user.fullName }</Link>
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
        fetchOrders: ()=> dispatch(fetchOrders()),
        fetchUsers: ()=> dispatch(fetchUsers())

    };
};
const mapStateToProps = (state)=> {
    return state;
};

export default connect(mapStateToProps, mapDispatch)(AdminOrders);
  
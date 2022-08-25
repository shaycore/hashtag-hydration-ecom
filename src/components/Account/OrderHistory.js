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
        const { orders, auth } = this.props;
        const userOrders = orders.filter(order => order.userId === auth.id);
        return (
        <div>
            <Link to={'/account/'}>Return to Account</Link>
            <br />
            <h1>List of Orders ({userOrders.length})</h1>
            <ul id='orders'>
                {
                    userOrders.map( order => {
                        var newDate = new Date(order.createdAt);

                        return (
                            <li key={ order.id }>
                                <Link to={`/account/orderhistory/${order.id}`}>Order #{ order.id }</Link> <br />
                                Date Placed: { newDate.toString() }
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
  
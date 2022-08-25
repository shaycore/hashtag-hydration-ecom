import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders, fetchUsers, fetchLineItems } from "../../store";
import axios from 'axios';

class AdminOrder extends React.Component{
    constructor() {
        super();
        this.state= {
        };
    }

    componentDidMount(){
        this.props.fetchOrders();
        this.props.fetchUsers();
    }
    componentDidUpdate(prevProps){
    }
    render(){
        const { order, user, products, id } = this.props;
        var newDate = new Date(order.createdAt);

        return (
        <div>
            <Link to={'/admin/orders/'}>Return to All Orders</Link>
            <br />
            <ul id='order'>
                Order #{ order.id } <br />
                Created at: { newDate.toString() } <br />
                Placed by: <Link to={`/admin/users/${user.id}`}>{ user.fullName }</Link>
                { !order.lineItems ? 
                    null : 
                    order.lineItems.map( lineitem => {
                        const product = products.find( product => product.id === lineitem.productId);
                        return (
                            <li key={ lineitem.id }>
                                <Link to={`/admin/products/${product.id}`}>{ product.name }</Link> - qty: { lineitem.quantity } 
                            </li>
                        )
                    })
                }
            </ul>

        </div>
        );

    }
}

const mapStateToProps = ({ orders, users, products },ownProps) => {
    const id = ownProps.match.params.id;
    const order = orders.find( order => order.id === id*1) || {};
    const user = users.find( user => user.id === order.userId ) || {};
    return { id, order, user, products };
};

const mapDispatch = (dispatch)=> {
    return {
        fetchOrders: ()=> dispatch(fetchOrders()),
        fetchUsers: ()=> dispatch(fetchUsers())
    };
};


export default connect(mapStateToProps, mapDispatch)(AdminOrder);
  
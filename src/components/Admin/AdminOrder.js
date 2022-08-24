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
        this.getProdList = this.getProdList.bind(this);
    }

    componentDidMount(){
        this.props.fetchOrders();
        this.props.fetchUsers();
    }
    componentDidUpdate(prevProps){
    }
    getProdList(id) {
        const lines = this.props.fetchLineItems(id);
    }
    render(){
        const { getProdList } = this;
        const { order, user, id } = this.props;
        var newDate = new Date(order.createdAt);

        return (
        <div>
            <ul id='order'>
                Order #{ order.id } <br />
                Created at: { newDate.toString() } <br />
                Placed by: <Link to={`/admin/users/${user.id}`}>{ user.fullName }</Link>
            </ul>

        </div>
        );

    }
}

const mapStateToProps = ({ orders, users, lineitems },ownProps) => {
    const id = ownProps.match.params.id;
    const order = orders.find( order => order.id === id*1) || {};
    const user = users.find( user => user.id === order.userId ) || {};
    return { id, order, user };
};

const mapDispatch = (dispatch)=> {
    return {
        fetchOrders: ()=> dispatch(fetchOrders()),
        fetchUsers: ()=> dispatch(fetchUsers()),
        fetchLineItems: (id) => dispatch(fetchLineItems(id))
    };
};


export default connect(mapStateToProps, mapDispatch)(AdminOrder);
  
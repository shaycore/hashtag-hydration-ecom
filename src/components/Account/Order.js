import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders, fetchUsers, fetchLineItems } from "../../store";
import axios from 'axios';

class Order extends React.Component{
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
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">
                            Order #{ order.id }
                        </h1>
                        <div className="d-inline-flex">
                            <p className="m-0">
                                <Link to={'/account/orderhistory/'}>Return to Your Order History</Link>
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
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    { !order.lineItems ? 
                                        null : 
                                        order.lineItems.map( lineitem => {
                                            const product = products.find( product => product.id === lineitem.productId);
                                            return (
                                                <tr key={ lineitem.id }>
                                                    <td className="align-middle">
                                                        #{ product.id }
                                                    </td>
                                                    <td className="align-middle">
                                                        { product.name }
                                                    </td>
                                                    <td className="align-middle">
                                                        { lineitem.quantity }
                                                    </td>
                                                    <td className="align-middle">
                                                        ${ Number((product.price)*(lineitem.quantity)).toFixed(2) }
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


export default connect(mapStateToProps, mapDispatch)(Order);
  
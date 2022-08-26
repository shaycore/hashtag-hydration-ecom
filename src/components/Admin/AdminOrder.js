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
        var newDate = new Date(order.createdAt).toDateString().toString();
        return (

            <div>
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">
                            Profile of Order #{order.id}
                        </h1>
                        <div className="d-inline-flex">
                            <p className="m-0">
                                <Link to={'/admin/orders/'}>Return to Admin Orders List</Link>
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
                                        <th>Created At</th>
                                        <th>Placed By</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    <tr key={ order.id }>
                                        <td className="align-middle">
                                            Order #{ order.id }
                                        </td>
                                        <td className="align-middle">
                                            { newDate }
                                        </td>
                                        <td className="align-middle">
                                            <Link to={`/admin/users/${user.id}`}>{ user.fullName }</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <br />
                            <table className="table table-bordered text-center mb-0">
                                <thead className="bg-secondary text-dark">
                                    <tr>
                                        <th>Line Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Quantity Price</th>
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
                                                    <Link to={`/admin/products/${product.id}`}>{ product.name }</Link>
                                                </td>
                                                <td className="align-middle">
                                                    { lineitem.quantity }
                                                </td>
                                                <td className="align-middle">
                                                    $ { product.price }
                                                </td>
                                                <td className="align-middle">
                                                    $ { Number((product.price)*(lineitem.quantity)).toFixed(2) }
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




        // <div>
        //     <Link to={'/admin/orders/'}>Return to All Orders</Link>
        //     <br />
        //     <ul id='order'>
        //         Order #{ order.id } <br />
        //         Created at: { newDate.toString() } <br />
        //         Placed by: <Link to={`/admin/users/${user.id}`}>{ user.fullName }</Link>
                // { !order.lineItems ? 
                //     null : 
                //     order.lineItems.map( lineitem => {
                //         const product = products.find( product => product.id === lineitem.productId);
                //         return (
                //             <li key={ lineitem.id }>
                //                 <Link to={`/admin/products/${product.id}`}>{ product.name }</Link> - qty: { lineitem.quantity } 
                //             </li>
                //         )
                //     })
                // }
        //     </ul>

        // </div>
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
  
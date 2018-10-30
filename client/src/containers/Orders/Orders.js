import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf } from 'prop-types';
import { OrderPropTypes } from '../../PropTypes';
import List from '../../components/List';
import OrderHeader from '../../components/OrderHeader';
import OrderItemSummary from '../../components/OrderItemSummary';

const Orders = ({ orders }) => {
  if (!orders.length) {
    return (
      <div>
        <h1>You have no orders!</h1>
        <Link to="/store">Shop Now!</Link>
      </div>
    );
  }

  return (
    <main className="orders">
      <h1 className="orders__title">My Orders</h1>
      {orders.map(order => (
        <List key={order._id}>
          <OrderHeader
            orderId={order.orderId}
            timestamp={order.timestamp}
            totalPrice={order.totalPrice}
          />
          {order.items.map(item => (
            <OrderItemSummary key={item.product._id} item={item} />
          ))}
        </List>
      ))}
    </main>
  );
};

Orders.propTypes = {
  orders: arrayOf(OrderPropTypes).isRequired,
};

export default Orders;

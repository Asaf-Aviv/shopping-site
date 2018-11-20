import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf } from 'prop-types';
import { OrderPropTypes } from '../../PropTypes';
import OrderHeader from '../../components/OrderHeader';
import OrderItemSummary from '../../components/OrderItemSummary';
import Container from '../../components/Container';

const Orders = ({ orders }) => {
  if (!orders.length) {
    return (
      <Container>
        <div>
          <h1>You have no orders!</h1>
          <Link to="/store">Shop Now!</Link>
        </div>
      </Container>
    );
  }

  return (
    <main className="orders">
      <Container>
        <h1 className="weight-300">My Orders</h1>
        {orders.map(order => (
          <div key={order._id} className="shadow mb-20">
            <OrderHeader
              orderId={order.orderId}
              timestamp={order.timestamp}
              totalPrice={order.totalPrice}
            />
            <ul>
              {order.items.map(item => (
                <OrderItemSummary key={item.product._id} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </main>
  );
};

Orders.propTypes = {
  orders: arrayOf(OrderPropTypes).isRequired,
};

export default Orders;

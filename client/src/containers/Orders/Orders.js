import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  orders: state.orders,
});

@connect(mapStateToProps)
class Orders extends Component {
  static propTypes = {
  };

  render() {
    return (
      <ul>
        <h1>ORDERS</h1>
      </ul>
    );
  }
}

export default Orders;

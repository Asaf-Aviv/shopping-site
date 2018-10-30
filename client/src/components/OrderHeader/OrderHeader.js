import React from 'react';
import { string, number } from 'prop-types';
import format from 'date-fns/format';

import './OrderHeader.sass';

const OrderHeader = ({ orderId, timestamp, totalPrice }) => (
  <div className="order__header">
    <h4 className="header__items">{`Order ID: ${orderId}`}</h4>
    <h4 className="header__items">
      {`Ordered on: ${format(timestamp, 'DD/MM/YYYY')}`}
    </h4>
    <h4 className="header__items">{`Total Price: ${totalPrice}$`}</h4>
  </div>
);

OrderHeader.propTypes = {
  orderId: string.isRequired,
  timestamp: number.isRequired,
  totalPrice: number.isRequired,
};

export default OrderHeader;

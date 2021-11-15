'use strict';

const caps = require('../hub/events.js');
const logDelivery = require('./log-delivery.js');

caps.on('delivered', logDelivery);

function pickup(storeName) {
  let payload = {
    'store': storeName,
    'orderId': 1234,
    'customer': 'Test Customer',
    'address': '1234 main street',
  };

  caps.emit('pickup', payload);
}

pickup('1-800-flowers');

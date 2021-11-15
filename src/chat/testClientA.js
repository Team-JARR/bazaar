'use strict';

const caps = require('./hub/events.js');
const logEvent = require('./hub/log-event.js');

// subscribing
caps.on('pickup', logEvent('pickup'));
caps.on('in-transit', logEvent('in-transit'));
caps.on('delivered', logEvent('delivered'));

require('./driver/driver.js');
require('./vendor/vendor.js');

'use strict';

const caps = require('../hub/events.js');
const handlePickup = require('./handle-pickup.js');

caps.on('pickup', handlePickup);

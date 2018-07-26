'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on schoolcore-p2p Module {0}'
};

module.exports = require('schoolcore-lib').errors.extend(spec);

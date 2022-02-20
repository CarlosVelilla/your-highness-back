const mongoose = require('mongoose');
const { CONFIG } = require('../config/config');

function connect() {
  return mongoose.connect(CONFIG.db.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
  });
}

module.exports = connect;

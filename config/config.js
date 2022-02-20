const dotenv = require('dotenv');

dotenv.config();

const { PORT, DB_URL } = process.env;

const CONFIG = {
  app: {
    PORT: PORT || 5000,
  },
  db: {
    url: DB_URL,
  },
};

module.exports = { CONFIG };

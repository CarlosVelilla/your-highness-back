const dotenv = require('dotenv');

dotenv.config();

const { PORT, DB_URL, CLIENT_URL } = process.env;

const CONFIG = {
  app: {
    PORT: PORT || 5000,
    CLIENT_URL: CLIENT_URL,
  },
  db: {
    url: DB_URL,
  },
};

module.exports = { CONFIG };

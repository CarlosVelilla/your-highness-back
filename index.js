const { CONFIG } = require('./config/config');
const routes = require('./routes');
const mongoose = require('mongoose');
const { json } = require('body-parser');
const helmet = require('helmet');
const connect = require('./db/connect');

mongoose.Promise = global.Promise;
mongoose.connect(CONFIG.db.url);

const express = require('express');

const { errorMiddleware } = require('./middleware/errorMiddleware');

const app = express();

app.use(helmet());
app.use(
  json({
    limit: '50mb',
  })
);
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(errorMiddleware);

app.use('/', routes());

app.listen(
  CONFIG.app.PORT,
  console.log(`Server running in port ${CONFIG.app.PORT}`)
);

connect().then(console.log('DB connected'));

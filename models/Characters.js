const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charactersSchema = new Schema({
  id: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  background: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Characters', charactersSchema);

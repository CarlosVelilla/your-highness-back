const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const declinesSchema = new Schema({
  id: {
    type: String,
    trim: true,
  },
  toCard: {
    type: String,
    trim: true,
  },
  text: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Declines', declinesSchema);

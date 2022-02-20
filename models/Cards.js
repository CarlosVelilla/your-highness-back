const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardsSchema = new Schema({
  id: {
    type: String,
    trim: true,
  },
  parentCard: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Cards', cardsSchema);

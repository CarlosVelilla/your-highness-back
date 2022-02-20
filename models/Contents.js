const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentsSchema = new Schema({
  id: {
    type: String,
    trim: true,
  },
  text: {
    type: String,
    trim: true,
  },
  advice: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Contents', contentsSchema);

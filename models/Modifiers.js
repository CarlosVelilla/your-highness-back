const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modifiersSchema = new Schema({
  id: {
    type: String,
    trim: true,
  },
  // influence: {
  //   type: Schema.Types.Number,
  // },
  // grades: {
  //   type: Schema.Types.Number,
  // },
  // collection: {
  //   type: Schema.Types.Number,
  // },
});

module.exports = mongoose.model('Modifiers', modifiersSchema);

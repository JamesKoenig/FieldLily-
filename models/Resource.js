const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  habit: {
    type: Schema.Types.ObjectId,
    ref: 'Habit'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Resource = mongoose.model('Resource', ResourceSchema);
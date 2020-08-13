const db = require('mongoose');

const uneg_unegSchema = new db.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  content: {
    type: String,
    trim: true,
    required: true
  },
  formatted_title: {
    type: String,
    required: true,
    index: true
  }
}, { timestamps: true });

module.exports = db.model('uneg_uneg', uneg_unegSchema);
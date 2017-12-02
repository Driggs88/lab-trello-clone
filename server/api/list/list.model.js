const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  position: Number,
  cards: {
    type: Array,
    'default': [],
    required: true
  }

 }, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
  });

module.exports = mongoose.model('List', ListSchema);

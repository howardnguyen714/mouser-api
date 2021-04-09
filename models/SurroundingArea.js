const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurroundingAreaSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  tags: [{
    text: String,
    upvotes: Number
  }],
  tips: [{
    text: String,
    upvotes: Number
  }]
})

const SurroundingArea = mongoose.model('SurroundingArea', SurroundingAreaSchema)
module.exports = SurroundingArea

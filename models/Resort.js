const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResortSchema = new mongoose.Schema({
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
  }],
  parks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Park'
  }],
  hotels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel'
  }],
  shoppingDistricts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShoppingDistrict'
  }],
  surroundingAreas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SurroundingArea'
  }]
})

const Resort = mongoose.model('Resort', ResortSchema)
module.exports = Resort

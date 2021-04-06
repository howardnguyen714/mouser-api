const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResortSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  tags: [{
    tagName: String,
    upvotes: Number
  }],
  tips: [{
    tipName: String,
    upvotes: Number
  }],
  parks: [{
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Park'
  }],
  hotels: [{
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Hotel'
  }],
  shoppingDistricts: [{
    type: mongoose.Types.Schema.ObjectId,
    ref: 'ShoppingDistrict'
  }],
  surroundingArea: {
    type: mongoose.Types.Schema.ObjectId,
    ref: 'SurroundingArea'
  }
})

const Resort = mongoose.model('Resort', ResortSchema)
module.exports = Resort

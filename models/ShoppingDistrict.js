const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new mongoose.Schema({
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
  dinings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dining'
  }],
  shops: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop'
  }],
  shows: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show'
  }]
})

const Hotel = mongoose.model('Hotel', HotelSchema)
module.exports = Hotel

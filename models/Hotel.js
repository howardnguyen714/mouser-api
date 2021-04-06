const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new mongoose.Schema({
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
  dinings: [{
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Dining'
  }],
  shops: [{
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Shop'
  }]
})

const Hotel = mongoose.model('Hotel', HotelSchema)
module.exports = Hotel

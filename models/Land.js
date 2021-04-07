const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LandSchema = new mongoose.Schema({
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
  rides: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ride'
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

const Land = mongoose.model('Land', LandSchema)
module.exports = Land

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
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Ride'
  }],
  dinings: [{
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Dining'
  }],
  shops: [{
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Shop'
  }],
  shows: [{
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Show'
  }]
})

const Land = mongoose.model('Land', LandSchema)
module.exports = Land

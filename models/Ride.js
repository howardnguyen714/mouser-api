const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RideSchema = new mongoose.Schema({
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

const Ride = mongoose.model('Ride', RideSchema)
module.exports = Ride

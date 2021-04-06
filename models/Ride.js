const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RideSchema = new mongoose.Schema({
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
  }]
})

const Ride = mongoose.model('Ride', RideSchema)
module.exports = Ride

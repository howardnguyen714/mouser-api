const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkSchema = new mongoose.Schema({
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
  lands: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Land'
  }]
})

const Park = mongoose.model('Park', ParkSchema)
module.exports = Park

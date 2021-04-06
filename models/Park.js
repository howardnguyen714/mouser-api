const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkSchema = new mongoose.Schema({
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
  lands: [{
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Land'
  }]
})

const Park = mongoose.model('Park', ParkSchema)
module.exports = Park
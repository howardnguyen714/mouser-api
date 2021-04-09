const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowSchema = new mongoose.Schema({
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

const Show = mongoose.model('Show', ShowSchema)
module.exports = Show

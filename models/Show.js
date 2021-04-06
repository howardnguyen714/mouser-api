const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowSchema = new mongoose.Schema({
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

const Show = mongoose.model('Show', ShowSchema)
module.exports = Show

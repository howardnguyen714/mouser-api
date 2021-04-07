const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiningSchema = new mongoose.Schema({
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

const Dining = mongoose.model('Dining', DiningSchema)
module.exports = Dining

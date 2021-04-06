const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new mongoose.Schema({
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

const Shop = mongoose.model('Shop', ShopSchema)
module.exports = Shop

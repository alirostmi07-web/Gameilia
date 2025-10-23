const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  platform: String,
  rating: Number,
  size: String,
  images: [String],
  slug: {type:String, index:true, unique:true},
  createdAt: {type:Date, default: Date.now}
});
module.exports = mongoose.model('Product', ProductSchema);

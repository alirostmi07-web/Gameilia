const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  items: Array,
  buyer: Object,
  total: Number,
  status: {type:String, default:'pending'},
  createdAt: {type:Date, default: Date.now},
  zp: Object
});
module.exports = mongoose.model('Order', OrderSchema);

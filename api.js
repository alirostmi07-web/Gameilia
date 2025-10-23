const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');
const router = express.Router();
const zarinpal = require('../services/zarinpal');

router.get('/products', async (req,res)=>{
  try{
    const q = req.query.q || '';
    const products = await Product.find({ $or: [{title: new RegExp(q,'i')}, {platform: new RegExp(q,'i')}] }).limit(500);
    res.json(products);
  }catch(err){ res.status(500).json({error:err.message}) }
});

router.get('/products/:slug', async (req,res)=>{
  const p = await Product.findOne({slug: req.params.slug});
  if(!p) return res.status(404).json({error:'not found'});
  res.json(p);
});

router.post('/checkout', async (req,res)=> {
  try{
    const {cart, buyer} = req.body;
    let total = 0;
    const items = [];
    for(const it of cart){
      const p = await Product.findById(it.productId);
      if(!p) return res.status(400).json({error:'invalid product'});
      total += p.price * (it.qty||1);
      items.push({title:p.title, price:p.price, qty: it.qty});
    }
    const order = await Order.create({items, buyer, total, status:'pending', createdAt: new Date()});
    const pay = await zarinpal.createPayment({amount: total, description: `خرید از گیم ایلیا - سفارش #${order._id}`, callback_url: `${process.env.BASE_URL || 'http://localhost:3000'}/api/zarinpal/verify/${order._id}`});
    res.json({orderId: order._id, paymentUrl: pay.payment_url || pay.redirect_url || pay.authority ? `https://www.zarinpal.com/pg/StartPay/${pay.authority}` : null, raw: pay});
  }catch(err){ res.status(500).json({error:err.message}) }
});

router.get('/zarinpal/verify/:orderId', async (req,res)=>{
  res.json({ok:true, msg:'verify callback placeholder', query:req.query, params:req.params});
});

module.exports = router;

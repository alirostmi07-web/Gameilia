const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');
const router = express.Router();

router.get('/products', async (req,res)=>{
  const products = await Product.find().limit(1000);
  res.json(products);
});

router.post('/products', async (req,res)=>{
  const body = req.body;
  try{
    const prod = await Product.create(body);
    res.json(prod);
  }catch(err){ res.status(400).json({error:err.message}) }
});

router.put('/products/:id', async (req,res)=>{
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(p);
});

router.delete('/products/:id', async (req,res)=>{
  await Product.findByIdAndDelete(req.params.id);
  res.json({ok:true});
});

router.get('/orders', async (req,res)=>{
  const orders = await Order.find().limit(500);
  res.json(orders);
});

module.exports = router;

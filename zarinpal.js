const axios = require('axios');
const MERCHANT = process.env.ZARINPAL_MERCHANT || '';

async function createPayment({amount, description, callback_url}){
  return {ok:true, payment_url:`https://sandbox.zarinpal.com/pg/StartPay/TEST_AUTH_${Date.now()}`, authority:'TEST_AUTH'};
}

async function verifyPayment({authority, amount}){
  return {ok:true, ref_id:'TEST_REF'};
}

module.exports = { createPayment, verifyPayment };

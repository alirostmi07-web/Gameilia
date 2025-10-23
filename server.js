require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/api');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);
app.use('/', express.static(path.join(__dirname, '..', 'frontend', 'public')));

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/gameiliya', {useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=> app.listen(PORT,()=>console.log('Server on',PORT)))
  .catch(err=>console.error('Mongo failed',err));

const axios = require('axios');
const cheerio = require('cheerio');
const Product = require('../models/Product');

async function scrapeSample(){
  console.log('scraper template - customize selectors per site');
}

if(require.main === module) scrapeSample();
module.exports = { scrapeSample };

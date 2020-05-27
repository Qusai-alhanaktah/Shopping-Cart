/* eslint-disable no-undef */
'use strict';

var express = require('express');
var router = express.Router();
const Product = require('../models/product-schema.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, data){
    var productChunks = [];
    var chunkSize = 3;
    var show = false;
    for (var i = 0; i < data.length; i += chunkSize) {
      productChunks.push(data.slice(i, i + chunkSize));
    }
    if(productChunks.length > 0) show = true;
    res.render('shop/index', {products: productChunks, show: show,});
  });
});

module.exports = router;

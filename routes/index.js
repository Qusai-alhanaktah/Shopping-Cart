/* eslint-disable no-undef */
'use strict';

var express = require('express');
var router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

const Product = require('../models/product-schema.js');
const csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, data){
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < data.length; i += chunkSize) {
      productChunks.push(data.slice(i, i + chunkSize));
    }
    res.render('shop/index', {products: productChunks,});
  });
});

router.get('/signup', (req, res, next)=>{
  var messages = req.flash('error');
  res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0,});
});
router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true,
}));

router.get('/profile', (req, res, next)=>{
  res.render('user/profile');
});

module.exports = router;

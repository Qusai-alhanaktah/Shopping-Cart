'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/index', { title: 'Shopping Cart'});
});

module.exports = router;

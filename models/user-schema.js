/* eslint-disable no-undef */
'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const users = new mongoose.Schema({
  email: {type: String, required: true,},
  password: {type: String, required: true,},
});

users.methods.encryptPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync((5), null));
};
users.methods.validPassword = password => {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', users);
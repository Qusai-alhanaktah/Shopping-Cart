/* eslint-disable no-undef */
'use strict';


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user-schema.js');


passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser((id, done)=>{
  User.findById(id, (err, user)=>{
    done(null, user);
  });
});

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, (req, email, password, done) => {
  User.findOne({'email': email,}, (err, user) => {
    if(err) return done(err);
    if(user) return done(null, false, {message: 'Email is already used',});
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    newUser.save((err, result) => {
      if(err) return done(err);
      return done(null, newUser);
    });
  });
}
));

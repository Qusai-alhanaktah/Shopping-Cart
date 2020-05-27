/* eslint-disable no-undef */
'use strict';

const Product = require('../models/product-schema.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true, useUnifiedTopology: true,});

const products = [
  new Product({
    imgPath: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200421011458/leak-call-of-duty-2020-features-cold-vietnam-war-zombies-returning.jpg',
    title: 'Call of Duty',
    description: 'Is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II.',
    price: 24.99,
  }),
  new Product({
    imgPath: 'https://1.bp.blogspot.com/-aiqk04K-RGc/XS26ghs8j5I/AAAAAAAAEDs/aH-EO-mw4CIn20QQEuB4zf_ivEp9Sw1twCLcBGAs/s1600/c0f99f17-c022-4da6-b2cc-721c940f6381.jpeg',
    title: 'Prince of Persia',
    description: 'The film seems to be set in ancient Persia, as the film starts with a map portending to show the expanse of the Persian Empire 2500 years ago.',
    price: 9.99,
  }),
  new Product({
    imgPath: 'https://alkhaleejonline.net/sites/default/files/2018-11/pubg-player-unknown-battlegrounds.jpg',
    title: 'PlayerUnknown\'s Battlegrounds (PUBG)',
    description: 'Battlegrounds is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.',
    price: 19.99,
  }),
  new Product({
    imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlC5dKiNSqnips-k7LcMxt0T71wGuvN43YaRPfq4L474qittAp&usqp=CAU',
    title: 'God of War',
    description: 'a third-person action-adventure video game. It features an over-the-shoulder free camera, a departure from the previous installments, which featured a fixed cinematic camera (with the exception of 2007s two-dimensional side-scroller Betrayal).',
    price: 29.99,
  }),
  new Product({
    imgPath: 'https://pyxis.nymag.com/v1/imgs/06c/430/10ba1c91e5acea49079ad47d548d0dff15.rhorizontal.w600.jpg',
    title: 'Final Fantasy VII Remake',
    description: 'A game that begins as a faithful recreation before slowly becoming something more ostentatious, Final Fantasy VII Remake takes a seminal role-playing game from 1997 and turns it into a rumination on fandom. Re-telling a story about eco-terrorist thrust into a conflict larger than they imagined while introducing a new mystery, Final Fantasy VII Remake is at times confounding but always provocative. It rounds this out with wonderfully complex combat, brainy but action-packed, a dense way of fighting for a dense story full of twists. Final Fantasy VII Remake could have just played the hits, and instead tried to do something stranger.',
    price: 59.99,
  }),
  new Product({
    imgPath: 'https://i1.wp.com/www.vga4a.com/wp-content/uploads/Nioh-2-Cover.jpg?fit=1920%2C1080&ssl=1',
    title: 'Nioh 2',
    description: 'There’s a Bruce Lee quote about being like water — formless, shapeless, something that fills the space it’s put in. Nioh 2 is a game where fighting monsters feels like being water. An action game set in a fantasy version of Japan’s Sengoku Era that casts players as a demon hunter caught in a struggle between warlords, Nioh 2 throws you in the deep end and challenges you to dazzle your way out of it. There’s an overwhelming array of weapons and skills to specialize in, but as you begin to get more familiar with your tools, you also become more expressive. Nioh 2 is difficult in a way that rewards creativity, making it one of the most satisfying games to master.',
    price: 51.29,
  })
];
for (let i = 0; i < products.length; i++) {
  products[i].save(() => {
    if(i === products.length - 1) mongoose.disconnect();
  });
}


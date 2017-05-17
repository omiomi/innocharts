'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1494929118566_1788';

  // add your config here

  return config;
};


// config/config.default.js
exports.view = {

  defaultViewEngine: 'nunjucks',

  mapping: {
    '.tpl': 'nunjucks',
  },
};


"use strict";

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
	enable: true,
	package: "egg-view-nunjucks"
};

// {app_root}/config/plugin.js
//添加 vue模板插件
let jade= require('jade');

module.exports.jade = {
  enable: true,
  package: "jade"
};
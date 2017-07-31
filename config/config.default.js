"use strict";

module.exports = appInfo => {
	const config = {};

  // should change to your own
	config.keys = appInfo.name + "_1494929118566_1788";

  // add your config here

	return config;
};


// config/config.default.js
module.exports.view = {

	defaultViewEngine: "jade",

	mapping: {
		".jade": "jade",
	},
};

/*
module.exports.view = {

	defaultViewEngine: "nunjucks",

	mapping: {
		".tpl": "nunjucks",
	},
};

*/

//mount middleware
module.exports.middleware = [
	"robot",
];

//middleware config
module.exports.robot = {
	ua: [
  	/Baiduspider/i,
	],
};
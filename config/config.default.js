"use strict";

module.exports = appInfo => {
	const config = {};

  // should change to your own
	config.keys = appInfo.name + "_1494929118566_1788";

  // add your config here

	return config;
};


exports.keys = 'fvExsf-FJxblpd356iwtMwWj';

// 应用nunjucks 模板

module.exports.view = {

	defaultViewEngine: "nunjucks",

	mapping: {
		".tpl": "nunjucks",
	},
};


//mount middleware
module.exports.middleware = [
	"robot",
];


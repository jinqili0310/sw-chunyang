/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 19:44:50
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 15:36:55
 * @FilePath: /sw-chunyang/next.config.js
 */
require('dotenv').config();

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [ '@svgr/webpack' ]
		});

		return config;
	},
	env: {
		MONGO_URI: process.env.MONGO_URI,
		NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
	}
};
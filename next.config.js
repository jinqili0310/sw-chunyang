/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 19:44:50
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-06 19:45:25
 * @FilePath: /sw-chunyang/next.config.js
 */
module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [ '@svgr/webpack' ]
		});

		return config;
	}
};

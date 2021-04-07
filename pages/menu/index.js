/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 20:13:12
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-06 22:05:53
 * @FilePath: /sw-chunyang/pages/menu/index.js
 */
import React from 'react';

export default function Menu() {
	return (
		<React.Fragment>
			<div className="menu-logo">
				<a href="/"><img src="/assets/images/logo-type.png" /></a>
			</div>
			<div className="home-twitter">
				<a href="https://twitter.com/ChunyangSw0412" target="__blank">
					<img src="/assets/images/twitter-brands.png" />
				</a>
			</div>
			<div className="menu-block">
				<div className="menu-icon">
					<a href="/profile"><img src="/assets/images/home-profile.png" /></a>
				</div>
				<div className="menu-icon">
					<a href="/memory"><img src="/assets/images/home-memory.png" /></a>
				</div>
				<div className="menu-icon">
					<a href="/photo"><img src="/assets/images/home-photo.png" /></a>
				</div>
				<div className="menu-icon">
					<a href="/fans"><img src="/assets/images/home-fans.png" /></a>
				</div>
			</div>
		</React.Fragment>
	);
}

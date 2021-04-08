/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 22:13:58
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-07 19:10:48
 * @FilePath: /sw-chunyang/pages/components/navbar.js
 */
import React, { useState } from 'react';

export default function Navbar() {
	return (
		<React.Fragment>
			<div className="nav-div">
				<div className="nav-logo">
					<a href="/">
						<img src="/assets/images/logo-type.png" />
					</a>
				</div>
				<div className="nav-menu">
					<a href="/profile">
						<span>Profile</span>
					</a>
					<a href="/memory">
						<span>Memory</span>
					</a>
					<a href="/photo">
						<span>Photo Playlist</span>
					</a>
					<a href="/fans">
						<span>Fans' Love</span>
					</a>
				</div>
			</div>
		</React.Fragment>
	);
}

/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 22:13:58
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-07 00:55:19
 * @FilePath: /sw-chunyang/pages/components/navbar.js
 */
import React, { useState } from 'react';
import { Affix } from 'antd';

export default function Navbar() {
    const [top, setTop] = useState(0);
	return (
		<React.Fragment>
			<Affix offsetTop={top}>
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
			</Affix>
		</React.Fragment>
	);
}

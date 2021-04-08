/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 22:22:46
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-07 11:02:43
 * @FilePath: \sw-chunyang\pages\components\navberger.js
 */
import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';

const menu = (
	<Menu>
		<Menu.Item key="0">
			<a className="berger-link" href="/profile">
				Profile
			</a>
		</Menu.Item>
		<Menu.Item key="1">
			<a className="berger-link" href="/memory">
				Memory
			</a>
		</Menu.Item>
		<Menu.Item key="2">
			<a className="berger-link" href="/photo">
				Photo Playlist
			</a>
		</Menu.Item>
		<Menu.Item key="3">
			<a className="berger-link" href="/fans">
				Fans' Love
			</a>
		</Menu.Item>
	</Menu>
);

export default function Navberger() {
	return (
		<React.Fragment>
				<div className="nav-div">
					<div className="nav-logo">
						<a href="/">
							<img src="/assets/images/logo-type.png" />
						</a>
					</div>
					<div className="berger-menu">
						<Dropdown overlay={menu} trigger={[ 'click' ]}>
							<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
								<img src="/assets/images/bars-round.png" />
							</a>
						</Dropdown>
					</div>
				</div>
		</React.Fragment>
	);
}

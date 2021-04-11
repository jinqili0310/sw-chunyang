/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 22:13:58
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 01:29:40
 * @FilePath: /sw-chunyang/pages/components/navbar.js
 */
import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { useRouter } from 'next/router';

const ppMenu = (
	<Menu>
		<Menu.Item>
			<a href="/photo" className="nav-down">Photo</a>
		</Menu.Item>
		<Menu.Item>
			<a href="/playlist" className="nav-down">Playlist</a>
		</Menu.Item>
	</Menu>
);
const fansMenu = (
	<Menu>
		<Menu.Item>
			<a href="/fanmade" className="nav-down">Fan-made Video</a>
		</Menu.Item>
		<Menu.Item>
			<a href="/message" className="nav-down">Message to Sunwoo</a>
		</Menu.Item>
	</Menu>
);

export default function Navbar() {
	const router = useRouter();

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
					<Dropdown overlay={ppMenu}>
						<a
							className="ant-dropdown-link"
							onClick={(e) => {
								e.preventDefault();
								router.push('/photo-playlist');
							}}
						>
							<span>Photo Playlist</span>
						</a>
					</Dropdown>
					{/* <a href="/photo-playlist">
						<span>Photo Playlist</span>
					</a> */}
					<Dropdown overlay={fansMenu}>
						<a
							className="ant-dropdown-link"
							onClick={(e) => {
								e.preventDefault();
								router.push('/fans');
							}}
						>
							<span>Fans' Love</span>
						</a>
					</Dropdown>
					{/* <a href="/fans">
						<span>Fans' Love</span>
					</a> */}
				</div>
			</div>
		</React.Fragment>
	);
}

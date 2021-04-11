/*
 * @Author: Jinqi Li
 * @Date: 2021-04-09 12:23:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-10 13:57:09
 * @FilePath: /sw-chunyang/pages/photo-playlist/index.js
 */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Navberger from '../components/navberger';
import { Row, Col } from 'antd';

function useWindowSize() {
	const [ windowSize, setWindowSize ] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			function handleResize() {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight
				});
			}

			window.addEventListener('resize', handleResize);

			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);
	return windowSize;
}

export default function PhotoPlaylist() {
	const size = useWindowSize();

	return (
		<React.Fragment>
			<div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
			<Row className="fix-content double-menu">
				<Col className="col-left double-col" xs={24} sm={24} md={12} lg={12} xl={12}>
					<a href="/photo">
						<img src="/assets/images/photo.png" />
						<img src="/assets/images/yellow-circle.png" />
					</a>
				</Col>
				<Col className="col-right double-col" xs={24} sm={24} md={12} lg={12} xl={12}>
					<a href="/playlist">
						<img src="/assets/images/playlist.png" />
						<img src="/assets/images/red-circle.png" />
					</a>
				</Col>
			</Row>
		</React.Fragment>
	);
}

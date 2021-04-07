/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 22:08:41
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-07 01:00:09
 * @FilePath: /sw-chunyang/pages/profile/index.js
 */
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import Navbar from '../components/navbar';
import Navberger from '../components/navberger';

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

export default function Profile() {
	const size = useWindowSize();

	return (
		<React.Fragment>
			<Row>{size.width > 839 ? <Navbar /> : <Navberger />}</Row>

			<Row className="profile-content">
				<Col xs={24} sm={8} md={8} lg={8} xl={8}>
					<div>
						<img src="/assets/images/profile.png" />
					</div>
				</Col>
				<Col xs={24} sm={16} md={16} lg={16} xl={16} />
			</Row>
		</React.Fragment>
	);
}

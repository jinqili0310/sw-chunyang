/*
 * @Author: Jinqi Li
 * @Date: 2021-04-09 12:33:11
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 16:45:30
 * @FilePath: /sw-chunyang/pages/fanmade/index.js
 */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Navberger from '../components/navberger';
import { Card, Col, Row } from 'antd';

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

export default function Fanmade() {
	const size = useWindowSize();

	return (
		<React.Fragment>
			<div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
			<div className="fix-content">
				{/* <Row>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}> */}
				<div className="fix-fans">
					<Card
						cover={
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/BX-iOkjrx8s"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								frameBorder="0"
								allowFullScreen
							/>
						}
					>
						선우 생일 축하영상 丨광합성
						<p>edited by @sunnioeo</p>
					</Card>
					{/* </Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}> */}
					<Card
						cover={
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/aEfVFD1-k0E"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								frameBorder="0"
								allowFullScreen
							/>
						}
					>
						<span style={{ fontFamily: 'Noto Serif TC' }}>春陽</span> 영상 티저 丨<span style={{ fontFamily: 'Ageo' }}>SUN</span>
					</Card>
					{/* </Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}> */}
					<Card
						cover={
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/nGISFXMlKJU"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								frameBorder="0"
								allowFullScreen
							/>
						}
					>
						선우 생일 응원 丨<span style={{ fontFamily: 'Ageo' }}>COEX</span>{' '}
						<span style={{ fontFamily: 'Montserrat' }}>3</span>
						<span style={{ fontFamily: 'Ageo' }}>D</span> 곡면전광판 응원영상
						<p>edited by @sunnioeo</p>
					</Card>
				</div>
				{/* </Col>
				</Row> */}
			</div>
		</React.Fragment>
	);
}

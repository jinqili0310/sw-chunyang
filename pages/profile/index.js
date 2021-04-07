/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 22:08:41
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-07 12:40:16
 * @FilePath: \sw-chunyang\pages\profile\index.js
 */
import React, { useEffect, useState } from 'react';
import { Row, Col, Radio } from 'antd';
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

	const [lang, setLang] = useState("k");

	const onChange = (e) => {
		// console.log(`radio checked:${e.target.value}`);
		setLang(e.target.value)
	};

	return (
		<React.Fragment>
			<Row>{size.width > 839 ? <Navbar /> : <Navberger />}</Row>

			<Row className="profile-top">
				<div className="profile-title">
					<span className="title-kr">
						<span className="title-kim">김</span>선우
					</span>
					<span className="title-right">
						<span className="title-cn">
							<span className="title-kim">金</span>善旴
						</span>
						<span className="title-en">
							<span className="title-kim">Kim</span> Sun Woo
						</span>
					</span>
				</div>
			</Row>
			<Row className="profile-content">
				<Col xs={24} sm={24} md={8} lg={8} xl={8}>
					<div className="profile-left">
						<img src="/assets/images/profile.png" />
					</div>
				</Col>
				<Col xs={24} sm={24} md={16} lg={16} xl={16}>
					<div className="profile-right">
						<div className="profile-right-top">
							<div className="profile-radio">
								<Radio.Group onChange={onChange} defaultValue="k">
									<Radio.Button value="k"> KR </Radio.Button>
									<Radio.Button value="c"> CN </Radio.Button>
								</Radio.Group>
							</div>
						</div>
						<div className="profile-right-content">
							{lang == "k" ? (
								<div>Korean</div>
							) : (
								<div>Chinese</div>
							)}
						</div>
					</div>
				</Col>
			</Row>
		</React.Fragment>
	);
}

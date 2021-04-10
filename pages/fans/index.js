/*
 * @Author: Jinqi Li
 * @Date: 2021-04-09 12:30:50
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-10 14:05:43
 * @FilePath: /sw-chunyang/pages/fans/index.js
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

export default function Fans(){
    const size = useWindowSize();

    return (
        <React.Fragment>
            <div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
			<Row className="fix-content double-memu">
				<Col className="col-left double-col" xs={24} sm={24} md={12} lg={12} xl={12}>
					<a href="/fanmade">
						<img src="/assets/images/fanmade.png" />
						<img src="/assets/images/yellow-circle.png" />
					</a>
				</Col>
				<Col className="col-right double-col" xs={24} sm={24} md={12} lg={12} xl={12}>
					<a href="/message">
						<img src="/assets/images/message.png" />
						<img src="/assets/images/red-circle.png" />
					</a>
				</Col>
			</Row>
        </React.Fragment>
    )
}
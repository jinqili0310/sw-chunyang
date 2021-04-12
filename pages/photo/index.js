/*
 * @Author: Jinqi Li
 * @Date: 2021-04-09 12:27:05
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 23:51:20
 * @FilePath: /sw-chunyang/pages/photo/index.js
 */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Navberger from '../components/navberger';
import { List, Card, Radio } from 'antd';
import { twitter } from '../../public/assets/data/twitter';

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

export default function Photo() {
	const size = useWindowSize();
	const [ source, setSource ] = useState('img');

	const onChange = (e) => {
		// console.log(`radio checked:${e.target.value}`);
		setSource(e.target.value);
	};

	return (
		<React.Fragment>
			<div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
			<div className="fix-content photo-content">
				<div className="twi-radio">
					<Radio.Group onChange={onChange} defaultValue="img">
						<Radio.Button value="img"> PHOTO </Radio.Button>
						<Radio.Button value="vid"> VIDEO </Radio.Button>
					</Radio.Group>
				</div>
				{source == 'img' ? (
					<div className="twi-src">
						<List
							grid={{
								gutter: 16,
								xs: 2,
								sm: 2,
								md: 2,
								lg: 4,
								xl: 4,
								xxl: 4
							}}
							pagination={{
								onChange: (page) => {
									console.log(page);
								},
								pageSize: 8,
								pageSizeOptions: [ 8 ]
							}}
							dataSource={twitter.filter((item) => item.type === 'Image')}
							renderItem={(item) => (
								<List.Item>
									<div className="img-card">
										<a href={item.url} download target="__blank">
											<Card cover={<img src={item.url} />} loading={true} bordered={false} />
										</a>
									</div>
								</List.Item>
							)}
						/>
					</div>
				) : (
					<div className="twi-source">
						<List
							grid={{
								gutter: 16,
								xs: 2,
								sm: 2,
								md: 2,
								lg: 4,
								xl: 4,
								xxl: 4
							}}
							pagination={{
								onChange: (page) => {
									console.log(page);
								},
								pageSize: 8,
								pageSizeOptions: [ 8 ]
							}}
							dataSource={twitter.filter((item) => item.type === 'Video')}
							renderItem={(item) => (
								<List.Item>
									<div className="img-card vid-card">
										<a href={item.url} target="__blank">
											<Card
												cover={
													// <video controls controlsList="download" autoPlay={false} muted loop>
													// 	<source src={item.url} type="video/mp4" />
													// </video>
													<iframe
														src={item.url}
														frameBorder="0"
														allowFullScreen
														loading="lazy"
														allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														// style={{ aspectRatio: '2/3' }}
													/>
												}
												loading={true}
												bordered={false}
											/>
										</a>
									</div>
								</List.Item>
							)}
						/>
					</div>
				)}
			</div>
		</React.Fragment>
	);
}

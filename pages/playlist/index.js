/*
 * @Author: Jinqi Li
 * @Date: 2021-04-09 12:28:13
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 11:48:19
 * @FilePath: /sw-chunyang/pages/playlist/index.js
 */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Navberger from '../components/navberger';
import { Row, Col, Radio, BackTop } from 'antd';

export async function getServerSideProps() {
	const res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=54&playlistId=PLIav6wGw923d2sTO9tsSoXI2ND0uxLJ-R&key=AIzaSyCUsgg7YEsPJ8PCRqh3guj3fo7VDZ9SB24`
	);
	const data = await res.json();
	const resTwo = await fetch(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=98&playlistId=PLIav6wGw923fnvRSbIt59QL1Z0nVPIAEz&key=AIzaSyCUsgg7YEsPJ8PCRqh3guj3fo7VDZ9SB24`
	);
	const dataTwo = await resTwo.json();
	return {
		props: {
			data,
			dataTwo
		}
	};
}

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

function toggleFullScreen() {
	var el = document.getElementById('fullscreenVideo');
	if (el.requestFullscreen) {
		el.requestFullscreen();
	} else if (el.msRequestFullscreen) {
		el.msRequestFullscreen();
	} else if (el.mozRequestFullScreen) {
		el.mozRequestFullScreen();
	} else if (el.webkitRequestFullscreen) {
		el.webkitRequestFullscreen();
	}
}

export default function Playlist({ data, dataTwo }) {
	const size = useWindowSize();
	const [ current, setCurrent ] = useState('https://www.youtube.com/embed/buRd9HaTBEo');

	const [ video, setVideo ] = useState('ofc');
	const changeVideo = (e) => {
		setVideo(e.target.value);
		e.target.value == 'ofc'
			? setCurrent('https://www.youtube.com/embed/buRd9HaTBEo')
			: setCurrent('https://www.youtube.com/embed/r25DtSUgvLc');
	};

	return (
		<React.Fragment>
			<div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
			{/* {console.log(dataTwo)} */}

			{size.width > 839 ? (
				<div className="fix-content playlist-content">
					<Row>
						<Col xs={12} sm={12} md={12} lg={12} xl={12}>
							<div className="playlist-left">
								<div
									className="player-fix"
									style={{ aspectRatio: '434/466' }}
									onClick={toggleFullScreen}
								>
									<img src="/assets/images/TV.png" />
									<iframe
										src={current}
										id="fullscreenVideo"
										frameBorder="0"
										allowFullScreen
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									/>
								</div>
							</div>
						</Col>
						<Col xs={12} sm={12} md={12} lg={12} xl={12}>
							<div className="playlist-right">
								<div className="twi-radio">
									<Radio.Group onChange={changeVideo} defaultValue="ofc">
										<Radio.Button value="ofc"> OFFICIAL FOCUS </Radio.Button>
										<Radio.Button value="fan"> FAN CAM </Radio.Button>
									</Radio.Group>
								</div>
								{video == 'ofc' ? (
									<ul className="playlist-list">
										{data.items.map(({ id, snippet = {} }) => {
											const { title, thumbnails = {}, resourceId = {} } = snippet;
											const { medium } = thumbnails;
											return (
												<li
													key={id}
													className="playlist-card"
													onClick={() => {
														setCurrent(
															`https://www.youtube.com/embed/${resourceId.videoId}`
														);
													}}
												>
													<img src={medium.url} />
													<p>{title}</p>
												</li>
											);
										})}
									</ul>
								) : (
									<ul className="playlist-list">
										{dataTwo.items.map(({ id, snippet = {} }) => {
											const { title, thumbnails = {}, resourceId = {} } = snippet;
											const { medium } = thumbnails;
											return (
												<li
													key={id}
													className="playlist-card"
													onClick={() => {
														setCurrent(
															`https://www.youtube.com/embed/${resourceId.videoId}`
														);
													}}
												>
													<img src={medium.url} />
													<p>{title}</p>
												</li>
											);
										})}
									</ul>
								)}
							</div>
						</Col>
					</Row>
				</div>
			) : (
				<div className="top-bottom fix-content">
					<div className="play-top">
						<div className="play-flex">
						<div className="player-outer" onClick={toggleFullScreen}>
							{/* <img src="/assets/images/TV.png" /> */}
							<iframe
								src={current}
								id="fullscreenVideo"
								frameBorder="0"
								allowFullScreen
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							/>
						</div>
						</div>
					</div>
					<div className="play-bottom">
						<div className="twi-radio">
							<Radio.Group onChange={changeVideo} defaultValue="ofc">
								<Radio.Button value="ofc"> OFFICIAL FOCUS </Radio.Button>
								<Radio.Button value="fan"> FAN CAM </Radio.Button>
							</Radio.Group>
						</div>
						{video == 'ofc' ? (
							<ul className="bottom-list">
								{data.items.map(({ id, snippet = {} }) => {
									const { title, thumbnails = {}, resourceId = {} } = snippet;
									const { medium } = thumbnails;
									return (
										<li
											key={id}
											className="bottom-card"
											onClick={() => {
												setCurrent(`https://www.youtube.com/embed/${resourceId.videoId}`);
											}}
										>
											<img src={medium.url} />
											<p>{title}</p>
										</li>
									);
								})}
							</ul>
						) : (
							<ul className="bottom-list">
								{dataTwo.items.map(({ id, snippet = {} }) => {
									const { title, thumbnails = {}, resourceId = {} } = snippet;
									const { medium } = thumbnails;
									return (
										<li
											key={id}
											className="bottom-card"
											onClick={() => {
												setCurrent(`https://www.youtube.com/embed/${resourceId.videoId}`);
											}}
										>
											<img src={medium.url} />
											<p>{title}</p>
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</div>
			)}
			<BackTop>
				<span>
					<img className="top-arrow" src="/assets/images/arrow.png" />
				</span>
			</BackTop>
		</React.Fragment>
	);
}

// {`https://www.youtube.com/watch?v=${resourceId.videoId}`}

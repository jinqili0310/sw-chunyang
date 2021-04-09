/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-08 14:26:54
 * @FilePath: \sw-chunyang\pages\index.js
 */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

export default function Home() {
	const size = useWindowSize();
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.push('/menu');
	};

	return (
		<React.Fragment>
			<div className="home-container" onClick={handleClick}>
				<div className="home-logo">
					<img src="/assets/images/logo-type.png" />
				</div>
				<div className="home-flower">
					{size.width > 480 ? (
						<img className="fade-in" src="/assets/images/flower.png" />
					) : (
						<img className="fade-in" src="/assets/images/flower-m.png" />
					)}
				</div>
				<div className="home-title">
					<span>Sunwoo Webzine</span>
				</div>
				<div className="home-twitter">
					<a href="https://twitter.com/ChunyangSw0412" target="__blank">
						<img src="/assets/images/twitter-brands.png" />
					</a>
				</div>
			</div>
		</React.Fragment>
	);
}

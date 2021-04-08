/*
 * @Author: Jinqi Li
 * @Date: 2021-04-07 22:13:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-08 13:14:43
 * @FilePath: \sw-chunyang\pages\memory\index.js
 */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Navberger from '../components/navberger';
import { AspectRatio } from 'react-aspect-ratio';

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

export default function Memory() {
	const size = useWindowSize();

	return (
		<React.Fragment>
			<div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
			<div className="fix-content memory-fix">
				<div className="memory-top">
					<img src="/assets/images/memory-circle.png" />
					<div className="memory-dash"> &nbsp; </div>
				</div>
				<div className="memory-item">
					<div className="memory-date">
						<div className="memory-left">
							<span>
								Apr 12<div>2000</div>
							</span>
						</div>
						<div className="memory-right">Happy Birthday!</div>
						<div className="memory-source">
							{/* <div className="memory-dash" style={{ height: '60vh', display: 'inline-block' }}>
								{' '}
							</div> */}
							<div className="memory-img">
								<img src="/assets/images/baby-1.jpg" />
							</div>
							<div className="memory-img">
								<img src="/assets/images/baby-2.jpg" />
							</div>
							<div className="memory-img">
								<img src="/assets/images/baby-3.jpg" />
							</div>
							<div className="memory-img">
								<img src="/assets/images/baby-4.jpg" />
							</div>
							<div className="memory-img">
								<img src="/assets/images/baby-5.jpg" />
							</div>
							<div className="memory-img">
								<img src="/assets/images/baby-6.jpg" />
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span>
								Feb 10<div>2021</div>
							</span>
						</div>
						<div className="memory-right">High School Rapper</div>
						<div className="memory-source">
							<div className="memory-vid">
								<AspectRatio ratio="560/315" style={{ maxWidth: '560px'}}>
									<iframe
										src="https://www.youtube.com/embed/U_CNYRFZSuo"
										frameBorder="0"
										allowFullScreen
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									/>
								</AspectRatio>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

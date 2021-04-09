/*
 * @Author: Jinqi Li
 * @Date: 2021-04-09 12:30:50
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-09 12:30:50
 * @FilePath: \sw-chunyang\pages\fans\index.js
 */
import React, { useEffect, useState } from 'react';
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

export default function Fans(){
    const size = useWindowSize();

    return (
        <React.Fragment>
            <div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
        </React.Fragment>
    )
}
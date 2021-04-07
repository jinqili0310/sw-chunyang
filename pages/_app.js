/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-07 13:21:15
 * @FilePath: \sw-chunyang\pages\_app.js
 */
import React, { useEffect } from 'react';
// import App from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	useEffect(
		() => {
			const handleRouteChange = (url) => {
				gtag.pageview(url);
			};
			router.events.on('routeChangeComplete', handleRouteChange);
			return () => {
				router.events.off('routeChangeComplete', handleRouteChange);
			};
		},
		[ router.events ]
	);

	return (
		<React.Fragment>
			<Head>
				<title>ChunYang - Happy SUNWOO Day</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	);
};

export default App;

// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props

//     return (
//       <React.Fragment>
//         <Head>
//           <title>ChunYang - Happy SUNWOO Day</title>
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <Component {...pageProps} />
//       </React.Fragment>
//     )
//   }
// }

// export default MyApp

/*
 * @Author: Jinqi Li
 * @Date: 2021-04-07 22:13:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 11:10:15
 * @FilePath: /sw-chunyang/pages/memory/index.js
 */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Navberger from '../components/navberger';
import { BackTop } from 'antd';

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
	const [ iphone, setIphone ] = useState('');
	// typeof window !== 'undefined'
	// 	? navigator.platform.toUpperCase() == 'IPHONE'
	// 		? useEffect(() => setIphone('iphone-dash'), [])
	// 		: useEffect(() => setIphone('other-dash'), [])
	// 	: null;

	return (
		<React.Fragment>
			<div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
			<div className="fix-content memory-fix">
				<div className="memory-top">
					<img src="/assets/images/memory-circle.png" />
					<div className={`memory-dash ${iphone}`}> &nbsp;</div>
				</div>
				<div className="memory-item">
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Apr 12<div>2000</div>
							</span>
						</div>
						<div className="memory-right">Happy Birthday!</div>
						<div className={`memory-source source-img ${iphone}`}>
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
							<span className="memory-month">
								Feb 10<div>2017</div>
							</span>
						</div>
						<div className="memory-right">High School Rapper</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/U_CNYRFZSuo"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jul 5-8<div>2017</div>
							</span>
						</div>
						<div className="memory-right">TRAINEE PAPARAZZI</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/e9h7kdIwIpU"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/Pjy3VfVB_3A"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jul 18-22<div>2017</div>
							</span>
						</div>
						<div className="memory-right">DAZED PROFILE FILM</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/DgQfiO0PzUA"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/JKqkVvD4xiM"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Aug 9<div>2017</div>
							</span>
						</div>
						<div className="memory-right">OPEN THE BOYZ</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/EEWYfCrenIA"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 6<div>2017</div>
							</span>
						</div>
						<div className="memory-right">THE BOYZ Debut</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="source-awd">
								<a href="https://www.vlive.tv/post/0-18322984" target="__blank">
									THE BOYZ - 소년 (boy) @ Debut Showcase
								</a>
							</div>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/yuk0LHFSlR8"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Apr 3<div>2018</div>
							</span>
						</div>
						<div className="memory-right">GIDDY UP</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/DNH7X46gMjQ"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jul 12<div>2018</div>
							</span>
						</div>
						<div className="memory-right">KeePer</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/oR-QJtmn6ww"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Aug 27<div>2018</div>
							</span>
						</div>
						<div className="memory-right">DAZED scene of SPHERE</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/qzxg-ve7C-8"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Aug 30<div>2018</div>
							</span>
						</div>
						<div className="memory-right">Soribada Best K-Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>New Hallyu Rookie Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Sep 15<div>2018</div>
							</span>
						</div>
						<div className="memory-right">RIGHT HERE</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/JSEQiv5Z7p4"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Nov 28<div>2018</div>
							</span>
						</div>
						<div className="memory-right">Asia Artist Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>Male Rookie of the Year Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Nov 29<div>2018</div>
							</span>
						</div>
						<div className="memory-right">NO AIR</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/8n6pRkpVsyU"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 1<div>2018</div>
							</span>
						</div>
						<div className="memory-right">Melon Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>Best New Male Artist Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 10<div>2018</div>
							</span>
						</div>
						<div className="memory-right">MAMA Colab Stage</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/gj8gSfYBPPc"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 20<div>2018</div>
							</span>
						</div>
						<div className="memory-right">Korea Popular Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>Rookie of the Year Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jan 23<div>2019</div>
							</span>
						</div>
						<div className="memory-right">Gaon Chart Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>World Rookie of the Year Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jan 26<div>2019</div>
							</span>
						</div>
						<div className="memory-right">Fan-Con</div>
						<div className={`memory-source source-awd ${iphone}`}>
							THE BOYZ FIRST FAN-CON <i>THE CASTLE</i>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Apr 12<div>2019</div>
							</span>
						</div>
						<div className="memory-right">Birthday VLIVE</div>
						<div className={`memory-source source-awd ${iphone}`}>
							<a href="https://www.vlive.tv/post/0-18322635" target="__blank">
								HAPPY SUNWOO DAY ♡
							</a>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Apr 24<div>2019</div>
							</span>
						</div>
						<div className="memory-right">The Fact Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>Next Leader Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Apr 29<div>2019</div>
							</span>
						</div>
						<div className="memory-right">Bloom Bloom</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/Ty_3Vyqrlr4"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								May 7<div>2019</div>
							</span>
						</div>
						<div className="memory-right">THE BOYZ First Win</div>
						<div className={`memory-source source-awd ${iphone}`}>
							<p>Bloom Bloom @ The Show</p>
							<p style={{ marginBottom: '0' }}>
								<a href="https://www.vlive.tv/post/0-18322615" target="__blank">
									더비가 제일 먼저 축하해주세요😭
								</a>
							</p>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Aug 6<div>2019</div>
							</span>
						</div>
						<div className="memory-right">Video Music Awards Japan</div>
						<div className={`memory-source source-awd ${iphone}`}>Rising Star Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Aug 19<div>2019</div>
							</span>
						</div>
						<div className="memory-right">D.D.D</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/bTTczRe-Pj0"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Aug 23<div>2019</div>
							</span>
						</div>
						<div className="memory-right">Soribada Best K-Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>Rising Hot Star Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Nov 6<div>2019</div>
							</span>
						</div>
						<div className="memory-right">TATTOO</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/zCyZ5TtlW4Q"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Nov 29<div>2019</div>
							</span>
						</div>
						{size.width > 499 ? (
							<div className="memory-right">Korea Culture and Entertainment Awards</div>
						) : (
							<div className="memory-right">
								Korea Culture and<br /> Entertainment Awards
							</div>
						)}
						<div className={`memory-source source-awd ${iphone}`}>Rising Hot Star Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Nov 30<div>2019</div>
							</span>
						</div>
						<div className="memory-right">Melon Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>
							<span style={{ fontFamily: 'Montserrat', fontWeight: '500' }}>1</span>theK Performance Award
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 6<div>2019</div>
							</span>
						</div>
						<div className="memory-right">WHITE</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/_VSS0Twtn58"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 11<div>2019</div>
							</span>
						</div>
						<div className="memory-right">Concert</div>
						<div className={`memory-source source-awd ${iphone}`}>
							THE BOYZ FIRST EUROPE TOUR <i>[DREAMLIKE]</i>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Feb 9<div>2020</div>
							</span>
						</div>
						<div className="memory-right">REVEAL</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/PugZA26sj-8"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Feb 27<div>2020</div>
							</span>
						</div>
						<div className="memory-right">Japan Gold Disc Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>
							Best <span style={{ fontFamily: 'Montserrat', fontWeight: '500' }}>3</span> New Artists
							(Asia) Award
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Mar 16<div>2020</div>
							</span>
						</div>
						<div className="memory-right">The Fact Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>Danceperformer of the Year Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Apr 12<div>2020</div>
							</span>
						</div>
						<div className="memory-right">Birthday VLIVE</div>
						<div className={`memory-source source-awd ${iphone}`}>
							<a href="https://www.vlive.tv/post/0-18322362" target="__blank">
								Sun 탄생일 🌞🎂
							</a>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								May 12<div>2020</div>
							</span>
						</div>
						<div className="memory-right">GENERATION Z</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/CcIJc93D42Y"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								May 18<div>2020</div>
							</span>
						</div>
						<div className="memory-right">GENERATION Z : SUNWOO</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/xKsvrQYy_14"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jun 18<div>2020</div>
							</span>
						</div>
						<div className="memory-right">Road to Kingdom: Final Win</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/Km2xdEaYyjI"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
							<div className="source-awd">
								<a href="https://www.vlive.tv/post/0-15235799" target="__blank">
									Behind
								</a>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jul 29<div>2020</div>
							</span>
						</div>
						<div className="memory-right">
							A to BOYZ: <span style={{ fontFamily: 'Montserrat', fontWeight: '600' }}>100</span> Degrees
						</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/Ftpxg88pC2I"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Aug 13<div>2020</div>
							</span>
						</div>
						<div className="memory-right">Soribada Best K-Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>New Hallyu Male Performance Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Sep 19<div>2020</div>
							</span>
						</div>
						<div className="memory-right">Concert</div>
						<div className={`memory-source source-awd ${iphone}`}>
							<p>
								THE BOYZ FIRST ONLINE CONCERT <i>[RE:AL]</i>
							</p>
							<p style={{ marginBottom: '0' }}>
								<a href="https://www.vlive.tv/post/1-18189967" target="__blank">
									Behind
								</a>
							</p>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Sep 21<div>2020</div>
							</span>
						</div>
						<div className="memory-right">The Stealer</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/c_e-IC0VwZM"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Sep 30<div>2020</div>
							</span>
						</div>
						<div className="memory-right">The Stealer First Win</div>
						<div className={`memory-source source-awd ${iphone}`}>@ Show Champion</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Oct 1<div>2020</div>
							</span>
						</div>
						<div className="memory-right">The Stealer Win</div>
						<div className={`memory-source source-awd ${iphone}`}>@ M Countdown</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Oct 6<div>2020</div>
							</span>
						</div>
						<div className="memory-right">The Stealer Win</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/IZkgdqdJNEs"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Oct 8<div>2020</div>
							</span>
						</div>
						<div className="memory-right">The Stealer Win</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/wM8CJSWFZgc"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Nov 28<div>2020</div>
							</span>
						</div>
						<div className="memory-right">Asia Artist Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>AAA Best Choice</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 1<div>2020</div>
							</span>
						</div>
						<div className="memory-right">SoundCloud</div>
						<div className={`memory-source source-awd ${iphone}`}>광합성 (Prod. CyA) by SUNWOO</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 5<div>2020</div>
							</span>
						</div>
						<div className="memory-right">Melon Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>
							<span style={{ fontFamily: 'Montserrat', fontWeight: '500' }}>1</span>theK Original Content
							Award
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 5<div>2020</div>
							</span>
						</div>
						<div className="memory-right">Fan-Con</div>
						<div className={`memory-source source-awd ${iphone}`}>
							THE BOYZ FAN-CON <i>THE FILM FESTIVAL</i>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 7<div>2020</div>
							</span>
						</div>
						<div className="memory-right">Christmassy!</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/lVDYdpl2sGI"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Dec 12<div>2020</div>
							</span>
						</div>
						<div className="memory-right">The Fact Music Awards </div>
						<div className={`memory-source source-awd ${iphone}`}>Global Hottest Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jan 7<div>2021</div>
							</span>
						</div>
						<div className="memory-right">First OST - Priority (Run On OST)</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/iN6xkOpNkeU"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jan 9<div>2021</div>
							</span>
						</div>
						<div className="memory-right">Golden Disk Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>Next Generation Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jan 24<div>2021</div>
							</span>
						</div>
						<div className="memory-right">APAN Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>Next Generation Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Jan 31<div>2021</div>
							</span>
						</div>
						<div className="memory-right">Seoul Music Awards</div>
						<div className={`memory-source source-awd ${iphone}`}>Best Performance Award</div>
					</div>
					<div className="memory-date">
						<div className="memory-left">
							<span className="memory-month">
								Feb 24<div>2021</div>
							</span>
						</div>
						<div className="memory-right">Breaking Dawn</div>
						<div className={`memory-source source-vid ${iphone}`}>
							<div className="memory-vid" style={{ aspectRatio: '560/315' }}>
								<iframe
									src="https://www.youtube.com/embed/rsXWBjGcOUc"
									frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BackTop>
				<span>
					<img className="top-arrow" src="/assets/images/arrow.png" />
				</span>
			</BackTop>
		</React.Fragment>
	);
}

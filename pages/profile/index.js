/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 22:08:41
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-07 20:39:37
 * @FilePath: /sw-chunyang/pages/profile/index.js
 */
import React, { useEffect, useState } from 'react';
import { Row, Col, Radio, Table } from 'antd';
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

const tableColumns = [
	{
		title: '',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: '',
		dataIndex: 'dot',
		key: 'dot'
	},
	{
		title: '',
		dataIndex: 'value',
		key: 'value'
	}
];

const koreanData = [
	{
		key: '1',
		name: '본명',
		dot: '•',
		value: '김선우 (金善旴, Kim Sun Woo)'
	},
	{
		key: '2',
		name: '출생',
		dot: '•',
		value: '2000년 4월 12일 (20세)'
	},
	{
		key: '3',
		name: '',
		dot: '',
		value: '서울특별시 강남구 삼성동'
	},
	{
		key: '4',
		name: '국적',
		dot: '•',
		value: '대한민국'
	},
	{
		key: '5',
		name: '본관',
		dot: '•',
		value: '광산 김씨'
	},
	{
		key: '6',
		name: '신체',
		dot: '•',
		value: '177.4cm, 58kg, 265~270mm, B형'
	},
	{
		key: '7',
		name: '소속사',
		dot: '•',
		value: '크래커엔터테인먼트'
	},
	{
		key: '8',
		name: '소속 그룹',
		dot: '•',
		value: '더보이즈'
	},
	{
		key: '9',
		name: '가족',
		dot: '•',
		value: '할아버지, 할머니, 아버지, 어머니, 여동생(2002년생)'
	},
	{
		key: '10',
		name: '학력',
		dot: '•',
		value: '건영장안유치원'
	},
	{
		key: '11',
		name: '',
		dot: '',
		value: '성남장안초등학교'
	},
	{
		key: '12',
		name: '',
		dot: '',
		value: '장안중학교 → 전의중학교 → 분진중학교 (졸업)'
	},
	{
		key: '13',
		name: '',
		dot: '',
		value: '한국예술고등학교 → 한림연예예술고등학교 실용음악과 (졸업)'
	},
	{
		key: '14',
		name: '취미 / 특기',
		dot: '•',
		value: '축구, 기타, 작사, 작곡'
	},
	{
		key: '15',
		name: '포지션',
		dot: '•',
		value: '메인래퍼, 서브보컬'
	},
	{
		key: '16',
		name: '별명',
		dot: '•',
		value: '별명 문단 참조'
	}
];

const chineseData = [
	{
		key: '1',
		name: '本名',
		dot: '•',
		value: '김선우 (金善旴, Kim Sun Woo)'
	},
	{
		key: '2',
		name: '出身',
		dot: '•',
		value: '2000年4月12日(20歲)'
	},
	{
		key: '3',
		name: '',
		dot: '',
		value: '首爾特別市江南區三成洞'
	},
	{
		key: '4',
		name: '國籍',
		dot: '•',
		value: '大韓民國'
	},
	{
		key: '5',
		name: '籍貫',
		dot: '•',
		value: '廣山金氏'
	},
	{
		key: '6',
		name: '身體資訊',
		dot: '•',
		value: '177.4cm, 58kg, 265~270mm, B型'
	},
	{
		key: '7',
		name: '經紀公司',
		dot: '•',
		value: 'Cre.ker Entertainment'
	},
	{
		key: '8',
		name: '所屬團體',
		dot: '•',
		value: 'THE BOYZ'
	},
	{
		key: '9',
		name: '家庭成員',
		dot: '•',
		value: '爺爺、奶奶、爸爸、媽媽、妹妹'
	},
	{
		key: '10',
		name: '學歷',
		dot: '•',
		value: '건영장안유치원'
	},
	{
		key: '11',
		name: '',
		dot: '',
		value: '성남장안초등학교'
	},
	{
		key: '12',
		name: '',
		dot: '',
		value: '장안중학교 → 전의중학교 → 분진중학교 (졸업)'
	},
	{
		key: '13',
		name: '',
		dot: '',
		value: '한국예술고등학교 → 한림연예예술고등학교 실용음악과 (졸업)'
	},
	{
		key: '14',
		name: '興趣 / 特長',
		dot: '•',
		value: '足球、吉他、作詞、作曲'
	},
	{
		key: '15',
		name: '定位',
		dot: '•',
		value: 'Main Rapper、Sub Vocal'
	},
	{
		key: '16',
		name: '暱稱',
		dot: '•',
		value: '請參考下文'
	}
];

export default function Profile() {
	const size = useWindowSize();

	const [ lang, setLang ] = useState('k');

	const onChange = (e) => {
		// console.log(`radio checked:${e.target.value}`);
		setLang(e.target.value);
	};

	return (
		<React.Fragment>
			<div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>

			<div className="fix-content">
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
							{lang == 'k' ? (
								<div className="profile-right-content profile-korean">
									<Table
										bordered={false}
										pagination={false}
										disableAutoscroll
										columns={tableColumns}
										dataSource={koreanData}
									/>
									<div className="profile-more">
										<div className="profile-box">
											<h2>갈색 둥글한게 다 저예요</h2>
										</div>
									</div>
								</div>
							) : (
								<div className="profile-right-content">
									<Table
										className="profile-chinese"
										bordered={false}
										pagination={false}
										disableAutoscroll
										columns={tableColumns}
										dataSource={chineseData}
									/>
								</div>
							)}
						</div>
					</Col>
				</Row>
			</div>
		</React.Fragment>
	);
}

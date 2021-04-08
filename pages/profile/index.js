/*
 * @Author: Jinqi Li
 * @Date: 2021-04-06 22:08:41
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-08 14:04:07
 * @FilePath: \sw-chunyang\pages\profile\index.js
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
		value: '2000년 4월 12일 (22세)'
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
		value: '2000年4月12日(22歲)'
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
											<h3>갈색 둥글한게 다 저예요</h3>
											<div className="profile-box-border">
												<p>서누 : 선우를 발음대로 쓴 것.</p>
												<p>너구리 : 닮아서.</p>
												<p>쪼푸(초코푸들), 도토리, 밤, 몰티져스 등 : 두상이 동글동글하고 얼굴이 작아서 자주 언급된다.</p>
												<p>애늙은이 : 방송에서 즙을 챙겨먹는 모습이 애늙은이 같아서 붙은 별명이다.</p>
												<p>아잠만 : 동물의 숲 시리즈 등장 캐릭터인 아잠만(오리)을 닮았다.</p>
												<p>
													효자 : 소통하는 걸 굉장히 좋아해서 붙은 별명이다. 공카에는 매일 빠짐없이 '선우의 하루'를 쓰고, V LIVE도 혼자서
													1시간 이상을 채우곤 한다. 위더보(멤버 트위터)에는 최소 4장, 많게는 여러 스레드에 걸쳐 셀카를 올려주며 팬들의휴대폰
													용량을 꽉 채워주고 있다.
												</p>
												<p>분당동 꿀벅지, 분당동 기타천재, 분당동 꼬질이</p>
											</div>
										</div>
										<div className="profile-box">
											<h3>더보이즈의 광합성, 선우</h3>
											<div className="profile-box-border">
												<p>
													더보이즈 내 분위기메이커이며, 착하고 순한 성격이지만 어린 나이에 비해 꽤나 냉정하고 잘못된 게 있으면 휘어잡을정도로
													의지가 강하고 카리스마 있는 성격이다.
												</p>
												<p>
													애교는 시키면 하는 편이지만 현타가 오래 남는 편. 꽃미남 분식집 비하인드에서는 누나 팬에게 애교를 해야 하는 장면에서
													매우 진지한 태도와 굳은 결심을 갖고 애교를 한 후 고개를 푹 숙이는 모습을 볼 수 있다.
												</p>
												<p>
													본인이 애교에 취약한 만큼 멤버들의 애교도 잘 못 참는다. 멤버들이 애교를 부리면 고개가 절로 내려가곤 한다. 그래도 애교
													후 몰려오는 부끄러움에 주저앉은 멤버 형을 꼭 안아주는 넓은 아량도 가지고 있다. 2018년 5월{' '}
													<i>옥상달빛의옥탑라됴</i>에 따르면 특히 제이콥 형의 애교가 버티기 힘들다고 했는데, 제이콥이 애교마저 진지하고 열심히
													하기 때문이라고 한다.
												</p>
												<p>
													초딩입맛+애늙은이라는 상반된 이미지를 가지고 있기도 하다. 맛살을 좋아하고 쓴 커피 대신 초코 음료를
													선호하는초딩입맛이지만, 건강을 위해 멤버들은 손대지 않는 즙을 챙겨먹기도 한다.
												</p>
												<p>
													무대 위에서의 세심하고 카리스마 넘치는 모습과는 달리 일상에서는 덜렁미가 넘친다. 물건을 자주 잃어버린다는 멤버들의 증언이
													끊이지 않는다. 본인이 소지품을 잘 챙기려고 노래를 만들었지만 그 노래를 까먹어서 소용없어졌다.
												</p>
												<p>
													말재주가 상당히 좋다. 팀 내 막내임에도 V LIVE 등을 보면 멘트를 정리하는 능력도 좋고, 진행도 잘 한다. 선우가
													쓴공카 편지글과 각종 이벤트에 써주는 친필 메시지에 감동을 받는 팬들이 많다. 팬들을 향한 따뜻한 말과 자신의 일, 그리고
													팀에 대한 애정을 진중하고 담담한 문체로 담아내 감동을 준다. 선우는 의젓한 면모와 동시에 재치있는 모습을가진 멤버이기도
													한데, 형들을 쥐락펴락하는 현실 말빨과 아무말인 듯하지만 말이 되는 진행 멘트들이 재치있다. 더보이즈 실세인 현재조차 선우
													앞에선 속수무책. 그래서인지 더보이즈 예능이나 인터뷰 등에서는 선우가 MC가 되어 주도하는 일이 많다.
												</p>
												<p>
													한편 무대에서의 파워풀한 모습과는 정반대로 겁이 많은 편. OFF THE BOYZ - 한겨울의 납량특집에서는 어둠이 무서워
													끊임없이 꿍얼꿍얼대는, 겁은 없지만 어둠과 귀신을 싫어하는 김선우씨를 볼 수 있다.
												</p>
												<p>MBTI는 ENTP-A가 나왔다.</p>
											</div>
										</div>
										<div className="profile-box">
											<h3>The sun rises when I start rapping</h3>
											<div className="profile-box-border">
												<p>
													고등래퍼 출연 당시, 보컬에서 랩 포지션으로 전향한 지 얼마 되지 않았음에도 불구하고 스윙스의 편견을 깰 정도의 수준급 랩
													실력을 선보였다. 지금은 고등래퍼 출연 당시보다 더 실력이 늘었다. 랩 톤이 안정적이고 딕션이 좋아 앞으로의 성장을
													기대해보아도 좋을 듯. 연습생패치에서도 랩 하는 모습과 자작곡 <i>선우의 하루</i>를 선보인 만큼 회사에서도 선우의
													실력을 믿고 있는 듯하다. 보컬 트레이너 장진영이 <i>I'm Your Boy</i>의 랩 파트 디렉팅을 선우에게
													맡겼는데, 디렉팅에도 소질을 보였다.
												</p>
												<p>
													보컬 실력 역시 수준급. <i>I'm Your Boy</i>에서는 랩 파트와 보컬 파트 모두 맡았다. 보컬과 랩 모두 되기
													때문에 멜로디컬한 랩도 잘 소화한다. 앞서 언급한 <i>선우의 하루</i> 후반부가 대표적 사례.
												</p>
												<p>
													언어적 감각도 뛰어나 작사도 곧잘 한다. 멤버 상연의 데이즈드 프로필 필름 BGM의 작사가가 바로 선우다. V
													LIVE를통해 한 시간 정도의 짧은 시간 안에 완성한 가사라고 밝혔다. 데뷔곡 <i>소년(Boy)</i>의 랩 파트를
													시작으로 모든 앨범에서 적어도 한 곡은 선우가 작사에 이름을 올리고 있다.
												</p>
												<p>
													춤 실력도 준수한 편. 꽃미남 분식집 8화를 통해 베일에 가려졌던 선우의 춤 실력이 공개되었다. 군더더기 없는 깔끔한
													춤선을 선보인다. HTH 이벤트 댄스브레이크 직캠을 보면 선우의 춤선을 더 잘 볼 수 있다.
												</p>
												<p>
													데뷔곡 <i>소년(Boy)</i>의 경우 동선이 쉼없이 바뀜에도 흐트러지지 않고 깔끔한 춤선과 강약 조절을 선보인다.
												</p>
												<p>보컬과 춤에도 능한 래퍼를 표방하는 다부진 모습으로 보아 앞으로 다방면의 발전을 기대해도 좋을 듯.</p>
												<p>
													더보이즈 데뷔조 공개 당시 유일한 랩 포지션으로 공개되었지만 댄스도 곧잘 하기 때문에 퍼포먼스 라인에 속해 있다. 시상식
													등에서 하는 소수 멤버의 댄스브레이크에도 종종 참여한다.
												</p>
											</div>
										</div>
										<div className="profile-box">
											<h3>선우가 선우했다</h3>
											<div className="profile-box-border">
												<p>
													멤버들 사이에서 선우가 의도했건 의도하지 않았건 사고를 쳤거나, 선우 혼자 웃지 못할 상황을 맞이했을 때 사용된다. 아래는
													선우가 선우했을 때의 상황들이다.
												</p>
												<p>
													핫윙 8조각을 시켜서 큐와 함께 반씩 나눠먹었는데, 선우는 4조각을 다 먹고 큐는 2조각째 먹는 상황에서 남은 2조각을
													나눠먹자고 했다. 큐가 "나 2조각밖에 안 먹었는데?"라고 했더니 "알고 있었어?"라고 했다고 한다.
												</p>
												<p>
													뉴와 영훈의 연습실에서 V LIVE를 하면서 날치알 주먹밥을 섞다가 연습실에 날치알을 뿌렸다. 해당 사건에 대해 상연과
													큐가 "선우가 선우했다"는 표현을 사용했다.
												</p>
												<p>
													2020년 12월 31일 연습을 마치고 밤 11시 40분경 숙소로 돌아왔는데, 형들은 새해 카운트다운을 준비하는 동안
													선우는 샤워를 하고 있었고, 사색에 잠기다가 결국 2021년 1월 1일을 화장실에서 맞이해 포효했다고 한다.
												</p>
												<p>
													2019년부터 크리스마스를 보내지 못하고 있다(...). 2019년에는 자고 일어나니 밤 11시였고, 2020년에는 아예
													12월 26일 1시 30분에 일어났다.
												</p>
											</div>
										</div>
									</div>
								</div>
							) : (
								<div className="profile-right-content profile-chinese">
									<Table
										bordered={false}
										pagination={false}
										disableAutoscroll
										columns={tableColumns}
										dataSource={chineseData}
									/>
									<div className="profile-more">
										<div className="profile-box">
											<h3>咖啡色圓圓的東西就是我</h3>
											<div className="profile-box-border">
												<p>Sunu : 從Sunwoo的發音中產生的</p>
												<p>浣熊 : 因為長得像</p>
												<p>巧克力貴賓, 橡果, 栗子, 麥提莎等: 因為頭型很圓、臉又很小所以經常被拿來比喻</p>
												<p>小老頭 : 因為在節目中喝健康飲品（汁）像老頭子所獲得的暱稱</p>
												<p>卿德 : 因為長得像動物森友會裡的角色卿德（鴨子）</p>
												<p>
													孝子 : 因為非常喜歡跟粉絲溝通所獲得的暱稱。在官咖幾乎每天寫下“善旴的一天”，V
													LIVE也能獨自直播一小時以上。在成員推特we_the_boyz上傳自拍照時少則四張，多則形成回文串，把粉絲的手機容量塞得滿滿的。
												</p>
												<p>其他還有盆唐洞蜜大腿、盆唐洞吉他天才、盆唐洞小髒鬼等</p>
											</div>
										</div>
										<div className="profile-box">
											<h3>THE BOYZ的光合作用，善旴</h3>
											<div className="profile-box-border">
												<p>
													是THE
													BOYZ中的氣氛製造機，雖然是善良溫和的性格，卻有著超越小小年紀的冷靜，有著如果犯了錯誤就會抓出來的堅強意志，以及有領袖魅力的個性。
												</p>
												<p>
													雖然要求的話也會撒嬌，但是會久久沈浸在衝擊中。花美男小吃店幕後花絮中有必須對姊姊粉撒嬌
													的場面，可以看到他非常真摯地下定決心撒嬌後頭抬不起來的模樣。因為自己撒嬌很弱，所以也很難承受成員的撒嬌，在成員撒嬌的時候會不由自主地低下頭，不過也有著可以擁抱撒嬌後因為害羞而癱坐在地的哥哥們的雅量。2018年5月在屋頂月光的屋頂電台中特別強調，要忍受Jacob哥的撒嬌很辛苦，因為Jacob就連撒嬌也很嚴肅認真。
												</p>
												<p>
													另外他也有著小學生口味+小老頭的雙重形象，雖然是喜歡蟹肉棒、不喝苦的咖啡只喝巧克力飲品的小學生口味，為了健康卻會飲用成員們碰都不碰的汁。
												</p>
												<p>
													不同於在舞台上洗練而充滿魅力的模樣，日常中其實是個冒失鬼，遺失物品的證言在成員口中從未間斷，雖然為了提醒自己帶東西創作了一首歌，卻因為忘記歌的內容而派不上用場。
												</p>
												<p>
													他的口才也相當好，雖然是團隊中的老么，但從V
													LIVE等場合可以看出他整理發言的能力不錯，推進流程也做得很好。善旴在官咖寫的信以及各種活動中寫下的親筆訊息，經常讓粉絲十分感動。對粉絲溫暖的愛意、自己的大小事還有對團隊的熱情，用真摯而簡樸的文體留下，打動人心。善旴可說是同時具備端莊儀表和機靈腦袋的成員，把哥哥們玩弄在手掌心的口才雖然聽起來像隨口胡說，實際上是很有sense的主持話術，就連THE
													BOYZ中的實權賢在也會對善旴束手無策，或許也因為如此，THE BOYZ的綜藝和訪問中，善旴作為MC主導的場合不少。
												</p>
												<p>
													和舞台上充滿力量的表現相反的，還有他的膽小。在OFF THE BOYZ –
													寒冬中的納涼特輯中，可以看到因為怕黑所以一直嘟囔不停，聲稱自己不是害怕只是討厭黑暗和鬼怪的金善旴小朋友。
												</p>
												<p>他的MBTI測驗結果是ENTP-A。</p>
											</div>
										</div>
										<div className="profile-box">
											<h3>The sun rises when I start rapping</h3>
											<div className="profile-box-border">
												<p>
													出演高等Rapper時，儘管從Vocal定位轉換成Rap定位的時間不長，卻展現出了足以讓打破Swings偏見的高水準Rap實力，現在的實力較高等Rapper時期也提升了很多。Rap的語調穩定、發音很好，值得期待他未來的成長。在練習生筆記中也揭露了Rap的樣貌還有自作曲＜善旴的一天＞，可見公司很肯定他的實力。聲樂教練장진영將＜I'm
													Your Boy＞Rap部分的指導交給了善旴，而他在指導方面也展現了天份。 Vocal的實力也有相當水準，在＜I'm Your
													Boy＞中同時負責了Rap和Vocal的部分，因為兩方面都擅長，旋律感強的Rap也能好好消化。前言提到的＜善旴的一天＞後半部分，就是具代表性的例子。
												</p>
												<p>
													他的語言感官優異，作詞自然也不錯，成員上淵的Dazed profile flim BGM的作詞家就是善旴，事實上，這是在僅約一個小時的V
													LIVE直播內就完成的歌詞。以出道曲＜少年(Boy)＞中的Rap部分為起點，所有專輯中至少有一首歌的作詞名單中列出了善旴的名字。
												</p>
												<p>
													舞蹈實力也相當優秀，花美男小吃店第八集中公開了善旴藏在神秘面紗背後的舞蹈實力，展示了不拖泥帶水的俐落舞姿，從HTH活動中的Dance
													break直拍可以更清楚地看到善旴的舞蹈線條。以出道曲＜少年(Boy)＞為例，即使動線不停在變動，仍然不會產生混亂，可以看出乾淨的舞蹈線條以及強弱調節的能力。
												</p>
												<p>
													標榜為歌唱和舞蹈都擅長的Rapper，展現了堅實的樣貌，之後可以期待他多方位發展的模樣，作為THE
													BOYZ出道組公開當時唯一的Rap定位成員，因為舞蹈水準高被歸類在表演line中，在頒獎典禮中也和少數成員一起參與Dance
													Break的演出。
												</p>
											</div>
										</div>
										<div className="profile-box">
											<h3>善旴又善旴了</h3>
											<div className="profile-box-border">
												<p>成員間用來形容因為善旴無意間闖禍，形成只有善旴一個人笑不出來時的狀況。下列情況都是善旴又善旴了的情形。</p>
												<p>
													點了八塊雞翅和Q一人一半分著吃，善旴已經吃了四隻而Q吃了兩隻的時候，善旴提議剩下的兩隻一人一隻。當Q說：「但是我只吃了兩隻耶？」的時候回答：「原來你知道啊！」
												</p>
												<p>
													在New和泳勛的練習室一邊進行V
													LIVE直播一邊吃飛魚卵飯糰的時候，在攪拌飯糰內餡時打翻了飛魚卵，上淵和Q評價這個事件都使用了「善旴又善旴了」這個句子來形容。
												</p>
												<p>
													2020年12月31日，練習結束後在晚上11點40分左右回到宿舍，在哥哥們準備新年倒數的時候善旴先去洗澡，因為沈浸在思考中錯過倒數，在浴室中咆哮著迎接了2021年的1月1日。
												</p>
												<p>從2019年開始就沒有過聖誕節了，2019年是一覺醒來已經晚上11點，2020年則是到了12月26日的1點30分才醒來。</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</Col>
				</Row>
			</div>

			<div style={{ fontSize: '10px', textAlign: 'center', paddingBottom: '10px' }}>
				<i>
					Reference:{' '}
					<a
						style={{ color: '#000', textDecoration: 'underline' }}
						href="https://namu.wiki/w/%EC%84%A0%EC%9A%B0(%EB%8D%94%EB%B3%B4%EC%9D%B4%EC%A6%88)"
					>
						Namu Wiki
					</a>
				</i>
			</div>
		</React.Fragment>
	);
}

/*
 * @Author: Jinqi Li
 * @Date: 2021-04-09 12:38:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 20:27:45
 * @FilePath: /sw-chunyang/pages/message/index.js
 */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Navberger from '../components/navberger';
import { BackTop, Row, Col, Card, List, Button, Skeleton, message, Form, Input } from 'antd';
import { server } from '../../config';
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

export default function Message({ comments }) {
	const size = useWindowSize();
	const router = useRouter();

	const [ isSubmitting, setIsSubmitting ] = useState(false);

	const createComment = async (values) => {
		// console.log(JSON.stringify(values));
		const res = await fetch(`${server}/api/comments`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		});
		setIsSubmitting(false);
		message.success('Message sent success!');
		router.reload();
	};
	const handleSubmit = (values) => {
		// console.log(`values: ${JSON.stringify(values)}`);
		setIsSubmitting(true);
		createComment(values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<React.Fragment>
			<div className="fix-top">{size.width > 839 ? <Navbar /> : <Navberger />}</div>
			<div className="fix-content fix-message">
				<Row>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<div className="message-left">
							<div className="message-title">
								<h1>
									MESSAGE {'  '}
									<span>
										<img src="/assets/images/heart.png" />
									</span>
									<br /> TO <span>SUNWOO</span>
								</h1>
							</div>
							<div className="message-div">
								{isSubmitting ? (
									<h4 style={{fontFamily:"Ageo", color: "#feb620"}}>Sending...</h4>
								) : (
									<div className="message-form">
										<Form onFinish={handleSubmit} onFinishFailed={onFinishFailed}>
											<Form.Item
												name="content"
												rules={[
													{
														required: true,
														message: 'Please input your message content!'
													}
												]}
											>
												<Input.TextArea placeholder="Message" />
											</Form.Item>

											<Form.Item
												name="username"
												rules={[
													{
														required: true,
														message: 'Please input your name!'
													}
												]}
											>
												<Input placeholder="Name" />
											</Form.Item>

											<Form.Item>
												<Button type="primary" htmlType="submit">
													SEND
												</Button>
											</Form.Item>
										</Form>
									</div>
								)}
							</div>
						</div>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<div className="fetch-comment">
								{comments.map((item, index) => (
									<div key={item._id}>
										{/* <a href={`../${item._id}`}> */}
										<Card style={{ marginTop: 12 }} title={item.username}>
											<p>{item.content}</p>
										</Card>
										{/* </a> */}
									</div>
								))}
						</div>
					</Col>
				</Row>
			</div>
			<BackTop>
				<span>
					<img className="top-arrow" src="/assets/images/arrow.png" />
				</span>
			</BackTop>
		</React.Fragment>
	);
}

Message.getInitialProps = async () => {
	const res = await fetch(`${server}/api/comments`);
	const { data } = await res.json();
	// console.log(data)
	return { comments: data };
};

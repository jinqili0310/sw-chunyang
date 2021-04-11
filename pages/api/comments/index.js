/*
 * @Author: Jinqi Li
 * @Date: 2021-04-11 12:04:44
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 15:46:57
 * @FilePath: /sw-chunyang/pages/api/comments/index.js
 */
import dbConnect from '../../../utils/dbConnect';
import Comment from '../../../models/Comment';

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const comments = await Comment.find({}).sort({ createdAt: 'desc'}).exec();;

				res.status(200).json({ success: true, data: comments });
			} catch (error) {
				res.status(504).json(error)
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const comment = await Comment.create({
					content: req.body.content,
					username: req.body.username
				});

				res.status(201).json({ success: true, data: comment });
			} catch (error) {
				res.status(400).json({ success: false });
				console.log(error);
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
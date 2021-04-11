/*
 * @Author: Jinqi Li
 * @Date: 2021-04-11 12:11:49
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 14:22:40
 * @FilePath: /sw-chunyang/models/Comment.js
 */
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true
		},
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
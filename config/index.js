/*
 * @Author: Jinqi Li
 * @Date: 2021-04-11 12:02:35
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 15:52:29
 * @FilePath: /sw-chunyang/config/index.js
 */
const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://swchunyang.com';
/*
 * @Author: Jinqi Li
 * @Date: 2021-04-11 12:05:43
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-11 12:08:59
 * @FilePath: /sw-chunyang/utils/dbConnect.js
 */
import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected)
}

export default dbConnect;

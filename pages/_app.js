/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-06 23:00:18
 * @FilePath: /sw-chunyang/pages/_app.js
 */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../styles/globals.css';
import 'antd/dist/antd.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>ChunYang - Happy SUNWOO Day</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
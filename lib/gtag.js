/*
 * @Author: Jinqi Li
 * @Date: 2021-04-07 13:16:16
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-04-07 13:23:49
 * @FilePath: \sw-chunyang\lib\gtag.js
 */
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
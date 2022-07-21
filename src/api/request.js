import axios from './axios.js'
export const post = (url, data) =>
  axios.request({
    url,
    method: 'post',
    data
  })
export const get = (url) =>
  axios.request({
    url
  })

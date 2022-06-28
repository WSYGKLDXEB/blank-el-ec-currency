import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(config => {
  return config
}, err => Promise.reject(err))

// 响应拦截器
axios.interceptors.response.use(res => {
  return res
}, err => Promise.reject(err))

export {
  axios
}

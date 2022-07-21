import axios from 'axios'
import config from '../config'

// 环境判断
// 设置配置 根据开发 和 生产环境不一样
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
console.log(config.baseUrl.dev)
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    console.log(666)
  }

  // 定义axios的相关配置
  setInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      header: {}
    }
    return config
  }

  // 拦截器
  interceptors(interce) {
    // 请求拦截器
    interce.interceptors.request.use(
      (config) => {
        // console.log('请求拦截器')
        return config
      },
      (err) => Promise.reject(err)
    )

    // 响应拦截器
    interce.interceptors.response.use(
      (res) => {
        console.log('res', res)
        return res
      },
      (err) => Promise.reject(err)
    )
  }

  // 接口请求
  request(option) {
    const interce = axios.create()
    const options = {
      ...this.setInsideConfig(),
      ...option
    }
    // interce(传入属于该实例的配置信息)
    return interce(options)
  }
}

// const get = (url) => axios.get(url).catch((err) => err)
// export { axios, get }
export default new HttpRequest(baseUrl)

import {
  // axios,
  get
} from './request'
// import axios from 'axios'
// 菜单数据
// export const GetMenu = () => axios.get('api/asideData.json')
export const GetMenu = () => get('api/asideData.json')
export const GetData = () => get('/api/home/getData')

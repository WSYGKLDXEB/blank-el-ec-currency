import {
  axios
} from './request'

// 菜单数据
export const GetMenu = () => axios.get('api/asideData.json')

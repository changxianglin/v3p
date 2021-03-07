import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
})


// 请求拦截
service.interceptors.request.use(
  (config: any) => {
    config.headers["X-Token"] = "my token"
    return config
  },
  (error: any) => {
    // 错误处理
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if(res.code !== 2000) {
      console.log('错误')


      if(res.code === 5008 || res.code === 50012 || 50014) {
        console.log('登录权限一类')
        console.log('取消本地信息')
        console.log('重定向到具体页面')
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }
    }
  },
  (error) => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
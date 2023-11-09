import axios from 'axios'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
   // 从pinia里面获取token数据
  //  const userStore = useUserStore()
  //  // 统一错误提示
  //  ElMessage({
  //      type: 'warning',
  //      message: e.response.data.message
  //  })
   // 401 token失效处理
   // 1. 清除本地用户数据
   // 2. 跳转到登录页
  //  if (e.response.status == 401) {
  //      userStore.clearUserInfo()
  //      router.push('/login')
  //  }
  return Promise.reject(e)
})


export default httpInstance
import router from "@/router";
import { useUserStore } from '@/stores/user'

//全局未登入
router.beforeEach((to,from,next)=>{
    // 1. 从pinia里面获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    console.log('全局')
    console.log(token)
    if(!token&& to.path != "/login"){
        return next({path:"/login"})
    }
    next()
})
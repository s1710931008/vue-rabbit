import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from "@/apis/user";


export const useUserStore = defineStore('user',()=>{
    //1.定議用戶管理數據
    const userInfo = ref({})
    //2.定議獲取數據的action函數
    const getUserInfo = async ({account,password}) =>{
       const res = await loginAPI({account,password})
       userInfo.value = res.result
    }
    //3.以對象的格式把state和action return
    return {
        userInfo,
        getUserInfo
    }
},
{
  persist: true,
},
)
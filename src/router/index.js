import { createRouter, createWebHistory } from 'vue-router'

//引入組件位置
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component對應關係的位置
  routes: [
    {
      path: '/',
      component: Layout,
      // 二級分類
      children:[
        {
          //清空
          path:'',
          component: Home
        },
        {
          path:'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  //路由瀼動行為定制重頭開始
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router

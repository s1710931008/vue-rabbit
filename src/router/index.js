import { createRouter, createWebHistory } from 'vue-router'

//引入組件位置
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

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
          path:'category',
          component: Category
        },
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router

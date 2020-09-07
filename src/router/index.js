import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { Toast } from 'vant';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: "首页~", roles: false },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: "首页~"},
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const roles = 'user'

/**
 * 通过路由判断权限
 * 适用于多种权限管理
 */
router.beforeEach((to, from, next) => {
  // console.log(to.meta.roles)
  if (to.meta.roles) {
    // 需要验证用户权限
    // 判断本地是个否存在token
    if (localStorage.getItem('token')) {
      next()
    } else {
      Toast({
        message: '权限不足',
        duration: 3000
      });
      next(`/about?redirect=${to.path}`)
    }
  } else next()
})

export default router

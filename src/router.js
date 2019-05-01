import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Messages from './components/Messages'
import Message from './components/Message'


import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

 const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    }
  ]
})


router.beforeEach((to, from, next) => {
  NProgress.start()
  NProgress.set(0.1)
  return next()
})

router.afterEach(() => {
  setTimeout(() => NProgress.done(), 700)
})

export default router

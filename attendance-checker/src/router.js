import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import QR from './views/QR.vue'
import Roster from './views/Roster.vue'
import StudentEnroll from './views/StudentEnroll.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/qr',
      name: 'qr',
      component: QR
    },
    {
      path: '/studentEnroll',
      name: 'studentEnroll',
      component: StudentEnroll
    },
    {
      path: '/roster',
      name: 'Roster',
      component: Roster
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})

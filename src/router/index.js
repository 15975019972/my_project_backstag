import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Login=()=>import('views/login/Login.vue')
const Welcome=()=>import('views/welcome.vue')

const routes = [
   {
      path:'',
      redirect: '/login'
   },{
     path:'/login',
     component:Login
   },{
     path:'/welcome',
     component:Welcome
   }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL

})

export default router

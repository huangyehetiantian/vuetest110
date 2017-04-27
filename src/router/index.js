import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/Content.vue'
import product from '../components/product.vue'
import cailiao from '../components/cailiao.vue'
import index from '../components/indexpage.vue'
import student from '../components/student.vue'
import teacher from '../components/teacher.vue'
import niantu from '../components/niantu.vue'
import bookstore from '../components/bookstore.vue'
import ziyuan from '../components/ziyuan.vue'
import shoucang from '../components/shoucang.vue'
import zhuce from '../components/zhuce.vue'
import login from '../components/login.vue'
Vue.use(Router)
const routes = [
  {
    path: '',
    name: 'app',
    components: {
      default: App
    }
  },
  {
    path: '/product',
    name: 'product',
    component: product,
    children: [{
      path: '/niantu',
      name: 'niantu',
      component: niantu
    },
    {
      path: '/bookstore',
      name: 'bookstore',
      component: bookstore
    }
    ]
  },
  {
    path: '/cailiao',
    name: 'cailiao',
    component: cailiao
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/student',
    name: 'student',
    component: student
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: teacher
  },
  {
    path: '/ziyuan',
    name: 'ziyuan',
    component: ziyuan
  },
  {
    path: '/shoucang',
    name: 'shoucang',
    component: shoucang
  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: zhuce
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]
export default new Router({
  routes
})


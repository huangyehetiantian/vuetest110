import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/Content.vue'
import product from '../components/product.vue'
import cailiao from '../components/cailiao.vue'
import student from '../components/student.vue'
import teacher from '../components/teacher.vue'
Vue.use(Router)
const routes = [
  {
    path: '',
    name: 'app',
    components: {
      default: App,
      a: product
    }
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/cailiao',
    name: 'cailiao',
    component: cailiao
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
  }
]
export default new Router({
  routes
})


import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'
Vue.use(ElementUI)
Vue.use(less)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  // History 模式
  mode: 'history',
  base:'/vue-less/dist/',
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

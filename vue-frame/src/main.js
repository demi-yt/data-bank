import Vue from 'vue' // vue
import App from './App.vue' // vue主页面
import VueRouter from 'vue-router' // vue路由管理
import routers from './router/router' // 引用 routers 对象
import Vuex from 'vuex' // vue状态管理
import iView from 'iview' // UI组件
import './assets/css/common.css';
import '@/assets/less/index.less';
import { axios } from './utils/axiosHttp' // http封装方法
import ElementUI from 'element-ui'


import * as util from '@/utils/utils';

import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'


Vue.config.productionTip = false
Vue.use(ElementUI) 
Vue.use(iView) // UI组件 
Vue.use(VueRouter) // vue路由
Vue.use(Vuex) // vue状态


Vue.prototype.$util = util
const router = new VueRouter({
    mode: 'history',
    routes: routers
})



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
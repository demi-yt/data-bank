//本目录放置路由相关代码
// 首页
import Home from '@/views/homePage/HomePage.vue'
const route = [
    {
        path: '/',
        name: 'layout',
        component: resolve=>require(['@/App.vue'],resolve),
        redirect: '/userHome',
        children: [
            {path: '/userHome',name: '首页',component: Home},
        ]
    },
];

export default route
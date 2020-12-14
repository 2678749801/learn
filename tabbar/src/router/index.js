import VueRouter from 'vue-router' //配置路由相关信息
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => //懒加载
    import ('../components/Home')
const HomeNews = () =>
    import ('../components/HomeNews')
const HomeMessages = () =>
    import ('../components/HomeMessages')
const About = () =>
    import ('../components/About')
const User = () =>
    import ('../components/User')
const Profile = () =>
    import ('../components/Profile')
    //通过vue.use安装插件
Vue.use(VueRouter)
    //创建路由对象
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        // beforeEnter: (to, from, next) => {
        //   // ...
        // },//路由独享守卫
        children: [{
                path: 'news',
                component: HomeNews
            },
            {
                path: 'messages',
                component: HomeMessages
            }
        ]
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:id',
        component: User,
        meta: {
            title: 'user'
        }
    },
    {
        path: '/profile',
        component: Profile
    },
]
const router = new VueRouter({
    //配置路由和映射关系
    routes,
    mode: 'history',
    linkActiveClass: 'active' //在index里改变活跃class
})
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})
export default router
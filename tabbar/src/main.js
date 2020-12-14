import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/index'
import { request } from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    axios,
    router,
    render: h => h(App)
})

axios.defaults.baseURL = 'http://152.136.185.210:8000'
axios.defaults.timeout = 5000
    //基本使用
axios({
        url: '/api/w6/home/multidata',
        params: { //专门针对get请求的参数拼接
            type: 'pop',
            page: 1
        }
    }).then(res => {
        console.log(res)
    })
    //axios发送并发请求
    // axios.all([axios({
    //         url: 'http://152.136.185.210:8000/api/w6/home/multidata',
    //     }), axios({
    //         url: 'http://152.136.185.210:8000/api/w6/home/data',
    //         params: {
    //             type: 'sell',
    //             page: 5
    //         }
    //     })])
    //     .then(results => {
    //         console.log(results)
    //     })
    //优化代码

axios.all([axios({
        url: '/api/w6/home/multidata',
    }), axios({
        url: '/api/w6/home/data',
        params: {
            type: 'sell',
            page: 5
        }
    })])
    .then(axios.spread((res1, res2) => {
        console.log(res1);
        console.log(res2)
    }))
    //创建axios实例

const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:8000',
    timeout: 5000
})
instance1({
    url: '/home/multidata'
}).then(res => {
    console.log(res)
})

//封装request 模块】、
//方案1
// import { request } from "./network/request"
// request({ //{}里面抱着的整体是request函数里要求的 config参数
//     url: '/home/multidata'
// }, res => {
//     console.log(res)
// })
//方案2
// import { request } from "./network/request"
// request({ 
//    baseConfig:{

//    },
//    success:function(res){

//    },
//    failure:function(rej){

//    }
// }, res => {
//     console.log(res)
// })
//方案3
// request({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err)
// })
//方案4
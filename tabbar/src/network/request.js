import axios from 'axios'
// export function request(config, success, failure) {
//     const instance = axios.create({
//         baseurl: "",
//         timeout: "1111"
//     })
//     instance(config).then(res => {
//             success(res)
//         })
//         .catch(err => {
//             failure(err)
//         })
// }
//方案1
// export function request(config, success, failure) {
//     //1.创建实例
//     const instance = axios.create({
//         baseUrl: 'http://152.136.185.210:8000',
//         timeout: 5000
//     })
//     instance(config).then(res => {
//             success(res);
//         })
//         .catch(err => {
//             failure(err)
//         })
// }
//方案2
// export function request(config) {
//     //1.创建实例
//     const instance = axios.create({
//         baseUrl: 'http://152.136.185.210:8000',
//         timeout: 5000
//     })
//     instance(config.baseConfig).then(res => {
//             config.success(res);
//         })
//         .catch(err => {
//             config.failure(err)
//         })
// }
//方案3
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseUrl: 'http://152.136.185.210:8000',
//             timeout: 5000
//         })
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }
//方案4
export function request(config) {
    //创建实例
    const instance = axios.create({
            baseUrl: 'http://152.136.185.210:8000',
            timeout: 5000
        })
        //2拦截器
    instance.interceptors.request.use(config => {
            //1.config中的一些信息不符合要求 添加header
            //2 比如每次发送网络请求时 都希望在界面中显示一个请求图标
            //3 某写网络请求 比如登录的token 必须携带特殊的信息
            return config
        }, err => {
            console.log(err)
        })
        //响应拦截 对收到的数据进行处理
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}
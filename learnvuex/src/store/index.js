import Vue from 'vue'
import Vuex from 'Vuex'
import mutations from './mutations'
import moduleA from './module/moduleA'
//安装插件
Vue.use(Vuex)
    //创建对象

const state = {
    counter: 1000,
    students: [
        { id: 110, name: '123', age: 18 },
        { id: 111, name: '1234', age: 24 },
        { id: 112, name: '12345', age: 30 },
        { id: 113, name: '123456', age: 11 }
    ],
    info: {
        name: 'kobe',
        age: 40,
        height: 1.98
    }
}
const store = new Vuex.Store({
        state,
        mutations,
        actions: {
            //异步操作
            // aUpdateInfo(context, payload) {
            //     setTimeout(() => {
            //         context.commit('updateInfo')
            //         console.log(payload.message);
            //         payload.success()
            //     }, 1000)
            // },
            aUpdateInfo(context, payload) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        context.commit('updateInfo')
                        console.log(payload);
                        resolve('11111')
                    }, 1000)
                })
            }

        },
        getters: {
            //通过变化来使用时
            powerCounter(state) {
                return state.counter * state.counter
            },
            more20stu(state) {
                return state.students.filter(s => s.age > 20)
            },
            moreAgestu(state) {
                return function(age) {
                    return state.students.filter(s => s.age > age)
                }
            }
        },
        modules: {
            a: moduleA
        }
    })
    //导出
export default store
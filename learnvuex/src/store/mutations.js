import { INCREMENT } from "./mutations-types"
export default {
    [INCREMENT](state) { //抽成常量
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    incrementCount(state, count) {
        state.counter += count
    },
    // incrementCount(state, payload) {
    //     state.counter += payload.count
    // },
    addStudent(state, stu) {
        state.students.push(stu)
    },
    updateInfo(state) {
        state.info.name = 'coderWhy' //因为在state里已初始化 所以可以响应式
            // state.info['address', '洛杉矶']
            //address 没有进行初始化 所以做不到响应式
            // Vue.set(state.info, 'address', '洛杉矶') 
            // 通过vue set 可以做到响应式
            //删除操作也得用 vue delete
    }
}
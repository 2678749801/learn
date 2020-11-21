export default {
    state: {
        name: '张三'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        },
    },
    actions: {
        aUpdateName(context) {
            setTimeout(() => {
                context.commit('updateName', 'wang')
            }, 1000)
        }
    },
    getters: {
        fullname(state) {
            return state.name + '1111111111'
        },
        fullname2(state, getters) {
            return getters.fullname + '222222'
        },
        fullname3(state, getters, rootState) {
            return getters.fullname2 + rootState.counter
        }
    }
}
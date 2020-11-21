<template>
  <div id="app">
    <h2>---------------module中的内容-------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改</button>
    <h2>{{message}}</h2>
    {{$store.state.counter}}
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">+++</button>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <h2>----------getters 相关信息----------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.moreAgestu(8)}}</h2>
    <h2>----------mutation---------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from './components/hellovuex/HelloVuex'
import {INCREMENT} from './store/mutations-types'
export default {
  components: { HelloVuex },
  name: 'App',
  data(){
    return{
      message:'我是1app',
      counter:0
    }
  },
  methods: {
    addition(){
      this.$store.commit(INCREMENT)
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      this.$store.commit('incrementCount',count)//负载 payload 额外参数
      //特殊的提交风格
      // this.$store.commit({
      //   type:'incrementCount',//时间类型
      //   count
      // })
    },
    
    addStudent(){
      const stu = { id: 114, name: "lil" ,age:40}
      this.$store.commit('addStudent',stu)
    },
    // updateInfo(){
    //   // this.$store.commit('updateInfo')
    //   this.$store.dispatch('aUpdateInfo',{
    //     message:'我是携带的信息',
    //     success:()=>{
    //       console.log('里面已经完成了')
    //     }//success 是回调函数
    //   })
    // },
    updateInfo(){
      // this.$store.commit('updateInfo')
      this.$store.dispatch('aUpdateInfo','我是携带的信息').then(res=>{
        console.log('里面完成了提交')
        console.log(res)
      })
    },
    updateName(){
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  },
}
</script>

<style>

</style>

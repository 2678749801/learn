<template>
  <div id="app">
    <!-- <router-link to="/home">shouye</router-link>
    <router-link to="/about">guanyu</router-link>
    <router-link :to="'/user/'+id">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:'19',height:'1.93'}}">profile</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">yonghu</button>
    <button @click="profileClick">profile</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      id:"ls"
    }
  },
  components: {
    
  },
  methods: {
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    },
    userClick(){
      this.$router.push('/user/' +this.id)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:'19'
        }
      })
    }
  },
}
</script>

<style>

</style>

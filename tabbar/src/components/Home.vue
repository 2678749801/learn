<template>
  <div>
    <p>我是首页</p>
    <router-link to="/home/news">xinwen</router-link>
    <router-link to="/home/messages">messages</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"Home",
  created() {
    document.title='yonghu'
  },
}
</script>

<style>

</style>
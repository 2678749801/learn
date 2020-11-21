<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"Scroll",
  props:{
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper, {
      click:true,
      pullUpLoad: this.pullUpLoad
    })
    this.scroll.scrollTo(0,0)
    //监听上拉加载更多
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
    this.scroll.refresh()
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    }
  },
}
</script>

<style scoped>

</style>
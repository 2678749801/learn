<template>
 <div class="wrapper" >
   <ul class="content">
   <li>分类列表</li>
   <li>分类列表</li>
   <li>分类列表</li>
   <li>分类列表</li>

   </ul>
   </div>
</template>

<script scoped>
import BScroll from 'better-scroll'
export default {
  name:"Category",
  data(){
    return{
      scroll:null
    }
  },
  created(){
   
  },
  mounted() {
    this.scroll= new BScroll(document.querySelector('.wrapper') ,{
      probeType:3,
      pullUpLoad:true
    })
    this.scroll.on('pullingUp',(position)=>{
      console.log(position);
    })
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多');
  })
},
methods: {
  btnClick(){
    console.log('btnClick');
  }
},
}
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: red;
}
</style>
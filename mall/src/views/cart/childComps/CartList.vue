<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll" :pull-up-load="true">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"/>
      
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
  name:"CartList",
  components:{
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(['cartList'])
  },
}
</script>

<style scoped>
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.cart-list{
  height: calc(100% - 44px);
}
</style>
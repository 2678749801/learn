<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list/>
    <bottom-bar/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
import CartList from './childComps/CartList.vue'
import BottomBar from './childComps/BottomBar.vue'
export default {
  components: { 
    NavBar,
    CartList,
    BottomBar, 
    },
  name:"Cart",
  computed: {
    // cartLength(){
    //   return this.$store.state.cartList.length
    // }
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  },
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.cart{
  height: 100vh;
}
</style>
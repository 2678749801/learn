<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" /> 
      <scroll class="content" ref="scroll" :pull-up-load="true" >
       
        <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"/>
      <detail-images-info :images-info="detailInfo" />
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      </scroll>
     <detail-bottom-bar @addCart="addToCart"/>
     <back-top @click.native="backClick"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail,Goods,Shop,GoodsParam} from "network/detail"
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailImagesInfo from './childComps/DetailImagesInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop.vue';


export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParamInfo,
    DetailImagesInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    BackTop
  },
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      themeTopYs:[0,1000,2000,3000]
    }
  },
  created() {
    this.iid=this.$route.params.iid
    getDetail(this.iid).then(res=>{
      
      const data =res.result;
      console.log(data)
     //获取轮播数据
      this.topImages=data.itemInfo.topImages
      //获取商品信息
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //获取店铺信息
      this.shop=new  Shop(data.shopInfo)
      //保持商品的详细数据
      this.detailInfo=data.detailInfo;
      //获取参数信息
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //评价
      if (data.rate.cRate !==0) {
        this.commentInfo=data.rate.list[0]
      }
    this.$bus.$on('detailImageLoad',()=>{
      this.$refs.scroll.scroll.refresh()
    })
    })
  },
  methods: {
    titleClick(index){
      console.log(index)
      // this.$refs.scrollTo(0,this.themeTopYs[index],100)
    },
   backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    addToCart(){
      //获取需要展示的信息
      const product={}
      product.image=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.price=this.goods.realPrice;
      product.iid=this.iid;
      //加入购物车
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product)
    }
  },
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index:9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
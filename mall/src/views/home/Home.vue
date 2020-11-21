<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div> </nav-bar>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl" v-show="isTabFixed"/>
    <scroll class="content" 
    ref="scroll" 
    :pull-up-load="true" >
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
    <recommend-view :recommends="recommends"/>
    <feature-views/>
    <tab-control  :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl" />
    <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="backClick"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import {getHomeMultidata,getHomeGoods} from "network/home";
import RecommendView from './childComps/RecommendView'
import FeatureViews from './childComps/FeatureViews.vue';
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from '../../components/content/backTop/BackTop.vue';



export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureViews,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      tabOffsetTop:0,
      isTabFixed:false
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
    this.$bus.$on('itemImageLoad',()=>{
      this.$refs.scroll.scroll.refresh()
    })
  },
  mounted() {
    
  },
  methods: {
    tabClick(index){
      switch (index){
        case 0:
        this.currentType='pop'
        break
        case 1:
        this.currentType='new'
        break
        case 2:
        this.currentType='sell'
        break
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    swiperImageLoad(){
      this.tabOffsetTop= this.$refs.tabControl.$el.offsetTop;
    },
    contentScroll(position){
      
      this.isTabFixed=(-position.y)>this.tabOffsetTop
    },
    // loadMore(){
    //    this.getHomeGoods(this.currentType)
    // },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,1).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page +=1
    })
    }
  },
}
</script>

<style scoped>

#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
.tab-control{
  position: relative;
  z-index: 9;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
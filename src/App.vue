<template>
  <div >
     <v-header></v-header>
     <router-view ></router-view>
     <div class="tab fixed">
        <div class="tab-item"><router-link :to="{path:'/sellers'}"><i class="iconfont icon-gerenzhongxin"></i>商家</router-link></div>
        <div class="tab-item"><router-link :to="{path:'/ratings'}">评论</router-link></div>
        <div class="tab-item"><router-link :to="{path:'/goods'}">商品</router-link></div>
     </div>
     <!--路由外链-->
     
  </div>
</template>

<script>
import header from "./components/header/header.vue";
export default{
  components:{'v-header':header}
};
</script>

<style >
   .tab{
     display:flex;
     width:100%;
     height:40px;
     line-height:40px;
     border-bottom:1px solid rgba(7,17,27,0.1);
     }
  .tab-item{
         flex:1;
         text-align:center;
     }
  .router-link-active{
    color:rgb(240,20,20);
  }
  .fixed{
     position:fixed;
     bottom:0;
  }
         
</style>

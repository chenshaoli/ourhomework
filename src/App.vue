<template>
  <div >
     <v-header></v-header>
     <!--路由外链-->
     <router-view ></router-view>
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
      
</style>

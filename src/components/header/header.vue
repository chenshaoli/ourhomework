<template>
	<div class="header">
		<!-- <ul>
		    <li><a href="#"><img src="../../common/image/gQ4fcp.png" alt="同程旅游"></a></li>
		    <li><input type="text"></li>
			<li><router-link :to="{path:'./book1'}">首页</router-link></li>
			<li><router-link :to="{path:'./login'}">登陆</router-link></li>
			<li><router-link :to="{path:'./register'}">注册</router-link></li>
			<li><router-link :to="{path:'./center'}">个人中心</router-link></li>
		</ul> -->
		<div class="row">
		  <div class="col-xs-6 col-md-2 col-md-offset-1"><a href="#"><img src="../../common/image/gQ4fcp.png" alt="同程旅游"></a></div>
		  <div class="col-xs-6 col-md-3"></div>
		  <div class="col-xs-6 col-md-6">
		  <ul>
			  <li><router-link :to="{path:'./book1'}">首页</router-link></li>
			  <li><router-link :to="{path:'./login'}">登陆</router-link></li>
				<li><router-link :to="{path:'./register'}">注册</router-link></li>
				<li><router-link :to="{path:'./center'}">个人中心</router-link></li>
		  </ul></div>
        </div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style>
.header{
    height: 60px;
    background-color: #87CEEB;
}
.row>div>ul>li{
  color:#fff;
  float: left;
  margin:0 50px;
  line-height: 60px;
  font-size: 16px;
}
.row>div>a>img{
	width:140px;
	height: 60px;
}
.header>ul>li>a>img{
	height: 60px;
}
.header>ul>li:nth-child(1){
	margin-left: 50px;
	margin-right: 400px;
}
ul>li>input{
	height: 18px;
	margin-top: -5px;
	border-radius: 5px;
    margin-left: 90px;
}
</style>
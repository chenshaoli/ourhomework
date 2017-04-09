<template>
	<div class="header">
		<ul>
		    <li><a href="#"><img src="../../common/image/gQ4fcp.png" alt="同程旅游"></a></li>
		    <li><input type="text"></li>
			<li><router-link :to="{path:'./book1'}">首页</router-link></li>
			<li><router-link :to="{path:'./login'}">登陆</router-link></li>
			<li><router-link :to="{path:'./register'}">注册</router-link></li>
			<li><router-link :to="{path:'./center'}">个人中心</router-link></li>
		</ul>
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
.header>ul>li{
  color:#fff;
  float: left;
  margin:0 50px;
  line-height: 60px;
  font-size: 18px;
}
.header>ul>li>a>img{
	height: 60px;
}
.header>ul>li:nth-child(1){
	margin-left: 50px;
}
ul>li>input{
	height: 18px;
	margin-top: -5px;
	border-radius: 5px;
    margin-left: 90px;
}
</style>
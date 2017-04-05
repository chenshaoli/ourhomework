<template>
	<div class="header">
		<ul>
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
    background-color: #000;
}
.header>ul>li{
  color:#fff;
  float: left;
  margin:0 50px;
  line-height: 60px;
  font-size: 20px;
  margin-right: 0px;
}
	
</style>
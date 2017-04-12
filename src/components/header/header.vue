<template>
        <div class="header">
	<nav>
		<div class="container-fluid row" id="title">
		  <ul >
		  	<li class="col-xs-6 col-md-1 col-md-offset-1">
		  	<a href="./book1"><img src="../../common/image/gQ4fcp.png" alt="同程旅游"></a>
		  	</li>
		  	<li class="col-xs-6 col-md-4 col-md-offset-6">
			  	<ul class="row">
				  <li class="active col-xs-3 col-md-2 col-md-offset-3"><router-link :to="{path:'./book1'}" class="bold ">首页</router-link></li>
				  <li class="col-xs-3 col-md-2"><router-link :to="{path:'./login'}" class="bold" >登陆</router-link></li>
				  <li class="col-xs-3 col-md-2"><router-link :to="{path:'./register'}"class="bold">注册</router-link></li>
				  <li class="col-xs-3 col-md-3"><router-link :to="{path:'./center'}"class="bold">个人中心</router-link></li>
				  </ul>
			  </li>
		  </ul>
		</div>
	</nav>
        </div>
</template>
<script>
	export default{
                 data(){
                 	return{
                 		name:''
                 	}
                 },
                 render:function(){
                 	 this.name=JSON.parse(localStorage.getItem('personInfo')).obj.name;
                 }
	}
</script>
<style>
#title{
	height: 60px;
	line-height: 60px;
}
#title>ul>li>a>img{
	width:140px;
	height: 60px;
}

.row>li>router-link{
  color:#fff;
  float: left;
  margin:0 50px;
  line-height: 60px;
  font-size: 16px;
}
.bold{
	font-weight: bold;
	color:	#708090;
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
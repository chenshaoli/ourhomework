<template>
	<div>
		<div class="login_body">
			 <h2>请登录：</h2>
			 <form action="">
			 	<label for="phoneNum">手机号码：</label>
			 	<input type="text" id="phoneNum"><br/>
			 	<label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
			 	<input type="text" id="password">
			 	<label for="check">验&nbsp;&nbsp;证&nbsp;&nbsp;码：</label>
			 	<input type="text" id="check">
			 </form>
			 <span>忘记密码？</span>
			 <div class="register"><router-link :to="{path:'/register'}">注册</router-link></div>
			 <button>登陆</button>
		</div>
	</div>
</template>
<script>
	export default{};


</script>
<style>
	.login_body{
		width: 400px;
		height: 450px;
		border: 2px solid rgba(7,17,27,0.1);
		margin:100px auto;
	}
	h2{
		height: 80px;
		line-height: 80px;
		margin-left: 30px;
        font-size: 20px;
	}
	form{
		margin: 20px 0;
		border-bottom:2px solid rgba(7,17,27,0.1);
		border-top:2px solid rgba(7,17,27,0.1);
        padding: 10px;
	}
	input{
		    display: inline-block;
			width: 80%;
			border:1px solid rgba(7,17,27,0.1);
			height: 40px;
			padding: 20px;
			margin-top:20px;
		}
	.register{
			float: right;	
				}
	button{
		clear: both;
		width: 100%;
		margin-top: 40px;
		height: 40px;
		line-height: 40px;
		color: #fff;
		background-color: red;
		font-size: 30px;
		
	}
</style>
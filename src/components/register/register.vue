
<template>
	<div class="register_body">
		  <h2>注册会员</h2>
			 <form class="form-horizontal">
				  <div class="form-group">
				    <label for="inputEmail3" class="col-sm-2 control-label">电话号码</label>
				    <div class="col-sm-10">
				      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
				    <div class="col-sm-10">
				      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
				    </div>
				  </div>
				  
				  <div class="form-group">
				    <div class="col-sm-12">
				      <button type="submit" class="btn btn-default">注册</button>
				    </div>
				  </div>
				</form>
			 <span>忘记密码？</span>
			 <div class="register"><router-link :to="{path:'/register'}">注册</router-link></div>
	</div>
</template>
<script>
	export default{};
</script>
<style>
	.register_body{
		width: 400px;
		height: 450px;
		border: 2px solid rgba(7,17,27,0.1);
		margin:100px auto;
	}
	h2{
		width: 88px;
		height: 80px;
		line-height: 80px;
		margin:0 auto;
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
			width: 79%;
			border:1px solid rgba(7,17,27,0.1);
			height: 40px;
			padding: 20px;
			/*margin-top:20px;*/
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
<template>
	<div>
		<div class="login_body">
			 <h2>会员登录</h2>
			 <form class="form-horizontal">
				  <div class="form-group">
				    <label for="phoneNum" class="col-sm-2 control-label">电话号码</label>
				    <div class="col-sm-10">
				      <input type="email" class="form-control" id="phoneNum" placeholder="电话号码" name="phoneNum" v-model="loginModel.phoneNum">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="password" class="col-sm-2 control-label">密码</label>
				    <div class="col-sm-10">
				      <input type="password" class="form-control" id="password" placeholder="密码" v-model="loginModel.password">
				    </div>
				  </div>
				  
				  <div class="form-group">
				    <div class="col-sm-12">
				      <button type="submit" class="btn btn-default" @click="login">登陆</button>
				    </div>
				  </div>
				</form>
			 <span>忘记密码？</span>
			 <div class="register"><router-link :to="{path:'/register'}">注册</router-link></div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				flight:[],
				loginModel: {
                    phoneNum: '',
                    password: '',
                    grant_type: 'password'
                }
			}
		},
		
       methods:{
           login:function(){
           	var that=this;
            $.ajax({
	          async:true,
	          url:'http://127.0.0.1:8086/flightcenter/MembersService/memberLogin.do',//要访问的后台地址
	          // url:"#",
	          type:"POST",
	          data:that.loginModel,
	          dataType:'json',
	          error:function(){
	             alert('获取信息失败！');
	          },
	          success:function(data){
	          	if(data.errorCode=="success"){
	          		// window.location.href="../book1.vue";
	          		that.flight=data;
	               console.log(that.flight);
	          	}
	             	
	           }
            });

	          console.log(that.loginModel);
           }
       },
       ready: function() {
                 sessionStorage.setItem('phoneNum', loginModel.phoneNum);
                 sessionStorage.setItem('password', loginModel.password);
            }

	};


</script>
<style>
	.login_body{
		width: 400px;
		height: 350px;
		border: 2px solid rgba(7,17,27,0.1);
		margin:100px auto;
	}
	h2{
		height: 30px;
		line-height: 30px;
		margin: 0 auto;
        font-size: 20px;
	}
	form{
		margin: 10px 0;
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
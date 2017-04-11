
<template>
	<div class="register_body">
		  <h2>注册会员</h2>
			 <form class="form-horizontal">
				  <div class="form-group">
				    <label for="phoneNum" class="col-sm-3 control-label">电话号码</label>
				    <div class="col-sm-9">
				      <input type="email" class="form-control" id="phoneNum" placeholder="电话号码" v-model="loginModel.phoneNum">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="name" class="col-sm-3 control-label">姓名</label>
				    <div class="col-sm-9">
				      <input type="email" class="form-control" id="name" placeholder="姓名" v-model="loginModel.name">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="identify" class="col-sm-3 control-label">身份证</label>
				    <div class="col-sm-9">
				      <input type="email" class="form-control" id="identify" placeholder="身份证" v-model="loginModel.identify">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="password" class="col-sm-3 control-label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
				    <div class="col-sm-9">
				      <input type="password" class="form-control" id="password" placeholder="密码" v-model="loginModel.password">
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
	export default{
		data(){
			return{
				flight:[],
				loginModel: {
                    phoneNum: '',
                    name:'',
                    password: '',
                    identify:'',
                    grant_type: 'password'
                }
			}
		},
       methods:{
           login:function(){
           	var that=this;
            $.ajax({
	          async:true,
	          url:'http://10.6.15.16:8080/flightcenter/MembersService/memberLogin.do',//要访问的后台地址
	          // url:"#",
	          type:"POST",
	          data:that.loginModel,
	          dataType:'json',
	          error:function(){
	             alert('获取信息失败！');
	          },
	          success:function(data){
	             	that.flight=data;
	               console.log(that.flight);
	           }
            });

	          console.log(that.loginModel);
           }
       }
	};
</script>
<style>
	.register_body{
		width: 400px;
		height: 435px;
		border: 2px solid rgba(7,17,27,0.1);
		margin:100px auto;
	}
	h2{
		width: 151px;
		height: 30px;
		line-height: 30px;
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
<template>
	<div class="body">
		<div class="login_body">
			 <h2>会员登陆|<span>立即注册，享积分换礼、返现等专属优惠！</span></h2>
			 <form class="form-horizontal">
				  <div class="form-group">
				    <label for="phoneNum" class="col-sm-3 control-label">电话号码</label>
				    <div class="col-sm-8 input-group">
				    <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
				      <input type="text" class="form-control" id="phoneNum" placeholder="电话号码" name="phoneNum" v-model="loginModel.phoneNum" data-toggle="tooltip" data-placement="top" title="请输入11位有效号码">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="password" class="col-sm-3 control-label">密码</label>
				    <div class="col-sm-8 input-group">
				    <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-eye-close" aria-hidden="true"></span></div>
				      <input type="password" class="form-control" id="password" placeholder="密码" v-model="loginModel.password" data-toggle="tooltip" data-placement="top" title="请输入密码">
				    </div>
				  </div>
				  
				  <div class="form-group">
				    <div class="col-sm-12">
				      <div type="button" class="btn btn-primary login" @click="login" >登陆</div>
				    </div>
				  </div>
				</form>
			 <div class="inline"><a href="">忘记密码？</a>
			<router-link :to="{path:'/register'}" class="register">马上注册</router-link></div>
			 <span class="relax"><span class="glyphicon  glyphicon-heart" aria-hidden="true"></span>把心交给同程，给你无限可能</span>
			 <span class="relax"><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span>星级服务</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				person:[],
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
	          url:'http://127.0.0.1:8086/flightcenter/MembersService/memberLogin.do',
	          type:"POST",
	          data:that.loginModel,
	          dataType:'json',
	          error:function(){
	             alert('获取信息失败！');
	          },
	          success:function(data){
	          	if(data.errorCode=="success"){
	          		window.location.href="./book1";
	          		that.person=data;
	               // console.log(that.person);
	                // window.localStorage.setItem( 'personInfo', that.person );
	                localStorage["personInfo"] = JSON.stringify(that.person);
	            alert("登录成功！");
	          	}
	             	
	           }
            });

	          console.log(that.loginModel);
           }
       }
      

	};


</script>
<style>
.body{
	    width: 100%;
	    /*height: 595px;*/
		background: url("../../common/image/yOH751.jpg") no-repeat;
		overflow: hidden;
	}
	.login_body{
		width: 400px;
		height: 350px;
		border: 2px solid rgba(7,17,27,0.1);
		margin:0px 400px 100px 200px;
	}

	h2{
		height: 30px;
		 line-height: 30px;
                      font-size: 18px;
                      margin-left: 15px;
	}
	h2>span{
		font-size: 10px;
		margin-left: 10px;
	}
	form{
		margin: 10px 0;
		border-bottom:2px solid rgba(7,17,27,0.1);
		border-top:2px solid rgba(7,17,27,0.1);
        padding: 10px;
	}
	input{
		    display: inline-block;
			/*width: 79%;*/
			border:1px solid rgba(7,17,27,0.1);
			height: 40px;
			padding: 20px;
			/*margin-top:20px;*/
		}
	.register{
			margin-left:265px;	
				}
	.inline{
		display: inline-block;
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
	.relax{
		width:300px;
		padding:0 90px;
		color:red;
		font-weight: bold;
	}
	.login{
		margin-left: 87px;
		width: 269px;
	}
	
</style>
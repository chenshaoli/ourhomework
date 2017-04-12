
<template>
	<div class="registercontent">
	<div class="register_body">
		  <h2>注册会员|<span>注册成功可获得1000积分+<strong>返现特权</strong></span></h2>
			 <form class="form-horizontal">
				  <div class="form-group">
				    <label for="phone" class="col-sm-3 control-label">电话号码</label>
				    <div class="col-sm-8 input-group">
				    <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
				      <input type="text" class="form-control" id="phone" placeholder="电话号码" v-model="loginModel.phone"  data-toggle="tooltip" data-placement="top" title="请输入11位手机号码">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="names" class="col-sm-3 control-label">姓名</label>
				    <div class="col-sm-8 input-group">
				    <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-user" aria-hidden="true"></span></div>
				      <input type="text" class="form-control" id="names" placeholder="姓名"v-model="loginModel.names"  data-toggle="tooltip" data-placement="top" title="请输入姓名">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="identify" class="col-sm-3 control-label">身份证</label>
				    <div class="col-sm-8 input-group">
				    <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-picture" aria-hidden="true"></span></div>
				      <input type="text" class="form-control" id="identify" placeholder="身份证" v-model="loginModel.identify"  data-toggle="tooltip" data-placement="top" title="请输入18位身份证号码">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="password" class="col-sm-3 control-label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
				    <div class="col-sm-8 input-group">
				    <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-eye-close" aria-hidden="true"></span></div>
				      <input type="password" class="form-control" id="password" placeholder="密码" v-model="loginModel.password"  data-toggle="tooltip" data-placement="top" title="请输入密码">
				    </div>
				  </div>
				  
				  <div class="form-group">
				    <div class="col-sm-12">
				      <div type="button" class="btn btn-primary  login" @click="register">注册</div>
				    </div>
				  </div>
				</form>
			 <span><a href="">忘记密码？</a></span>
			 <div class="register"><router-link :to="{path:'/login'}">直接登陆</router-link></div>
			 <div><input type="checkbox" class="checkbox" checked><small>《同意同程旅行网协议》</small></div>
	</div>
    </div>
</template>
<script>
	export default{
		data(){
			return{
				flight:[],
				loginModel: {
                    phone: '',
                    names:'',
                    password: '',
                    identify:'',
                }
			}
		},
       methods:{
           register:function(){
           	var that=this;
            $.ajax({
	          async:true,
	          url:'http://127.0.0.1:8086/flightcenter/MembersService/memberRegister.do',
	          type:"POST",
	          contentType:"application/json",
	          data:JSON.stringify(that.loginModel),
	          dataType:'json',
	        
	          success:function(data){
	              if(data.errorCode=="success"){
	          		window.location.href="./book1";
	          		that.person=data;
	               // console.log(that.person);
	                window.localStorage.setItem( 'newperonInfo', that.person );
                          alert("注册成功");
	          	}

	           }, 
	            error:function(){
	             alert('获取信息失败！');
	          }

            });

	          console.log(that.loginModel);
           }
       },
       ready: function() {
                 sessionStorage.setItem('phone', loginModel.phone);
                 sessionStorage.setItem('names', loginModel.names);
                 sessionStorage.setItem('identify', loginModel.identify);
            }
	};
	$(function(){
    $('[data-toggle="tooltip"]').tooltip();
})
</script>
<style>
.registercontent{
	background: url("../../common/image/rBLkBljnco6AcdpAAAIAAGjeneY638.jpg") repeat-Y ;

}
	.register_body{
		width: 400px;
		height: 435px;
		border: 2px solid rgba(7,17,27,0.1);
		margin:0px 400px 100px 200px;
		
	}
	h2{
		/*width: 151px;*/
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
			/*width: 79%;*/
			border:1px solid rgba(7,17,27,0.1);
			height: 40px;
			padding: 20px;
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
	small{
	display: inline-block;}
	.checkbox{
		display: inline-block;
		float: left;
		margin-top: -35px;
	}
</style>
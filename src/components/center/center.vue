<template>
	<div id="center">
		  <div class="panel panel-default">
		  <div class="panel-heading"><span class="glyphicon glyphicon glyphicon-user" aria-hidden="true"></span>会员信息</div>
		  <div class="panel-body">
		      <div class="avatar">
		      	 <img src="" alt="头像">
		      </div>
		      <div class="info">
		      	  <span><span class="glyphicon glyphicon glyphicon-user" aria-hidden="true"></span>姓名：{{personInfo.names}}</span>
		      	  <span><span class="glyphicon glyphicon glyphicon-earphone" aria-hidden="true"></span>电话：{{personInfo.phoneNum}}</span>
		      	  <span><span class="glyphicon glyphicon glyphicon-picture" aria-hidden="true"></span>身份证号码：{{personInfo.identify}}</span>
		      </div>
		  </div>
		</div>

	    <div class="panel panel-default top">
			  <div class="panel-heading"><span class="glyphicon glyphicon glyphicon-usd" aria-hidden="true"></span>账户余额</div>
			  <div class="panel-body">
			  <div class="left">
				   <div> <span class="glyphicon glyphicon glyphicon-usd" aria-hidden="true"></span>{{money}}</div>
				   <div class="btn btn-primary btn-sm" @click="recharge">充值</div>
		     </div>
		     </div>
		</div>


		  	<div class="panel panel-default top">
		  <div class="panel-heading"><span class="glyphicon glyphicon glyphicon-list-alt" aria-hidden="true"></span>历史订单</div>
		  <div class="panel-body">
		    <table class="table table-striped">
                 <tr>
                 	    <th>航司</th>
						<th>班次</th>
						<th>出发地</th>
						<th>目的地</th>
						<th>出发时刻</th>
						<th>到达时刻</th>
						<th>头等舱</th>
                 </tr>
                 <tr v-for="index in flightDetail">
                 	<td>{{flightDetail[index].start}}</td>
                 	<td>{{flightDetail[index].dest}}</td>
                 	<td>{{flightDetail[index].startTime}}</td>
                 	<td>{{flightDetail[index].destTime}}</td>
                 	<!-- <td>{{flightDetail[index].first}}</td> -->
                 </tr>
            </table>
		  </div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				 personInfo:[
				 {
				 	names:'王蕾',
				 	phoneNum:'18765435678',
				 	identify:'19874638899023'
				 }],
				 flightDetail:[],
				 money:10000
			}
		},
         methods:{
         	recharge:function(){

         	}
         },
         created:function(){
           	var that=this;
            $.ajax({
	          async:true,
	          url:'http://127.0.0.1:8086/flightcenter/MembersService/memberLogin.do',
	          type:"POST",
	          dataType:'json',
	          error:function(){
	             alert('获取信息失败！');
	          },
	          success:function(data){
	          	if(data.errorCode=="success"){
	               that.personInfo=JSON.parse(window.localStorage.getItem('personInfo'));
	               that.flightDetail=JSON.parse(window.localStorage.getItem('flightDetail'));
	          	}
	           }
            });
           }
         
	};
</script>
<style>
	#center{
		font-size: 16px;
		font-family: "微软雅黑";
	}
	#center>div{
		width:100%;
		/*border:1px solid red;*/
	}
	#center>div{
		float: left;
	}
	#center>div>ul>li{
		float: left;
		margin-left: 50px;

	}
	#center>div>ul>li:nth-child(1){
		margin-right: 690px;
		font-size: 30px;
		color:#DC143C;
	}
	.content{
		margin-top: 30px;
	}
	.avatar{
		width: 100px;
		height:100px;
		margin-left: 100px;
		border: 1px solid red;
		display: inline-block;
	}
	.info{
		display: inline-block;
	}
	.info>span{
		margin-left: 80px;
	}
	.top{
		margin-top: 40px;
	}
	.left{
		margin-left: 40px;
	}
</style>
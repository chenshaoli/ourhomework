<template>
	<div id="center">
		  <div class="panel panel-default">
		  <div class="panel-heading"><span class="glyphicon glyphicon glyphicon-user" aria-hidden="true"></span>会员信息</div>
		  <div class="panel-body">
		      <div class="avatar">
		      	 <img src="../../common/image/u=79910207,1680442656&fm=117&gp=0.jpg" alt="头像">
		      </div>
		      <div class="info">
		      	  <span><span class="glyphicon glyphicon glyphicon-user" aria-hidden="true"></span>姓名：{{personInfo.names}}</span>
		      	  <span><span class="glyphicon glyphicon glyphicon-earphone" aria-hidden="true"></span>电话：{{personInfo.phone}}</span>
		      	  <span><span class="glyphicon glyphicon glyphicon-picture" aria-hidden="true"></span>身份证号码：{{personInfo.identify}}</span>
		      </div>
		  </div>
		</div>

	    <div class="panel panel-default top">
			  <div class="panel-heading"><span class="glyphicon glyphicon glyphicon-usd" aria-hidden="true"></span>账户余额</div>
			  <div class="panel-body">
			  <div class="left">
				   <div> <span class="glyphicon glyphicon glyphicon-usd" aria-hidden="true"></span>{{personInfo.fund}}</div>
				   <div class="btn btn-primary btn-sm" @click="recharge">充值</div>
				   <input type="text"  class="charge" name="money"/>
				    <div class="btn btn-primary btn-sm" @click="ok">确认</div>
		     </div>
		     </div>
		</div>


	 <div class="panel panel-default top not">
		  <div class="panel-heading"><span class="glyphicon glyphicon glyphicon-list-alt" aria-hidden="true"></span>历史订单</div>
		  <div class="panel-body">
		    <table class="table table-striped">
                 <tr>
                 	                                                  <th>航司</th>
						<th>航班编号</th>
						<th>出发地</th>
						<th>目的地</th>
						<th>出发时刻</th>
						<th>到达时刻</th>
						<th>舱位类型</th>
						<th>舱位价格</th>
						<th>订单编号</th>
						<th>乘机人姓名</th>
						<th>乘机人电话</th>
						<th>下单时间</th>
						<th>订单状态</th>
                 </tr>
                 <tr v-for="index in flightDetail">
                 	<td>{{index.name}}</td>
                 	<td>{{index.number}}</td>
                 	<td>{{index.start}}</td>
                 	<td>{{index.dest}}</td>
                 	<td>{{index.startTime}}</td>
                 	<td>{{index.destTime}}</td>
                 	<td>{{index.type}}</td>
                 	<td>{{index.price}}</td>
                 	<td>{{index.orderNumber}}</td>
                 	<td>{{index.memberName}}</td>
                 	<td>{{index.phone}}</td>
                 	<td>{{index.createTime}}</td>
                 	<td>{{index.status}}</td>
                 </tr>
            </table>
		  </div>
		</div>
		<div class="btn btn-primary btn-sm" @click="openhistory">历史订单</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				 personInfo:'',
				 flightDetail:'',
				 money:0,
				 memberId:''
			}
		},
         methods:{
         	recharge:function(){
                     $('.charge').css('display','block');     
         	},
         	ok:function(){
                      this.memberId=JSON.parse(localStorage.getItem('personInfo')).obj.id;
         	         var value=$(".charge").val();
         	         var that =this;
         		$.ajax({
	          async:true,
	          url:'http://127.0.0.1:8086/flightcenter/MembersService/recharge.do?id='+that.memberId+"&money="+value,
	          type:"GET",
	          dataType:'json',
	          error:function(){
	             alert('获取信息失败！');
	          },
	          success:function(data){
	          	if(data.errorCode=="success"){
                                   console.log(data.obj);
                                   that.personInfo=data.obj;
	               // that.personInfo=JSON.parse(window.localStorage.getItem('personInfo'));
	               // that.flightDetail=JSON.parse(window.localStorage.getItem('flightDetail'));
	          	}
	           }
            });
         	},
         	openhistory:function(){
         		$(".not").css("display","block");
         		this.memberphone=JSON.parse(localStorage.getItem('personInfo')).obj.phone;
         		var that=this;
         		$.ajax({
	          async:true,
	          url:'http://127.0.0.1:8086/flightcenter/MembersService/queryHistoryOrderInfos.do?phoneNum='+that.memberphone,
	          type:"GET",
	          dataType:'json',
	          error:function(){
	             alert('获取信息失败！');
	          },
	          success:function(data){
	          	if(data.errorCode=="success"){
                                   console.log(data.obj);
                                  that.flightDetail=data.obj;
	          	}
	           }
            });
         	}
         },
         created:function(){
         	this.memberId=JSON.parse(localStorage.getItem('personInfo')).obj.id;
         	console.log(JSON.parse(localStorage.getItem('personInfo')).obj.id);
           	var that=this;
            $.ajax({
	         async:true,
	         url:'http://127.0.0.1:8086/flightcenter/MembersService/querySingleMember.do?id='+that.memberId,
	          type:"GET",
	          dataType:'json',
	          error:function(){
	             alert('获取信息失败！');
	          },
	          success:function(data){
	          	if(data.errorCode=="success"){
                                   console.log(data.obj);
                                   that.personInfo=data.obj;
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
		width: 80px;
		height:80px;
		margin-left: 100px;
		/*border: 1px solid red;*/
		display: inline-block;
	}
	.avatar>img{
		width: 80px;
		height: 80px;
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
	.charge{
		width: 200px;
		display: none;
	}
	.not{
		display: none;
	}
</style>
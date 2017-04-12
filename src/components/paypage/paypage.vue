<template>
	<div>
		<table class="table table-striped">
			<tr>
				<th>舱位类型</th>
				<th>价格</th>
				<th>数量</th>
			</tr>
			<tr>
				<td>{{flightdetail.type}}</td>
				<td>{{flightdetail.price}}</td>
				<td>{{flightdetail.num}}</td>
			</tr>
		</table>
		<table class="table table-striped">
			<tr>
				<th>姓名</th>
				<th>电话</th>
				<th>身份证</th>
			</tr>
			<tr>
				<td>{{personInfo.names}}</td>
				<td>{{personInfo.phone}}</td>
				<td>{{personInfo.identify}}</td>
			</tr>

		</table>
		<table class="table table-striped">
			<tr>
				<th>出发地</th>
				<th>目的地</th>
				<th>起飞时间</th>
				<th>到达时间</th>
				<th>航班编号</th>
				<th>航司</th>
			</tr>
			<tr>
				<td>{{flightInfo.start}}</td>
				<td>{{flightInfo.dest}}</td>
				<td>{{flightInfo.startTime}}</td>
				<td>{{flightInfo.destTime}}</td>
				<td>{{flightInfo.number}}</td>
				<td>{{flightInfo.name}}</td>
			</tr>

		</table>
                              <button @click="queryok">下单</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
                                           personInfo:'',
       	                              flightInfo:'',
		                 flightdetail:''
			}
		},
		methods:{
			queryok:function(){
				var vm=this;
				console.log(vm.personInfo.id);
				console.log(vm.flightInfo.id);
				console.log(vm.flightdetail.id);
			        	$.ajax({

					async:true,
					 url:'http://127.0.0.1:8086/flightcenter/OrdersService/payOrders.do?membersId='+vm.personInfo.id+'&positionsId='+vm.flightdetail.id+'&infosId='+vm.flightInfo.id,
					 type:"GET",
					 contentType:"application/json",
					   dataType:'json',
					  error:function(data){
					  	
					     alert('获取信息失败！');
					     },
					  success:function(data){
					          //这个应该是后台给我的数据；
					       console.log(data);
					        vm.newflight=data.obj; //新建newflight并初始化为空；
					        alert("下单成功");
					
			             }
			          })

			}
		},
		created:function(){
			//console.log(JSON.parse(localStorage.getItem('personInfo')).obj);
			//alert(localStorage.getItem('personInfo'));
		         console.log(JSON.parse(localStorage.getItem('flightInfo')));
		            this.personInfo=JSON.parse(localStorage.getItem('personInfo')).obj;
       	                            this.flightInfo=JSON.parse(localStorage.getItem('flightInfo'));
		          this.flightdetail=JSON.parse(localStorage.getItem( 'cangwei'))[0];
		           console.log( this.flightdetail);
			// console.log(this.personInfo);
			// console.log(this.flightInfo);
			// console.log(this.flightdetail);
		

		}
                 
	};
</script>
<style>
	
</style>
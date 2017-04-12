<template>
	<div>
		<div class="panel panel-default">
		  <div class="panel-heading">订单详情</div>
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
                 	<td><button class="btn btn-primary">购买</button></td>
                 	<td><button class="btn btn-primary">取消</button></td>
                 	
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
				flightDetail:[]
			}
		},
       methods:{

       },
       created:function(){
       	  var code=JSON.parse(localStorage.flightInfo).id;
       	  console.log(code);
       	  flightDetail.push(JSON.parse(localStorage.flightInfo));
       	  flightDetail.push(JSON.parse(localStorage.peronInfo));
       	  console.log(flightDetail);
       	 var that=this;
       	 $.ajax({
       	 	url:"##",
       	 	data:that.code,
       	 	type:'POST',
       	 	dataType:'json',
       	 	success:function(data){
               that.flightDetail.push(data)
       	 	}
       	 })
       }

	};
</script>
<style>
	
</style>
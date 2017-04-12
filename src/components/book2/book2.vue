<template>
	<div>
		<div class="panel panel-default">
		  <div class="panel-heading">订单详情</div>
		  <div class="panel-body">
		    <table class="table table-striped">
                 <tr>
                 	                   <th>出发地</th>
                                      <th>目的地</th>
						<th>航司</th>
						<th>出发时刻</th>
						<th>到达时刻</th>
						
                 </tr>
                 <tr> 
                <!--  <tr v-for="index in flightDetail[0].start">
                  <td>  {{flightDetail[0][index]}}</td> -->
                  <td>{{flightDetail[0].start}}</td>
                  <td>{{flightDetail[0].dest}}</td>
                  <td>{{flightDetail[0].name}}</td>
                  <td>{{flightDetail[0].startTime}}</td>
                  <td>{{flightDetail[0].destTime}}</td>
                 	<!-- <td>{{flightDetail[0].start}}</td> -->
                 	<!-- <td>{{flightDetail[index].first}}</td>  -->
                 	<!-- <td><button class="btn btn-primary">购买</button></td>
                 	<td><button class="btn btn-primary">取消</button></td> -->

                 	
                 </tr>

                
            </table>
                 <h4> 仓位信息</h4>
                <table class="table table-striped"> 
                       <tr   v-for="index in flightDetail[1]"> 
                            <td>{{index.type}}</td>
                            <td>{{index.price}}</td>
                            <td>{{index.num}}</td>
                            <td>  <button class="btn btn_primary" @click="buy(index)">购买
                            </button> </td>
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
				flightDetail:[],
                         code:""
			}
		},
       methods:{
               buy:function(){
                   window.location.href="./paypage";
               }
       },
       created:function(){
       	  this.code=JSON.parse(window.localStorage.getItem('flightInfo')).id;
       	  console.log(this.code);
       	  this.flightDetail.push( JSON.parse(window.localStorage.getItem('flightInfo')));
       	  console.log(this.flightDetail);
       	 var that=this;
       	 $.ajax({
       	 	url:"http://127.0.0.1:8086/flightcenter/PositionsService/selectPositionsByInfosId.do?infosId="+that.code,
                   dataType:'json',
       	 	type:'GET',
       	 	success:function(data){
            if(data.errorCode=="success"){
                   that.flightDetail.push(data.obj);
                   console.log(that.flightDetail[1]);
                   console.log(that.code);
                     window.localStorage.setItem( 'cangwei', JSON.stringify(that.flightDetail[1]));

                   }
                 

       	 	}
       	 })

       }

	};
</script>
<style> 
	
</style>
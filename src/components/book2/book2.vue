<template>
	<div>
		<div class="panel panel-default">
		  <div class="panel-heading">订单详情</div>
		  <div class="panel-body box"  >
                 <ul class="row ftbold">
                 	          <li class="col-md-1 col-md-offset-2">出发地</li>
                                <li class="col-md-1 ">目的地</li>
						<li class="col-md-1 ">航司</li>
						<li class="col-md-2 ">出发时刻</li>
						<li class="col-md-2 ">到达时刻</li>
						
                 </ul>
                 <ul> 
                  <li class="col-md-1 col-md-offset-2">{{flightDetail[0].start}}</li>
                  <li class="col-md-1 ">{{flightDetail[0].dest}}</li>
                  <li class="col-md-1 ">{{flightDetail[0].name}}</li>
                  <li class="col-md-2 ">{{flightDetail[0].startTime}}</li>
                  <li class="col-md-2 ">{{flightDetail[0].destTime}}</li>

                 	
                 </ul>

                
                </div>
            </div>
            <div class="panel panel-default">
                  <div class="panel-heading"> 仓位信息</div>
                <div class="panel-body box" > 
                        <ul class="row ftbold">
                                <li class="col-md-2 col-md-offset-2">舱位类型</li>
                                <li class="col-md-2 ">舱位价格</li>
                                <li class="col-md-2">剩余舱位</li>
                                <li class="col-md-2"></li>
                 </ul>
                       <ul   v-for="index in flightDetail[1]" > 
                            <li class="col-md-2 col-md-offset-2">{{index.type}}</li>
                            <li  class="col-md-2 ">{{index.price}}</li>
                            <li  class="col-md-2 ">{{index.num}}</li>
                            <li class="col-md-2 margin_top">  <button class="btn btn_primary" @click="buy(index)">购买
                            </button> </li>
                       </ul>
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
                   this.name=JSON.parse(localStorage.getItem('personInfo')).obj.name;
                   if(this.name=="undefined"){
                         alert("请先登录!");
                         window.location.href="./login";
                   }
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
	.margin_top{
    margin-top: 5px;
  }
  .margin_top>button{
    width:100px;
  }
</style>
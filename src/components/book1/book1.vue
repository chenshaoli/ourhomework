<template>
	<div>
	   <div class="container1" >
	   <div class="inner clearfix">
                <div class="innerwraper img-responsive">
                    <a href="http://www.ly.com/jp/czt/pc_zt_fu30170313"><img src="../../common/image/pKAy1k.jpg" alt="" /></a>
                </div>
                </div>
                  <div class="searchbanner">
                	<form class="form-horizontal">
			<div class="form-group">
			 <label for="inputEmail3" class="col-sm-3 control-label">出发地</label>
			 <div class="col-sm-8 input-group">
                            <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-export" aria-hidden="true"></span></div>
				 <input type="text" class="form-control" id="inputEmail3" placeholder="出发地" v-model="flight.start" data-toggle="tooltip" data-placement="top" title="请输入出发城市名">
				</div>
				 </div>
			 <div class="form-group">
			<label for="inputPassword3" class="col-sm-3 control-label">目的地</label>
			 <div class="col-sm-8 input-group">
                            <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-import" aria-hidden="true"></span></div>
			 <input type="text" class="form-control" id="inputPassword3" placeholder="目的地" v-model="flight.dest" data-toggle="tooltip" data-placement="top" title="请输入目的地城市名">
						    </div>
						  </div>
			 <div class="form-group">
			 <label for="inputPassword3" class="col-sm-3 control-label">出发时间</label>
			<div class="col-sm-8 input-group">
                            <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-hourglass" aria-hidden="true"></span></div>
		 <input type="text" class="form-control" id="inputPassword3" placeholder="出发时间" v-model="flight.startTime" data-toggle="tooltip" data-placement="top" title="请选择出发时间">
			 </div>
			</div>
			<div class="btn btn-primary btn-sm btn_center" type="button" @click="search">查询</div>
			</form>
                                </div>
		</div>

         <div class="jumbotron">
         	<section class="panel panel-default">
		  <div class="panel-heading" ><span class="glyphicon glyphicon-flag " aria-hidden="true"></span><i class="red">机票详情</i></div>
		  <div class="panel-body box" v-for="fly in newflight">
					<ul class="row ftbold">
						<li class="col-md-1 col-md-offset-2">出发地</li>
						<li class="col-md-1 ">目的地</li>
						<li class="col-md-2 ">出发时间</li>
						<li class="col-md-2 ">到达时间</li>
						<li class="col-md-1 ">航司</li>
                                                             <li class="col-md-1">航班编号</li>
						<li class="col-md-1"></li>
					</ul>
					
					<ul class="row">
						<li  class="col-md-1 col-md-offset-2">{{fly.start}}</li>
						<li  class="col-md-1 ">{{fly.dest}}</li>
						<li  class="col-md-2 ">{{fly.startTime}}</li>
						<li  class="col-md-2 ">{{fly.destTime}}</li>
						<li  class="col-md-1 ">{{fly.name}}</li>
						<li  class="col-md-1">{{fly.number}}</li>
						<li  class="col-md-1 col-md-offset1"><button  class="btn btn-primary" id="aa" @click="transform(fly)">详情</button></li>
					</ul>
					
			</div>
                       <nav aria-label="Page navigation" class="col-md-3 col-md-offset-9">
                          <ul class="pagination">
                            <li>
                              <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                              <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          </ul>
                      </nav>
	     </section>
         </div>

		</div>

</template>
<script>

 import book2 from '../book2/book2';
export default{
	data(){
		return{
	   		newflight:[{
                
            }

            ],
	      	flight:{
	      		start:'',
	      		dest:'',
			startTime:''
	      	}
      	}   
	},
	methods: {
        search:function(){
        	var vm=this;
        	$.ajax({
		          async:true,
		          url:'http://127.0.0.1:8086/flightcenter/InfosService/selectByConditions.do',
		          type:"POST",
				  contentType:"application/json",
		          data:JSON.stringify(vm.flight),
		          dataType:'json',
		          error:function(){
		             alert('获取信息失败！');
		          },
		          success:function(data){
		          //这个应该是后台给我的数据；
		            console.log(data);
		            vm.newflight=data.obj; //新建newflight并初始化为空；
		             for( var index in data){
		              if(vm.flight.start===data.obj[index].start&&vm.flight.dest===data.obj[index].dest){
		                  vm.newflight.push(data[index]);
			 var flightmessage=JSON.stringify(data.obj);
						   
                }
				         
              }
             }
          })
        },
		transform:function(index){
			            var flightInfo=JSON.stringify(index);
				  console.log(flightInfo);
				  window.localStorage.setItem( 'flightInfo', flightInfo );
                    window.location.href="../book2";
		} 		
      },
        created:function(){
        	       var _this=this;
              	$.ajax({
		            async:true,
		            url:'http://127.0.0.1:8086/flightcenter/InfosService/selectInfos.do',
		            type:"POST",
		            dataType:'json',
		            error:function(){
		               alert('获取信息失败！');
		            },
		            success:function(data){
		            //  console.log(data.obj);
                      _this.newflight=data.obj;
                      console.log(_this.newflight);
                   }
             })
		  }
}
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
})
</script>
<style>
	/*轮播图*/
.container1 {
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    position: relative;
}
a {
    text-decoration: none;
}
.navbar-nav>li>a{
    line-height: 48px;
}
.navbar-nav{
    margin-left: -15px;
}

.searchbanner{
	width: 400px;
	height:300px;
	position: absolute;
	border-radius:8px;
	left: 140px;
	top:20px;
	background-color: #87CEEB;
	font-size: 16px;
}
.btn_center{
	margin-left: 280px;
	width:80px;
}
.red{
    color:red;
    font-weight: bold;
    margin: 30px 10px 0  20px;
    font-size: 25px;
}
.glyphicon-flag{
    margin-left: 20px;
}
.tablewidth{  width: 1100px;
    margin: 0 auto;
}
.jumbotron{
    width: 1135px;
    margin: 0 auto;
}
.box{
    border: 1px solid #808080;
    border-radius:5px;
    margin-top: 5px;
}
.ftbold>li{
    font-weight: bold;
}

</style>
<template>
	<div>
		<div class="container1" >
			<div class="inner clearfix">
                <div class="innerwraper img-responsive"><a href="http://www.ly.com/jp/czt/pc_zt_fu30170313"><img src="../../common/image/pKAy1k.jpg" alt="" /></a></div>
                <div class="innerwraper img-responsive"><a href="http://www.ly.com/jp/czt/pc_zt_fu30170313"><img src="../../common/image/rBLkBljnco6AcdpAAAIAAGjeneY638.jpg" alt="" /></a></div>
                <div class="innerwraper img-responsive"><a href="http://pro.zhongjiu.cn/20170303/goddessFes.html"><img src="../../common/image/BsvT8k.jpg" alt="" /></a></div>
            </div>
                  <div class="searchbanner">
                	<form class="form-horizontal">
						  <div class="form-group">
						    <label for="inputEmail3" class="col-sm-3 control-label">出发地</label>
						    <div class="col-sm-8 input-group">
                            <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-export" aria-hidden="true"></span></div>
						      <input type="text" class="form-control" id="inputEmail3" placeholder="出发地" v-model="flight.start">
						    </div>
						  </div>
						  <div class="form-group">
						    <label for="inputPassword3" class="col-sm-3 control-label">目的地</label>
						    <div class="col-sm-8 input-group">
                            <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-import" aria-hidden="true"></span></div>
						      <input type="text" class="form-control" id="inputPassword3" placeholder="目的地" v-model="flight.dest">
						    </div>
						  </div>
						 <div class="form-group">
						    <label for="inputPassword3" class="col-sm-3 control-label">出发时间</label>
						    <div class="col-sm-8 input-group">
                            <div class="input-group-addon"><span class="glyphicon glyphicon glyphicon-hourglass" aria-hidden="true"></span></div>
						      <input type="text" class="form-control" id="inputPassword3" placeholder="出发时间" v-model="flight.startTime">
						    </div>
						  </div>
						<button class="btn btn-primary btn-sm btn_center" type="button" @click="search">查询</button>
						</form>

                </div>
               <div class="pagination1">
                <span class="active">1</span>
                <span>2</span>
                <span>3</span>
               </div>
            <a href="javascript:void(0)" class="left-arrow">&lt;</a>
            <a href="javascript:void(0)" class="right-arrow">&gt;</a>
		</div>

         <div>
         	<section class="panel panel-default">
		  <h4 class="red">特惠机票</h4><hr/>
		  <table class="table table-hover maxtop">
					<thead>
					<tr>
						<th>目的地</th>
						<th>出发地</th>
						<th>出发时间</th>
						<th>到达时间</th>
						<th>航司</th>
						<th>航班编号</th>
					</tr>
					</thead>
					<tbody>
					<tr v-for="fly in newflight">
						<td>{{fly.dest}}</td>
						<td>{{fly.destTime}}</td>
						<td>{{fly.name}}</td>
						<td>{{fly.number}}</td>
						<td>{{fly.start}}</td>
						<td>{{fly.startTime}}</td>
						<td><button  class="btn btn-primary" id="aa" @click="transform(fly)">详情</button></td>
					</tr>
					<!-- <router-link class="btn btn-primary btn-sm" :to="{path:'./book2'}"  @click="transform(fly.id)">详情</router-link> -->
					</tbody>
			</table>
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
                dest:'北京',
                start:'南京',
                startTime:'12334',
                destTime:'23244'
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
			      var flightInfo=index;
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
		              console.log(data.obj);
                      _this.newflight=data.obj;
                      console.log(_this.newflight);
                   }
             })
		  }
}
// 轮播图
var innerGroup = $(".innerwraper");
var leftArrow = $(".left-arrow");
var rightArrow = $(".right-arrow");
var spanGroup = $(".pagination1 span");
var imgWidth = $(".innerwraper img:first-child").eq(0).width();
var _index = 0;
var timer = null;
var flag = true;
rightArrow.on("click", function() {
    //右箭头
    flag = false;
    clearInterval(timer);
    _index++;
    selectPic(_index);
})
leftArrow.on("click", function() {
    //左箭头
    flag = false;
    clearInterval(timer);
    if (_index == 0) {
        _index = innerGroup.length - 1;
        $(".inner").css("left", -(innerGroup.length - 1) * imgWidth);
    }
    _index--;
    selectPic(_index);
})
spanGroup.on("click", function() {
    //导航切换
    _index = spanGroup.index($(this));
    selectPic(_index);
})

$(".container1").hover(function() {
    //鼠标移入
    clearInterval(timer);
    flag = false;
}, function() {
    flag = true;
    timer = setInterval(go, 8000);
});

function autoGo(bol) {
    //自动行走
    if (bol) {
        timer = setInterval(go, 8000);
    }
}
autoGo(flag);

function go() {
    //计时器的函数
    _index++;
    selectPic(_index);
}
function selectPic(num) {
    $(".pagination1 span").eq(num).addClass("active").siblings().removeClass("active");
    $(".inner").animate({
        left: -num * imgWidth,
    }, 1000, function() {
        //检查是否到最后一张
        if (_index == innerGroup.length - 1) {
            _index %= 4;
            $(".inner").css("left", "0px");
            $(".pagination1 span").eq(0).addClass("active").siblings().removeClass("active");
        }
    })
}
  
</script>
<style>
	/*轮播图*/
.container1 {
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    position: relative;
}
.inner {
    position: relative;
    width: 9999px;
    left: 0;
    top: 0;
}
.innerwraper {
    float: left;
}
.clearfix {
    *zoom: 1;
}
.clearfix:after {
    display: block;
    clear: both;
    visibility: hidden;
    content: "";
    height: 0;
}
a {
    text-decoration: none;
}
.left-arrow {
    position: absolute;
    left: 0;
    top: 40%;
    width: 10%;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 20px;
}
.right-arrow {
    position: absolute;
    right: 0;
    top: 40%;
    width: 10%;
    height: 20px;
    font-size: 20px;
    text-align: center;
    line-height: 20px;
}
.pagination1{
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
}
.pagination1 span{
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: yellow;
    line-height: 30px;
    border-radius: 50%;
    cursor: pointer;
}
.pagination1 .active{
    background-color: red;
    color: #FFFFFF;
}

.navbar-nav>li>a{
    line-height: 48px;
}
.navbar-nav{
    margin-left: -15px;
}

.searchbanner{
	width: 500px;
	height:300px;
	position: absolute;
	border-radius:8px;
	left: 140px;
	top:20px;
	background-color: #87CEEB;
	font-size: 18px;
}
.btn_center{
	margin-left: 320px;
	width:80px;
}
</style>
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
						    <div class="col-sm-9">
						      <input type="text" class="form-control" id="inputEmail3" placeholder="出发地" v-model="flight.depart">
						    </div>
						  </div>
						  <div class="form-group">
						    <label for="inputPassword3" class="col-sm-3 control-label">目的地</label>
						    <div class="col-sm-9">
						      <input type="text" class="form-control" id="inputPassword3" placeholder="目的地" v-model="flight.dest">
						    </div>
						  </div>
						 <div class="form-group">
						    <label for="inputPassword3" class="col-sm-3 control-label">出发时间</label>
						    <div class="col-sm-9">
						      <input type="text" class="form-control" id="inputPassword3" placeholder="出发时间">
						    </div>
						  </div>
						<div class="btn btn-primary btn-sm btn_center" @click="search">查询</div>
						   
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
						<th>航司</th>
						<th>班次</th>
						<th>出发地</th>
						<th>目的地</th>
						<th>出发时刻</th>
						<th>到达时刻</th>
						<th>最低价格</th>
					</tr>
					</thead>
					<tbody>
					<tr v-for="(fly,index) in newflight"><!-- 给循环的fly起个别名，这个别名就是索引号，这时可以获取到表中的行的信息的索引 -->
						<td>{{fly.company}}</td>
						<td>{{fly.number}}</td>
						<td>{{fly.depart}}</td>
						<td>{{fly.dest}}</td>
						<td>{{fly.StartTime}}</td>
						<td>{{fly.GetTime}}</td>
						<td class="red">{{fly.money}}</td>
						<!-- <td><router-link class="btn btn-primary btn-sm" :to="{path:'./book2'}">详情</router-link></td> -->
						<td><button @click="detail(index)" class="btn btn-primary" id="aa">详情</button></td>
					</tr>
					</tbody>
			</table>
	     </section>
         </div>

		</div>

</template>
<script>

 import book2 from '../../components/book2/book2';
export default{
data(){
	return{
   newflight:
      [
       {
       company:"中国国际航空",
      number:"CA4194",
      depart:'苏州',
      dest:"安阳",
      StartTime:"2017-3-2 12:00:00",
      GetTime:'2017-3-2 14:00:00',
      money:"最低￥235"
        },
        {
       company:"中国国际航空",
      number:"CA4194",
      depart:'苏州',
      dest:"南京",
      StartTime:"2017-3-2 12:00:00",
      GetTime:'2017-3-2 14:00:00',
      money:"最低￥267"
        },{
       company:"中国国际航空",
      number:"CA4194",
      depart:'苏州',
      dest:"南京",
      StartTime:"2017-3-2 12:00:00",
      GetTime:'2017-3-2 14:00:00',
      money:"最低￥267"
        }    
      ],
      flight:
      [
       {
       company:"中国国际航空",
      number:"CA4194",
      depart:'苏州',
      dest:"安阳",
      StartTime:"2017-3-2 12:00:00",
      GetTime:'2017-3-2 14:00:00',
      money:"最低￥235"
        },
        {
       company:"中国国际航空",
      number:"CA4194",
      depart:'苏州',
      dest:"南京",
      StartTime:"2017-3-2 12:00:00",
      GetTime:'2017-3-2 14:00:00',
      money:"最低￥267"
        }]
    
  }
      
	},
	methods: {
        search:function(){
        	 var depart=this.flight.depart;//获取客户的输入出发地；
	         var dest=this.flight.dest;//获取客户输入的目的地；
	         var flight=this.flight; //这个应该是后台给我的数据；
	         var  newflight=this.newflight=[];  //新建newflight并初始化为空；
             for(index in flight){
              if(depart===flight[index].depart&&dest===flight[index].dest){
                  newflight.push(flight[index]);//遍历flight,若数据中有查找到的航班则存储到newflight数组中去；

                }  
               };
        	// var vm=this;

        	// $.ajax({
       //    async:true,
       //    url:url,//要访问的后台地址
       //    type:"POST",
       //    data：['start':depart,'dest':dest],
       //    dataType:'json',
       //    error:function(){
       //       alert('获取信息失败！');
       //    },
       //    success:function(data){
       //      var flight=data; //这个应该是后台给我的数据；
       //      var  newflight=this.newflight=[];  //新建newflight并初始化为空；
       //       for(index in flight){
       //        if(depart===flight[index].depart&&dest===flight[index].dest){
       //            newflight.push(flight[index]);//遍历flight,若数据中有查找到的航班则存储到newflight数组中去；
       //          }
       //        }
       //     }
       //  })
        },
        detail:function(){
         
        }
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
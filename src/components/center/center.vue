<template>
	<div id="center">
		   <div id="detail">
		   	<h3>
		   		会员信息
		   	</h3>
		   	<article>
		   		<table class="table">
		   			<thead>
		   				<tr>
		   					<th>姓名</th>
		   					<th>性别</th>
		   					<th>电话号码</th>
		   					<th>身份证号码</th>
		   				</tr>
		   			</thead>
		   			<tbody class="table-hover">
		   				<tr>
		   					<td></td>
		   					<td></td>
		   					<td></td>
		   					<td></td>
		   				</tr>
		   			</tbody>
		   		</table>
		   	</article>
		   </div>
		   <div id="records">
		   	<h3>
                往期记录		   	
            </h3>
		   	<article>
		   		bbba
		   	</article>
		   </div>
			<div id="special">
		   	<h3>
		   		会员特权
		   	</h3>
		   	<article>
		   		aaaaa
		   	</article>
		   </div>
		
	</div>
</template>
<script>
	export default{};
</script>
<style>
	#center{
		font-size: 20px;
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
</style>
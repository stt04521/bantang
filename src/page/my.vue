<template>
	<div class="my">
		<div class="info">
			<h1 class="userIco"><img src="../assets/my/userLogo.jpg" alt="" class="icoImg"/></h1>
			<p class="userName">橙</p>
			<p class="userPhone">158****3921</p>
		</div>
		<div class="order">
			<h2 class="title">我的订单</h2>
			<div class="orderWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-daifukuan ordeIco"></i>
				</p>
				<a href="" class="subNavA">待付款</a>
			</div>
			<div class="orderWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-daifahuo ordeIco"></i>
				</p>
				<a href="" class="subNavA">待发货</a>
			</div>
			<div class="orderWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-yifahuo ordeIco"></i>
				</p>
				<a href="" class="subNavA">已发货</a>
			</div>
			<div class="orderWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-daipingjia ordeIco"></i>
				</p>
				<a href="" class="subNavA">待评价</a>
			</div>
			<div class="orderWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-shouhoufuwu ordeIco"></i>
				</p>
				<a href="" class="subNavA">售后服务</a>
			</div>
		</div>
		<div class="service">
			<h2 class="title">我的服务</h2>
			<div class="serviceWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-shoucang serviceIco"></i>
				</p>
				<p href="" class="subNavA">收藏</p>
			</div>
			<div class="serviceWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-address serviceIco"></i>
				</p>
				<p href="" class="subNavA">地址管理</p>
			</div>
			<div class="serviceWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-youhuiquan serviceIco"></i>
				</p>
				<p href="" class="subNavA">优惠券</p>
			</div>
			<div class="serviceWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-lipinqia serviceIco"></i>
				</p>
				<p href="" class="subNavA">礼品卡</p>
			</div>
			<div class="serviceWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-yaoqinghaoyou serviceIco"></i>
				</p>
				<p href="" class="subNavA">邀请好友</p>
			</div>
			<div class="serviceWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-zuji serviceIco"></i>
				</p>
				<p href="" class="subNavA">足迹</p>
			</div>
			<div class="serviceWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-kefu serviceIco"></i>
				</p>
				<p href="" class="subNavA">客服</p>
			</div>
			<div class="serviceWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-bangzhuzhongxin serviceIco"></i>
				</p>
				<p href="" class="subNavA">帮助中心</p>
			</div>
			<div class="serviceWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-shezhi serviceIco"></i>
				</p>
				<p href="" class="subNavA">设置</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.my {
		background: #f5f5f5;
		padding-bottom: 2.3rem;
	}
	
	.info {
		width: 100%;
		height: 8rem;
		text-align: center;
		padding-top: 1.35rem;
		background: url("../assets/my/infoBac.jpg")no-repeat;
		background-size: 100% 100%;
	}
	
	.userIco {
		width: 3.75rem;
		height: 3.75rem;
		margin: 0px auto 0.5rem auto;
		border-radius: 50%;
	}
	
	.icoImg {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.userName {
		font-size: 0.8rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: #3a3a3a;
	}
	
	.userPhone {
		color: #7d7d7d;
		font-size: 0.6rem;
	}
	
	.userIco {
		width: 3.75rem;
		height: 3.75rem;
		margin: 0px auto 0.5rem auto;
		border-radius: 50%;
	}
	
	.userName {
		font-size: 0.8rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: #3a3a3a;
	}
	
	.userPhone {
		color: #7d7d7d;
		font-size: 0.6rem;
	}
	
	.order,
	.service {
		padding-bottom: 0.3rem;
		overflow: hidden;
		background: #fff;
	}
	
	.service {
		margin-top: 0.5rem;
	}
	
	.serviceWarp {
		width: 25%;
		float: left;
	}
	
	.title {
		height: 2.2rem;
		line-height: 2.2rem;
		margin: 0 0.75rem;
		border-bottom: 0.05rem solid #e5e5e5;
		text-align: left;
		color: #3a3a3a;
		font-weight: 700;
		font-family: sans-serif;
	}
	
	.orderWarp {
		width: 20%;
		float: left;
	}
	
	.ordeIco {
		color: #7d7d7d;
	}
	
	.serviceWarp:nth-of-type(odd) .serviceIco {
		color: #ffd110;
	}
	
	.serviceWarp:nth-of-type(even) .serviceIco {
		color: #fdac63;
	}
	
	.subNavImg {
		margin: 0.55rem auto 0rem;
	}
	
	.subNavA {
		font-size: 0.6rem;
		color: #7d7d7d;
	}
</style>
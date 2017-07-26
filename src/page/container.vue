<template>
	<div class="indexWarp">

		<router-view></router-view>
		<nav>
			<div class="mainNavWarp">
				<p href="" class="mianNavImg orange">
					<i class="icon iconfont icon-shouye"></i>
				</p>
				<a href="" class="mainNavA orange">首页</a>
			</div>
			<div class="mainNavWarp">
				<router-link to="classify">
					<p href="" class="mianNavImg">
						<i class="icon iconfont icon-leimupinleifenleileibie"></i>
					</p>
					<a href="" class=" mainNavA">分类</a>
				</router-link>
			</div>
			<div class="mainNavWarp">
				<router-link to="shoppingCart">
					<p href="" class="mianNavImg">
						<i class="icon iconfont icon-gouwuche"></i>
					</p>
					<a href="" class=" mainNavA">购物车</a>
				</router-link>
			</div>
			<div class="mainNavWarp">
				<router-link to="my">
					<p href="" class="mianNavImg">
						<i class="icon iconfont icon-wode"></i>
					</p>
					<a href="" class=" mainNavA">我的</a>
				</router-link>
			</div>
		</nav>
	</div>
</template>
<script>
</script>
<style>
	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
		font-weight: normal;
	}
	
	p {
		margin: 0;
	}
	
	a,
	span,
	p,
	li,
	h1,
	h2,
	h3,
	h4,
	h5,
	textarea {
		font-family: 'Microsoft Yahei', sans-serif;
		font-size: 16px;
		color: #333;
	}
	
	a {
		text-decoration: none;
	}
	
	img {
		border: 0;
		vertical-align: middle;
	}
	
	input {
		border: 0;
		margin: 0;
		padding: 0;
		border: 0.042rem solid #ccc;
		border-radius: 0.21rem;
		outline: none;
	}
	
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	/*nav*/
	
	nav {
		position: fixed;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		border-top: 0.042rem solid #e5e5e5;
		background: #fff;
	}
	
	.mainNavWarp {
		width: 25%;
		text-align: center;
		float: left;
	}
	
	.mianNavImg {
		width: 0.85rem;
		height: 0.76rem;
		color: #7d7d7d;
		margin: 9px auto 0 auto;
	}
	
	.mainNavA {
		font-size: 0.51rem;
		color: #7d7d7d;
		display: inline-block;
		margin: 0.21rem 0;
	}
	
	.orange {
		color: #ff6600;
	}
</style>
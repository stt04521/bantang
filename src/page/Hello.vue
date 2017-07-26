<template>
	<div>
		<header>
			<i class="search icon iconfont icon-sousuo"></i>
			<span class="cakeLogo"></span>
			<i class="messageIco icon  iconfont icon-message"></i>
		</header>
		<div class="banner">

      <mt-swipe :auto="10000">
        <mt-swipe-item><a href="" ><img src="../assets/banner.png" alt="" class="bannerImg" /></a></mt-swipe-item>
        <mt-swipe-item><a href="" ><img src="../assets/banner.png" alt="" class="bannerImg" /></a></mt-swipe-item>
        <mt-swipe-item><a href="" ><img src="../assets/banner.png" alt="" class="bannerImg" /></a></mt-swipe-item>
      </mt-swipe>
			<p class="bannerTitle">
				<i class="locationIco icon iconfont icon-iconxiangmusuozaidi"></i>
				<a href="" class="shopName">中山大道分店</a>
				<a href="" class="changeShop">切换</a>
			</p>
			<p class="bannerSubTitle">马上尝鲜</p>
			<div class="circle">
				<a href="" class="active circlrA"></a>
				<a href="" class="circlrA"></a>
				<a href="" class="circlrA"></a>
			</div>
		</div>
		<div class="subNav">
			<div class="subNavWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-wodeliquan icoSize"></i>
				</p>
				<a href="" class="subNavA">新人礼券</a>
			</div>
			<div class="subNavWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-peisong1 icoSize"></i>
				</p>
				<a href="" class="subNavA">三小时达</a>
			</div>
			<div class="subNavWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-xinpin icoSize"></i>
				</p>
				<a href="" class="subNavA">新品尝鲜</a>
			</div>
			<div class="subNavWarp">
				<p href="" class="subNavImg">
					<i class="icon iconfont icon-bjesc-3 icoSize"></i>
				</p>
				<a href="" class="subNavA">半糖会员</a>
			</div>
		</div>
		<div class="content">
			<h3 class="mianTitle"><span class="mianTitleBefore icon iconfont icon-cuxiao-s"></span>本月推荐<span class="mianTitleAfter icon iconfont icon-cuxiao-s"></span></h3>
			<div class="commodity">
				<h2 class="commodityTitle">"夏日甜心"</h2>
				<h4 class="commodityDes">新鲜时令水果与淡奶油的完美融合</h4>
				<p class="priceP"><i class="priceIco icon iconfont icon-RMB-copy"></i><span class="price">169.0</span>元起</p>
				<span class="commodityImg">
					<img src="../assets/cake1.jpg" class="cakeImg">
				</span>
			</div>
			<div class="commodity">
				<h2 class="commodityTitle">"午后花园"</h2>
				<h4 class="commodityDes">新鲜时令水果与淡奶油的完美融合</h4>
				<p class="priceP"><i class="priceIco icon iconfont icon-RMB-copy"></i><span class="price">169.0</span>元起</p>
				<span class="commodityImg">
					<img src="../assets/cake2.jpg" class="cakeImg">
				</span>
			</div>
		</div>
	</div>
</template>

<script>



  export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
    created(){
    },
    mounted(){

    },
    computed: {

    },
    methods: {

    },
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*header*/
	header {
		height: 2rem;
		position: relative;
	}

	.search {
		display: inline-block;
		width: 0.9rem;
		height: 0.9rem;
		position: absolute;
		top: 0.65rem;
		left: 0.75rem;
	}

	.cakeLogo {
		display: inline-block;
		width: 1.5rem;
		height: 1.25rem;
		margin-top: 0.25rem;
		background: url("../assets/cakeLogo.png")no-repeat;
		background-size: 100% 100%;
	}

	.messageIco {
		display: inline-block;
		width: 0.9rem;
		height: 0.9rem;
		position: absolute;
		top: 0.65rem;
		right: 0.75rem;
	}
	/*banner*/

	.banner {
		height: 9.61rem;
		position: relative;
	}

	.bannerLi.firstLi {
		display: block;
	}

	.bannerLi {
		display: none;
	}

	.bannerImg {
		width: 100%;
		height: 100%;
	}

	.bannerTitle {
		width: 10.68rem;
		height: 1.28rem;
		border-radius: 0.85rem;
		background: rgba(0, 0, 0, 0.2);
		line-height: 1.28rem;
		color: #fff;
		position: absolute;
		top: 0.64rem;
		left: 2.7rem;
	}

	.shopName {
		font-size: 0.51rem;
		color: #fff;
	}

	.locationIco {
		width: 0.51rem;
		height: 0.64rem;
		display: inline-block;
		float: left;
		margin: 0.085rem 0.42rem 0px 0.51rem;
	}

	.shopName {
		float: left;
	}

	.changeShop {
		float: right;
		margin-right: 0.51rem;
	}

	.shopName,
	.changeShop {
		font-size: 0.51rem;
		color: #fff;
	}

	p.bannerSubTitle {
		width: 0.85rem;
		height: 3.16rem;
		font-size: 0.51rem;
		background: #7d7d7d;
		color: #fff;
		padding-top: 0.38rem;
		border-radius: 0.85rem;
		position: absolute;
		top: 3.67rem;
		left: 2.7rem;
	}

	.active {
		background: #ff6600;
	}

	.circlrA {

	}

	.circle {
		position: absolute;
		bottom: 0.55rem;
		width: 1.7rem;
		left: 50%;
		margin-left: -0.76rem;
	}
	/*subNav*/

	.subNav {
		height: 3.73rem;
		padding-top: 0.74rem;
		padding-left: 0.96rem;
		background: #fff;
		overflow: hidden;
	}

	.subNavWarp {
		width: 3.52rem;
		float: left;
	}

	.subNavImg {
		display: inline-block;
		width: 1.92rem;
		height: 1.92rem;
		border-radius: 50%;
		line-height: 1.92rem;
		color: #fff;
		text-align: center;
	}

	.icon.iconfont.icoSize {
		font-size: 0.85rem!important;
	}

	.subNavWarp:nth-child(1) .subNavImg {
		background: #66ffcc;
	}

	.subNavWarp:nth-child(2) .subNavImg {
		background: #ffcc33;
	}

	.subNavWarp:nth-child(3) .subNavImg {
		background: #e8697a;
	}

	.subNavWarp:nth-child(4) .subNavImg {
		background: #6bc5e0;
	}

	.subNavA {
		display: inline-block;
		margin-top: 0.42rem;
		font-size: 0.51rem;
		color: #7d7d7d;
	}
	/*content*/

	.content {
		background: #f5f5f5;
		padding-top: 1.06rem;
		padding-bottom: 2rem;
	}

	.mianTitle {
		font-size: 0.68rem;
		color: #3a3a3a;
		margin-bottom: 0.085rem;
		font-weight: bold;
		letter-spacing: 0.085rem;
	}

	.mianTitleBefore,
	.mianTitleAfter {
		display: inline-block;
		width: 0.51rem;
		height: 0.51rem;
		color: #FF6600;
	}

	.mianTitleBefore {
		margin-right: 0.51rem;
	}

	.mianTitleAfter {
		margin-left: 0.34rem;
	}

	.commodity {
		width: 14.7rem;
		margin: 0.42rem auto;
		background: #fff;
		padding-top: 0.98rem;
		padding-bottom: 0.64rem;
		border-radius: 0.42rem;
		position: relative;
	}

	.commodityImg {
		display: inline-block;
		width: 5.94rem;
		height: 5.94rem;
		position: absolute;
		right: 0.21rem;
		top: 0;
	}

	.cakeImg {
		width: 100%;
	}

	.commodityTitle {
		font-size: 0.76rem;
		font-weight: bold;
		text-align: left;
		padding-left: 0.59rem;
	}

	.commodityDes {
		font-size: 0.42rem;
		text-align: left;
		padding-left: 0.59rem;
		margin-top: 0.42rem;
	}

	.priceP {
		margin-top: 0.98rem;
		text-align: left;
		padding-left: 0.59rem;
		color: #ff6600;
	}

	.priceIco {
		display: inline-block;
		width: 0.42rem;
		height: 0.42rem;
		margin-right: 0.42rem;
	}

	span.price {
		font-size: 0.85rem;
		color: #ff6600;
	}


</style>

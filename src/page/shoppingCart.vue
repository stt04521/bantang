<template>
	<div>
		<header>
			<span class="title">购物车</span>
			<span class="editor">编辑</span>
		</header>
		<div class="content">
			<div class="detail">
				<div class="chooseArr">
					<span class="choose"><i class="icon iconfont icon-gou arrIco"></i></span>
				</div>
				<h2 class="cakeImgs">
					<img src="../assets/cake2.jpg" class="cakeImg">
				</h2>
				<div class="des">
					<p class="title">芒果慕斯</p>
					<p class="weight">已选：1磅</p>
					<p class="price"><i class="icon iconfont icon-RMB-copy priceIco"></i>179.0</p>
				</div>
				<p class="quantity">X<span class="detailNum">1</span></p>
			</div>
			<div class="detail">
				<div class="chooseArr">
					<span class="noChoose"></span>
				</div>
				<h2 class="cakeImgs">
					<img src="../assets/cake2.jpg" class="cakeImg">
				</h2>
				<div class="des">
					<p class="title">芒果慕斯</p>
					<p class="weight">已选：1磅</p>
					<p class="price"><i class="icon iconfont icon-RMB-copy priceIco"></i>179.0</p>
				</div>
				<p class="quantity">X<span class="detailNum">1</span></p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	/*header*/
	
	header {
		height: 2rem;
		line-height: 2rem;
		position: relative;
		border-bottom: 1px solid #e5e5e5;
	}
	
	header .title {
		font-size: 0.9rem;
	}
	
	.editor {
		position: absolute;
		right: 0.75rem;
		font-size: 0.75rem;
	}
	/*content*/
	
	.detail {
		position: relative;
		margin-left: 2.5rem;
		margin-right: 0.75rem;
		border-bottom: 0.01rem solid #E5E5E5;
		float: left;
	}
	
	.chooseArr {
		width: 0.9rem;
		height: 0.9rem;
		position: absolute;
		top: 2.15rem;
		left: -1.5rem;
	}
	
	.arrIco {
		color: #fff;
		font-size: 0.45rem;
	}
	
	.choose {
		display: inline-block;
		width: 100%;
		height: 100%;
		background: orange;
		border-radius: 50%;
		line-height: 0.9rem;
	}
	
	.noChoose {
		border: 0.05rem solid orange;
		border-radius: 50%;
		background: #fff;
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	
	.cakeImgs {
		width: 4.1rem;
		height: 4.1rem;
		margin: 0.6rem auto;
		float: left;
	}
	
	.cakeImg {
		width: 100%;
	}
	
	.des {
		float: left;
		width: 6.5rem;
		text-align: left;
		padding-left: 0.65rem;
	}
	
	.title {
		font-size: 0.68rem;
		margin-top: 0.68rem;
		color: #3a3a3a;
	}
	
	.weight {
		font-size: 0.6rem;
		color: #7f7f7f;
		margin-top: 0.45rem;
	}
	
	.price {
		font-size: 0.75rem;
		color: #ff6600;
		margin-top: 0.65rem;
	}
	
	.priceIco {
		margin-right: 0.5rem;
	}
	
	.quantity {
		float: right;
		font-size: 0.6rem;
		margin-top: 0.75rem;
	}
</style>
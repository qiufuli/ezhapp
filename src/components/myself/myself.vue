<template>
	<div class="myself">
		<mt-header fixed title="我的" ></mt-header>
		<div class="wrap">
			<div class="person_bg">
				<img src="static/test/test01.jpg" alt="" />
				<p>
					王小毛
				</p>
			</div>
			<div class="list clearfix mb_1">
				<div class="list_img">
					<img src="static/test/xg.png" alt="" />
				</div>
				<div class="list_title">
					修改密码
					<i class="list_i">
						<img src="static/test/right.png" alt="" />
					</i>
				</div>
			</div>
			<div class="list clearfix ">
				<div class="list_img">
					<img src="static/test/sz.png" alt="" />
				</div>
				<div class="list_title">
					设备管理
					<i class="list_i">
						<img src="static/test/right.png" alt="" />
					</i>
				</div>
			</div>
			<div class="list clearfix">
				<div class="list_img">
					<img src="static/test/fk.png" alt="" />
				</div>
				<div class="list_title">
					意见反馈
					<i class="list_i">
						<img src="static/test/right.png" alt="" />
					</i>
				</div>
			</div>
			<div class="list clearfix">
				<div class="list_img">
					<img src="static/test/sx.png" alt="" />
				</div>
				<div class="list_title noborder_bottom">
					新版本检测
					<i class="list_i">
						<img src="static/test/right.png" alt="" />
					</i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.mint-header{
		width: 100%;
		line-height: 3rem;
		background:#fb7065;
		text-align: center;
		color: #fff;
		font-weight: normal;
	}
	.person_bg{
		height: 15rem;
		background:#fb7065;
		text-align: center;
		margin-top: -0.1rem;
	}
	.person_bg img{
		display: inline-block;
		width: 5.6rem;
		height: 5.6rem;
		border-radius: 50%;
		margin-top: 3rem;
	}
	.person_bg p{
		color: #fff;
		font-size: 1.4rem;
		line-height: 3rem;
	}
	.list{
		background: #fff;
	}
	.list .list_img{
		float: left;
		margin: 0.5rem 1rem 0.5rem 1rem;
	}
	.list .list_img img{
		display: inline-block;
		width: 2.6rem;
		height: 2.6rem;
	}
	.list .list_title{
		display: inline-block;
		border-bottom: 1px solid #efeded;
		width: 26rem;
		color: #7c807c;
		font-size: 1.2rem;
		line-height: 3.8rem;
		position: relative;
	}
	.list .list_title i,.list .list_title i img{
		display: inline-block;
		width: 1.6rem;
		height: 1.6rem;
	}
	.list .list_title i{
		position: absolute;
		right: 0;
		top:1rem;
	}
	.list .list_title i img{
		vertical-align: top;
	}
</style>
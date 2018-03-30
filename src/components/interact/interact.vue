<template>
	<div class="interact">
		<mt-header fixed title="互动" ></mt-header>
		<div class="wrap">
			<div class="inter_list">
				<div class="inter_item clearfix">
					<div class="inter_img colGre">
						<img src="static/test/xx.png" alt="" />
					</div>
					<div class="inter_title">
						发消息
					</div>
				</div>
				<div class="inter_item clearfix">
					<div class="inter_img colblu">
						<img src="static/test/tz.png" alt="" />
					</div>
					<div class="inter_title">
						发通知
					</div>
				</div>
				<div class="inter_item clearfix">
					<div class="inter_img colyel">
						<img src="static/test/bx.png" alt="" />
					</div>
					<div class="inter_title noborder_bottom">
						发表现
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.inter_list{
		background: #fff;   
	}
	.inter_item{
	}
	.inter_item .inter_img{
		float: left;
		padding: 1rem;
		border-radius: 50%;
		text-align: center;
		margin: 0.5rem 0.5rem 0.5rem 1rem;
	}
	.colGre{
		background: #51da42;	
	}
	.colblu{
		background: #76d8ff;	
	}
	.colyel{
		background: #f9e237;	
	}
	.inter_item .inter_img img{
		display: inline-block;
		width: 2rem;
		height: 2rem;
	}
	.inter_item .inter_title{
		line-height: 4.9rem;
		border-bottom: 1px solid #efeded;
		display: inline-block;
		width: 25rem;
		color: #7c807c;
		font-size: 1.2rem;
	}
</style>
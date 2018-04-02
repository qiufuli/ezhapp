<template>

	<transition name="slideY">
		<div class="detail_person child">
			<mt-header fixed title="个人信息">
				<router-link :to="getParentLink" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				
			</mt-header>
			<div class="wrap">
				<div class="detail_person_img">
					<img class="targetImg" src="static/test/test01.jpg" alt="" />
					<i class="ca">
						<img src="static/test/ca.png" alt="" />
					</i>
				</div>
				<div class="detail_person_list clearfix">
					<span>姓&nbsp;&nbsp;&nbsp;&nbsp;名</span>
					<p>王小毛</p>
				</div>
				<div class="detail_person_list clearfix">
					<span>手机号</span>
					<p>13601000001</p>
				</div>
				<div style="height: 1rem;"></div>
				<div class="detail_person_list clearfix">
					<span>身&nbsp;&nbsp;&nbsp;&nbsp;份</span>
					<p>管理员</p>
				</div>
				<div class="detail_person_list clearfix">
					<span>学&nbsp;&nbsp;&nbsp;&nbsp;校</span>
					<p>演示幼儿园</p>
				</div>
				<div class="detail_person_list clearfix ">
					<span>班&nbsp;&nbsp;&nbsp;&nbsp;级</span>
					<p class="noborder_bottom">王小毛</p>
				</div>
				<p class="warn_p">若信息有误,请联系学校管理员变更</p>
			</div>

		</div>

	</transition>
</template>

<script>
	export default {
		computed:{
			getParentLink(){
				// 动态获取父路由
				return this.$route.path.substring(this.$route.path.indexOf('/'),this.$route.path.lastIndexOf('/'));
			}
		}
	}
</script>

<style scoped>
	.detail_person_img {
		width: 100%;
		height: 10rem;
		background: #fff;
		position: relative;
		margin-bottom: 1rem;
	}
	
	.detail_person_img .targetImg {
		display: inline-block;
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 2rem;
		margin-left: -3rem;
	}
	
	.detail_person_img .ca,
	.detail_person_img .ca img {
		display: inline-block;
		width: 2rem;
		height: 2rem;
	}
	
	.detail_person_img .ca {
		position: absolute;
		left: 57%;
		top: 6rem;
		margin-left: -1rem;
	}
	
	.detail_person_list {
		background: #fff;
		line-height: 3rem;
	}
	
	.detail_person_list span {
		float: left;
		font-size: 1.2rem;
		color: #7c807c;
		margin: 0 1rem;
	}
	
	.detail_person_list p {
		display: inline-block;
		float: left;
		width: 25rem;
		border-bottom: 1px solid #ededed;
		text-align: right;
		color: #949494;
		font-size: 1.1rem;
	}
	.warn_p{
		text-align: center;
		line-height: 3rem;
		color:#a59b9b;
	}
</style>
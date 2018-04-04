<template>
	<transition name="slideY">
		<div class="mainsingle child">
			<mt-header fixed :title="queryTest">
				<router-link to="/interact/maillist" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
			</mt-header>
			<div class="mainBox">
				<scroll :data="maillist" class="mainBox_1">
					<div class="clearfix">
						<div class="mainbox_2_list clearfix right" v-for="item in maillist">
							<div class="basestyle">
								<div class="test">还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁还有谁</div>
							<img class="list_img" src="static/test/test01.jpg" alt="" />
							</div>
							
						</div>
					</div>
				</scroll>
				<div class="send clearfix">
					<mt-button type="primary" class="sendMes">发送</mt-button>
					<input type="text" placeholder="说点什么" />
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Scroll from '@/base/scroll/scroll';
	export default{
		data(){
			return{
				maillist:[
					{
						title:'全体班级',
						items:['aaa','bbb','bbb']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					}
				]
			}
		},
		components:{
			Scroll
		},
		computed:{
			queryTest(){
				return this.$route.query.test;
			}
		}
	}
</script>

<style scoped>
	.mainBox{
		position: absolute;
	    top:3.5rem;
	    bottom: 0;
	    width: 100%;
	}
	.mainBox_1{
		position: absolute;
		top: 0;
		bottom: 4rem;
		width: 100%;
		overflow: hidden;
	}
	.send{
		position: fixed;
		bottom:0;
		left: 0;
		width: 100%;
		height: 4rem;
		background: #fff;
		z-index: 500;
	}
	.send input{
		width: 20rem;
		line-height: 2.5rem;
		border-radius: 0.4rem;
		border: 1px solid #ccc;
		text-indent:0.5rem;
		margin-top: 0.7rem;
		margin-right: 0.5rem;
		vertical-align: middle;
		float: right;
		font-size: 1.2rem;
	}
	.send .sendMes{
		vertical-align: bottom;
		background: #eae8e8;
		color: #464646;
		border: 1px solid #ccc;
		height: 2.5rem;
		line-height: 2.5rem;
		margin-top: 0.8rem;
		font-size: 1.2rem;
		float: right;
		margin-right: 0.5rem;
	}
	@media only screen and (min-width:375px ) {
		.send input{
			width: 22rem;
		}
		.send .sendMes{
			font-size: 1.4rem;
		}
	}
	.mainbox_2_list{
		margin-bottom: 1rem;
	}
	
	.mainbox_2_list .list_img{
		display: inline-block;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		vertical-align: top;
		margin-right: 0.5rem;
	}
	.mainbox_2_list .test{
		display: inline-block;
		position: relative;
		background: #fff;
		border-radius: 0.5rem;
		padding: 1rem 1rem ;
		border: 1px solid #ccc;
		margin-right: 0.5rem;
		max-width: 16rem;
		vertical-align: top;
		font-size: 1.4rem;
	}
	.mainbox_2_list .test::before{
		content: "";
		position: absolute;
		top: 0.5rem;
		right: -0.8rem;
		width:0px;
        height:0px;
        border-top:5px solid rgba(0,0,0,0);
        border-right:5px solid  rgba(0,0,0,0);
        border-left:5px solid #fff;
        border-bottom:5px solid  rgba(0,0,0,0);
        
	}
	.left .list_img{
		float: left;
	}
	.right .list_img{
		float: right;
	}
	.right .basestyle{
		float: right;
	}
	.left .test::before{
		content: "";
		position: absolute;
		top: 0.5rem;
		left: -0.8rem;
		width:0px;
        height:0px;
        border-top:5px solid rgba(0,0,0,0);
        border-left:5px solid  rgba(0,0,0,0);
        border-right:5px solid #fff;
        border-bottom:5px solid  rgba(0,0,0,0);
	}
</style>
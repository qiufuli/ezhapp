<template>
	<transition name="slideX">
		<div class="performance child">
			<mt-header fixed title="表现列表">
				<router-link to="/interact/performance" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
			</mt-header>
			<div class="wrap">
				<scroll :data="test" class="perPosition">
					<div>
						<div class="perList clearfix" v-for="item in test">
						<img class="per_img" :src="item.personImg" alt="" />
						<div class="per_con">
							<div class="per_h1">
								{{item.personName}}
								<span class="time">{{item.time}}</span>
							</div>
							<div class="per_text clearfix">
								<img :src="item.goodImg" alt="" />
								<p>{{item.text}}</p>
							</div>
						</div>
					</div>
					</div>
					
				</scroll>
			</div>
		</div>
	</transition>
</template>

<script>
	import Scroll from '@/base/scroll/scroll';
	export default{
		components:{
			Scroll
		},
		data(){
			return{
				test:[
					{
						personImg:'static/test/test01.jpg',
						personName:'王小毛',
						time:'20181321561',
						goodImg:'static/test/good1.png',
						text:'asdhjs啊介绍的黄金卡刷的asdhjs啊介绍的黄金卡刷的asdhjs啊'
					},
					{
						personImg:'static/test/test01.jpg',
						personName:'王小毛',
						time:'20181321561',
						goodImg:'static/test/good1.png',
						text:'asdhjs啊介绍的黄金卡刷的asdhjs啊介绍的黄金卡刷的asdhjs啊'
					},
					{
						personImg:'static/test/test01.jpg',
						personName:'王小毛',
						time:'20181321561',
						goodImg:'static/test/good1.png',
						text:'asdhjs啊介绍的黄金卡刷的asdhjs啊介绍的黄金卡刷的asdhjs啊'
					},
					{
						personImg:'static/test/test01.jpg',
						personName:'王小毛',
						time:'20181321561',
						goodImg:'static/test/good1.png',
						text:'asdhjs啊介绍的黄金卡刷的asdhjs啊介绍的黄金卡刷的asdhjs啊'
					},
					{
						personImg:'static/test/test01.jpg',
						personName:'王小毛',
						time:'20181321561',
						goodImg:'static/test/good1.png',
						text:'asdhjs啊介绍的黄金卡刷的asdhjs啊介绍的黄金卡刷的asdhjs啊'
					},
					{
						personImg:'static/test/test01.jpg',
						personName:'王小毛',
						time:'20181321561',
						goodImg:'static/test/good1.png',
						text:'asdhjs啊介绍的黄金卡刷的asdhjs啊介绍的黄金卡刷的asdhjs啊'
					},
					{
						personImg:'static/test/test01.jpg',
						personName:'王小毛',
						time:'20181321561',
						goodImg:'static/test/good1.png',
						text:'asdhjs啊介绍的黄金卡刷的asdhjs啊介绍的黄金卡刷的asdhjs啊'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.performance{
		background: #fff;
	}
	.perList{
		display: block;
		width:100%;
		background: #fff;
	}
	.perList .per_img{
		float: left;
		display: inline-block;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin: 0.5rem 1rem 0 0.5rem;
	}
	.perList .per_con{
		display: inline-block;
		float: left;
		margin-top: 0.1rem;
	}
	.per_con .per_h1{
		display: block;
		line-height: 3rem;
		font-size: 1.2rem;
		position: relative;
		width: 26rem;
	}
	
	.per_h1 .time{
		position: absolute;
		top: 0;
		right: 0;
	}
	.per_text{
		padding: 1rem 0;
		border-bottom: 1px solid #ededed;
	}
	.per_text img{
		display: inline-block;
		float: left;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		margin-right: 1rem;
	}
	.per_text p{
		float: left;
		display: inline-block;
		font-size: 1.2rem;
		color: #b8bbbf;
		line-height: 2rem;
		width: 22rem;
	}
	.perPosition{
		position: absolute;
		top: 3rem;
		bottom: 0;
	}
	@media only screen and (min-width:320px ) {
		.per_con .per_h1{
			width: 20rem ;
		}
		.per_text p{
			width: 15rem;
		}
		.per_text{
			padding: 0.5rem 0;
		}
	}
	@media only screen and (min-width:320px ) {
		.per_con .per_h1{
			width: 23rem ;
		}
		.per_text p{
			width: 19rem;
		}
		.per_text{
			padding: 0.5rem 0;
		}
	}
	@media only screen and (min-width:375px ) {
		.per_con .per_h1{
			width: 24rem ;
		}
		.per_text p{
			width: 20rem;
		}
		.per_text{
			padding: 0.5rem 0;
		}
	}
</style>
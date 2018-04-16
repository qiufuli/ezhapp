<template>
	<transition name="slideX">
		<div class="baby child">
			<div class="title">
				<i class="iconfont icon-fanhui" @click="hide"></i>
			</div>
			<d-player :options='options' @play='play' ref='player' class="dpStyle">
			</d-player>
			<scroll :data="videoUrl" class="mailHeight">
				<div  class="video-box" ref="videoBox">
					<ul class="content">
						<li v-for="(item,index) in videoUrl" @click="switchHandle(index)">
							<div></div>
							<span>{{item.name}}</span>
						</li>
					</ul>
				</div>
			</scroll>
		</div>
	</transition>
</template>

<script>
	import Scroll from '@/base/scroll/scroll';
	export default {
		data() {
			return {
				videoUrl: [{
						url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
						name: '第一个视频'
					},
					{
						url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
						name: '第二个视频'
					},
					{
						url: 'static/video/1.mp4',
						name: '第三个视频'
					},
					{
						url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
						name: '第一个视频'
					},
					{
						url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
						name: '第二个视频'
					},
					{
						url: 'static/video/1.mp4',
						name: '第三个视频'
					},
					{
						url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
						name: '第一个视频'
					},
					{
						url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
						name: '第二个视频'
					},
					{
						url: 'static/video/1.mp4',
						name: '第三个视频'
					}
				],
				options: {
					video: {
						url: 'static/video/1.mp4',
						pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
					},
					lang: 'zh-cn',
					autoplay: false,
					contextmenu: [{
						text: 'GitHub',
						link: 'https://github.com/MoePlayer/vue-dplayer'
					}]
				},
				player: null,
			}
		},
		components: {
			Scroll
		},
		created() {

		},
		mounted() {
			this.player = this.$refs.player.dp
		},
		methods: {
			play() {
				console.log('play callback')
			},
			switchHandle(index) {
				console.log(index)
				console.log()
				this.player.switchVideo({
					url: this.videoUrl[index].url
				})
			},
			hide(){
				this.$router.push('/Recommond');
			}
		}
	}
</script>

<style scoped="scoped">
	.title{
		position: fixed;
		width: 100%;
		height: 3.1rem;
		line-height: 3.1rem;
		text-align: left;
		color: #FFFFFF;
		font-size: 16px;
		top: 0;
		left: 0;
		margin: 0;
		z-index: 2;
	}
	.title .iconfont{
		color: #FFFFFF;
		width: 4rem;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
		border-radius: 50%;
		background: #000000;
		opacity: 0.5;
		margin-left: 1rem;
	}
	.baby {
		height: 100%;
	}
	
	.dpStyle {
		width: 100%;
		height: 18rem;
	}
	
	.video-box {
		margin: 2rem;
		overflow: hidden;
	}
	
	.video-box ul li {
		display: inline-block;
		width: 12rem;
		height: 10rem;
		text-align: center;
		margin-right: 2.5rem;
	}
	
	.video-box ul li div {
		width: 12rem;
		height: 8rem;
		background-color: #2C3E50;
		border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
		display: inline-block;
	}
	
	.video-box ul li:nth-child(even) {
		margin-right: 0;
	}
	.mailHeight {
		height: 69%;
		position: relative;
		overflow: hidden;
	}
</style>
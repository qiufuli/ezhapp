<template>
	<transition name="slideX">
		<div class="baby child">
			<router-link tag="div" to="/Recommond" class="title">
				<i class="iconfont icon-fanhui"></i>
			</router-link>
			<s-player :video='video' :contextmenu="contextmenu" @play='play' ref='player' class="dpStyle">
			</s-player>
			<div class="fixedHeight">
				<scroll :data="videoUrl" class="mailHeight">
					<ul class="video-box" ref="videoBox">

						<li v-for="(item,index) in videoUrl" @click="switchHandle(index)">
							<div></div>
							<span>{{item.name}}</span>
						</li>

					</ul>
				</scroll>
			</div>
		</div>
	</transition>
</template>

<script>
	import Scroll from '@/base/scroll/scroll';
	import sPlayer from '@/base/VueDPlayerHls/VueDPlayerHls';
	export default {
		data() {
			return {
				videoUrl: [],
				//https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/chunklist_w630020335.m3u8
				
					video: {
						url: '',
						pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
						type:'hls'
					},
					lang: 'zh-cn',
					autoplay: false,
					contextmenu: [{
						text: 'GitHub',
						link: 'https://github.com/MoePlayer/vue-dplayer'
					}],
				player: null,
			}
		},
		components: {
			Scroll,
			sPlayer
		},
		created() {
			this.init();
		},
		mounted() {
//			this.$nextTick(function(){
//				this.player = this.$refs.player.dp;
//				  // console.log(this.player);
//				  var hls = new Hls();
//	//			  hls.loadSource('https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/chunklist_w630020335.m3u8');
//				  hls.loadSource(this.videoUrl[0].ip);
//				  hls.attachMedia(this.player);
//			})

		},
		methods: {
			init() {
				let self = this;
				axios.get(address + 'index/api/monitorList', {
					params: {
						userId: self.$store.state.userId
					}
				}).then(function(res) {
					console.log('3333',res)

					if(res.data.code == 0) {
						console.log('返回的ip',res.data.data[0].ip)
						self.videoUrl = res.data.data;
							self.video={
								url: self.videoUrl[0].ip,
								pic: '',
								type: 'hls'
							}
						console.log(self.video)
						self.player = self.$refs.player.dp;	
						 var hls = new Hls();
						  hls.loadSource(self.videoUrl[0].ip);
						  hls.attachMedia(self.player);
					}
				}).catch(function(err) {
					console.log(err)
				})
			},
			play() {
				console.log('play callback')
			},
			switchHandle(index) {
				console.log(index)
				console.log(this.videoUrl[index].ip)
				var hls = new Hls();
			  	hls.loadSource(this.videoUrl[index].ip);
			  	hls.attachMedia(this.player);
				this.player.switchVideo({
					url: this.videoUrl[index].ip
				})
				
			},
			hide() {
				this.$router.push('/Recommond');
			}
		}
	}
</script>

<style scoped="scoped">
	.title {
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
	
	.title .iconfont {
		color: #FFFFFF;
		width: 4rem;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
		border-radius: 50%;
		background: #000000;
		opacity: 0.5;
		margin-left: 1rem;
		font-size: 1.2rem;
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
		padding-bottom: 2rem;
	}
	
	.video-box li {
		display: inline-block;
		width: 12rem;
		height: 10rem;
		text-align: center;
		margin-right: 2.5rem;
	}
	
	.video-box li div {
		width: 12rem;
		height: 8rem;
		background-color: #fff;
		border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
		display: inline-block;
	}
	
	.video-box li span {
		font-size: 1rem;
	}
	
	.video-box li:nth-child(even) {
		margin-right: 0;
	}
	
	.fixedHeight {
		position: fixed;
		top: 18rem;
		bottom: 0;
		width: 100%;
	}
	
	.mailHeight {
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	
	@media only screen and (min-width:320px) {
		.video-box li {
			width: 10rem;
		}
		.video-box li div {
			width: 10rem;
		}
	}
	
	@media only screen and (min-width:340px) {
		.video-box li {
			width: 11rem;
		}
		.video-box li div {
			width: 11rem;
		}
	}
	
	@media only screen and (min-width:360px) {
		.video-box li {
			width: 12rem;
		}
		.video-box li div {
			width: 12rem;
		}
	}
	
	@media only screen and (min-width:375px) {
		.video-box li {
			width: 12rem;
		}
		.video-box li div {
			width: 12rem;
		}
	}
</style>
<template>
	<transition name="slideX">
		<div class="performance child">
			<mt-header fixed title="表现列表">
				<router-link to="/Recommond" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
			</mt-header>
			<div class="wrap">
				<scroll :data="test" class="perPosition" :pullup="pullup" @scrollToEnd="scrollToEnd">
					<div>
						<div class="perList clearfix" v-for="item in test">
							<img class="per_img" src="static/test/person.png" alt="" />
							<div class="per_con">
								<div class="per_h1">
									{{item.from}}教师
									<span class="time">{{item.createTime}}</span>
								</div>
								<div class="per_text clearfix">
									<p>{{item.text}}</p>
								</div>
							</div>
						</div>
						<p v-show="end" class="dataP">数据已加载完毕</p>
						<p v-show="start" class="dataP">数据加载中....</p>
					</div>
				</scroll>
			</div>
		</div>
	</transition>
</template>

<script>
	import Scroll from '@/base/scroll/scroll';
	export default {
		components: {
			Scroll
		},
		data() {
			return {
				websock: null,
				OFFSET: 1,
				test: [

				],
				pullup: true,
				end: false,
				start: false
			}
		},
		created() {

			this.init()
		},
		mounted() {
			this.$nextTick(function() {

			})
		},
		methods: {
			scrollToEnd() {

				this.OFFSET++;
				this.init();
			},
			init() {
				let self = this;
				this.$nextTick(function() {
					axios.get(address + 'push/api/getNoticeList', {
						params: {
							userId: this.$store.state.userId,
							type: 'show',
							offset: self.OFFSET,
							limit: 10
						}
					}).then((res) => {
						console.log(res)
						if(res.data.code == 0) {
							if(self.test == '') {
								self.test = res.data.data.list
								self.start = true

							} else {
								if(res.data.data.list != '') {
									self.start = true
									res.data.data.list.forEach(function(data) {
										self.test.push(data);
									})
								} else {
									self.start = false;
									self.end = true;
								}

							}

						}
					})
				})
			}
		}
	}
</script>

<style scoped>
	.performance {
		background: #fff;
	}
	
	.perList {
		display: block;
		width: 100%;
		background: #fff;
	}
	
	.perList .per_img {
		float: left;
		display: inline-block;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin: 0.5rem 1rem 0 0.5rem;
	}
	
	.perList .per_con {
		display: inline-block;
		float: left;
		margin-top: 0.1rem;
	}
	
	.per_con .per_h1 {
		display: block;
		line-height: 3rem;
		font-size: 1.2rem;
		position: relative;
		width: 26rem;
	}
	
	.per_h1 .time {
		position: absolute;
		top: 0;
		right: 0;
	}
	
	.per_text {
		padding: 1rem 0;
		border-bottom: 1px solid #ededed;
	}
	
	.per_text img {
		display: inline-block;
		float: left;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		margin-right: 1rem;
	}
	
	.per_text p {
		float: left;
		display: inline-block;
		font-size: 1.2rem;
		line-height: 2rem;
		width: 22rem;
	}
	
	.perPosition {
		position: absolute;
		top: 3rem;
		bottom: 0;
	}
	
	@media only screen and (min-width:320px) {
		.per_con .per_h1 {
			width: 20rem;
		}
		.per_text p {
			width: 15rem;
		}
		.per_text {
			padding: 0.5rem 0;
		}
	}
	
	@media only screen and (min-width:320px) {
		.per_con .per_h1 {
			width: 23rem;
		}
		.per_text p {
			width: 19rem;
		}
		.per_text {
			padding: 0.5rem 0;
		}
	}
	
	@media only screen and (min-width:375px) {
		.per_con .per_h1 {
			width: 24rem;
		}
		.per_text p {
			width: 20rem;
		}
		.per_text {
			padding: 0.5rem 0;
		}
	}
	
	.dataP {
		text-align: center;
		font-size: 1.1rem;
		line-height: 2rem;
	}
</style>
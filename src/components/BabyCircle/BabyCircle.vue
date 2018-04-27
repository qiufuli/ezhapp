<template>
	<transition name="slideX">
		<div class="babyCircle child">
			<mt-header fixed title="宝贝圈">
				<router-link to="/Recommond" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<mt-button slot="right" @click="show">

					<i class="iconfont icon-fabu"></i>
				</mt-button>
			</mt-header>
			<scroll class="mailHeight" :pullup="pullup" @scrollToEnd="scrollToEnd">
				<div>
					<img class="Rec_img" src="static/test/test01.jpg" alt="" />
					<div class="message">
						<div v-for="(item,index) in commentText">
							<div class="message-item">
								<div class="message-pic">
									<div class="img-box">
										<i class="iconfont icon-icon32"></i>
									</div>
									<div class="message-info">
										<h2 class="spacing-name">{{item.userName}}</h2>
										<span class="spacing-time">{{item.createDate}}</span>
									</div>
								</div>
								<div class="message-p">
									<p>{{item.text}}</p>
								</div>
								<!--<div class="message-b">
									<div class="message-p">
										<a class="delete" @click="deleteAll(index)">
											<span class="icon-delete iconfont icon-shanchu"></span>
										</a>
										<div class="commit">
											<a class="btn-like">
												<span class="icon-heart-empty iconfont icon-dianzanb"></span>
											</a>
											<a class="btn-comment" @click.stop="comtClick()">
												<span class="icon-comment-alt iconfont icon-pinglun"></span>
											</a>
										</div>
									</div>
								</div>-->
								<!--<div class="Message">
									<div class="messageItem">
										<span class="spanName">王大毛：</span>
										<span class="spanCon">我的名字叫王大毛</span>
									</div>
									<div class="messageItem">
										<span class="spanName">王大毛：</span>
										<span class="spanCon">我的名字叫王大毛我的名字叫王大毛我的名字叫王大毛我的名字叫王大毛我的名字叫王大毛我的名字叫王大毛我的名字叫王大毛</span>
									</div>
									<div class="messageItem">
										<span class="spanName">王大毛：</span>
										<span class="spanCon">我的名字叫王大毛</span>
									</div>
								</div>-->
							</div>
						</div>
						<p v-show="end" class="dataP">数据已加载完毕</p>
						<p v-show="start" class="dataP">数据加载中....</p>
					</div>
				</div>
			</scroll>
			<div class="inset" v-show="showFlag">
				<input @blur="hide" class='inputBox' placeholder='请输入评论' ref="inputBox">
				<button class="input-button" v-on:click.stop="inputClick()">发送</button>
			</div>
			<pub @submit="commit" ref="pub" @flag="flag"></pub>
		</div>
	</transition>
</template>

<script>
	import pub from '@/components/publish/publish'
	import Scroll from '@/base/scroll/scroll';
	export default {
		components: {
			Scroll,
			pub
		},
		data() {
			return {
				trueFlag: false,
				showFlag: false,
				pullup: true,
				OFFSET: 1,
				end: false,
				start: false,
				commentText: [],
				commentText2: [],
				newCommonText: {
					name: '王大毛(管理员)',
					time: '一天前',
					content: ''
				}
			}
		},
		directives: {
			// 注册一个局部的自定义指令 v-focus
			focus: {
				// 指令的定义
				inserted: function(el) {
					// 聚焦元素
					el.focus()
				}
			}
		},
		created() {
			setTimeout(function() {
				document.body.scrollTop = document.body.scrollHeight;
			}, 300);
			this.init();
		},
		mounted() {
			this.$nextTick(function() {
				//window.addEventListener('scroll', this.menu)
			})
		},
		methods: {
			scrollToEnd() {
				this.OFFSET++
					this.init();
			},
			init() {
				let self = this;
				this.$nextTick(function() {
					axios.get(address + 'index/api/getBabyCriList', {
						params: {
							userId: self.$store.state.userId,
							offset: self.OFFSET,
							limit: 10
						}
					}).then(function(res) {
						if(res.data.code == 0) {
							if(self.commentText == '') {
								self.commentText = res.data.data;
								self.start = true
							} else {
								if(res.data.data != '') {
									self.start = true
									res.data.data.forEach(function(data) {
										self.commentText.push(data);
									})
									
								} else {
									self.start = false;
									self.end = true;
								}
							}
						}
					}).catch(function(err) {
						console.log(err)
					})
				})
			},
			flag() {
				console.log('过去了')
				this.OFFSET = 1;
				this.commentText = '';
				this.$nextTick(function() {
					this.init();
				})

			},
			show: function() {
				this.$refs.pub.show()
			},
			comtClick: function() {
				this.showFlag = true;
				this.myFocus()
			},
			inputClick: function() {
				this.$refs.inputBox.blur();
				this.showFlag = false;
			},
			BlurOrFocus: function() {

			},
			hide: function() {
				this.showFlag = false
			},
			myFocus: function() {
				let self = this;
				setTimeout(function() {
					self.$refs.inputBox.focus();
				}, 200)

			},
			commit: function(text) {
				console.log(text)
				this.newCommonText.content = text;
				this.commentText.unshift(this.newCommonText);
				console.log(this.commentText)
			},
			deleteAll: function(idx) {
				this.commentText.splice(idx, 1)
			}
		}
	}
</script>

<style scoped>
	
	.babyCircle {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-user-select: none;
	}
	
	.iconfont {
		font-size: 2.2rem;
	}
	
	.Rec_img {
		display: inline-block;
		width: 100%;
		height: 15rem;
		margin-top: 3rem;
	}
	
	.img-box {
		display: inline-block;
		margin: 0 0 0 0.5rem;
		/*width: 4rem;
		height: 4rem;
		border-radius: 50%;*/
		overflow: hidden;
	}
	
	.img-box i {
		font-size: 3rem;
	}
	
	.message-item {
		background: #fff;
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
		padding: 1rem 0;
	}
	
	.message-pic img {
		width: 4rem;
		height: 4rem;
	}
	
	.message-info {
		display: inline-block;
		width: 80%;
		vertical-align: top;
		margin-top: 0.8rem;
	}
	
	.message-info .spacing-name {
		display: inline-block;
		font-size: 1.2rem;
	}
	
	.message-info .spacing-time {
		display: inline-block;
		float: right;
		font-size: 1rem;
	}
	
	.message-b .message-p {
		padding: 1rem 1rem;
	}
	
	.message-p {
		padding: 0 1rem 0.5rem 1rem;
	}
	
	.message-p p {
		font-size: 1.1rem;
		word-break: break-word;
	}
	
	.delete {
		display: inline-block;
		width: 80%;
	}
	
	.icon-delete {
		font-size: 16px;
	}
	
	.commit {
		display: inline-block;
		text-align: right;
	}
	
	.inset {
		width: 100%;
		height: 5rem;
		background: #DCD5D5;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	
	.inputBox {
		width: 20rem;
		height: 2rem;
		margin: 1rem 1rem 0 0.5rem;
		border: 1px solid red;
		display: inline-block;
	}
	
	.input-button {
		display: inline-block;
		width: 4rem;
		height: 2rem;
		outline: 0;
		border: 0;
		color: #FFFFFF;
		background: #00A0DC;
	}
	
	.babyCircle .messageItem {
		padding: 0 1rem 0 1rem;
		background: #fff
	}
	
	.messageItem .spanName {
		width: 4rem;
		font-size: 14px;
		color: #00A0DC;
	}
	
	.message-item .spanCon {
		font-size: 14px;
	}
	
	.mailHeight {
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	
	.dataP {
		text-align: center;
		font-size: 1.1rem;
		line-height: 2rem;
	}
</style>
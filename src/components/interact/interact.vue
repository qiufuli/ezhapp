<template>
	<div class="interact">
		<mt-header fixed title="互动"></mt-header>
		<div class="wrap">

			<scroll class="inter_list">
				<div>

					<router-link tag="div" to="/BabyCircle" class="inter_item clearfix">
						<div class="inter_img colpink">
							<i class="icon iconfont icon-pengyouquan"></i>
						</div>
						<div class="inter_title">
							宝贝圈
						</div>
					</router-link>
					<router-link tag="div" to="/maillist" class="inter_item clearfix">
						<div class="inter_img colViolet">
							<i class="icon iconfont icon-tongxunlu"></i>
						</div>
						<div class="inter_title">
							通讯录
						</div>
					</router-link>
					<router-link tag="div" to="/interact/maillist" class="inter_item clearfix">
						<div class="inter_img colGre">
							<img src="static/test/xx.png" alt="" />
						</div>
						<div class="inter_title">
							发消息
						</div>
					</router-link>
					<router-link v-if="userType==3" tag="div" to="/interact/notice" class="inter_item clearfix">
						<div class="inter_img colblu">
							<img src="static/test/tz.png" alt="" />
						</div>
						<div class="inter_title">
							发通知
						</div>
					</router-link>
					<router-link v-if="userType==4" tag="div" to="/interact/performance" class="inter_item clearfix">
						<div class="inter_img colyel">
							<img src="static/test/bx.png" alt="" />
						</div>
						<div class="inter_title noborder_bottom">
							发表现
						</div>
					</router-link>
					<div class="personList">
						<div class="personItem clearfix" v-for="item in chartArr" @click="gosingle(item)">
							<p>
								<!--<b></b>-->
								<img :src="item.toAvatar?item.toAvatar : 'static/test/person.png'" onerror="src='static/test/person.png'" alt="" />
							</p>
							<div class="personCon">
								<div class="clearfix">
									<span>{{item.toName}}</span>
									<i>{{item.last | time}}</i>
								</div>
								<p>
									{{JSON.parse(item.text)['message']['content']}}
								</p>
							</div>
						</div>
					</div>
				</div>
			</scroll>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Scroll from '@/base/scroll/scroll';
	import * as time from '@/common/util/time.js'
	export default {
		data() {
			return {
				userType: this.$store.state.userType,
				chartArr: []
			}
		},
		components: {
			Scroll
		},
		created() {
			this.init();
		},
		filters: {
			time: function(value) {
				let date = new Date(value);
				let Y = date.getFullYear(),
					m = date.getMonth() + 1,
					d = date.getDate(),
					H = date.getHours(),
					i = date.getMinutes(),
					s = date.getSeconds();
				if(m < 10) {
					m = '0' + m;
				}
				if(d < 10) {
					d = '0' + d;
				}
				if(H < 10) {
					H = '0' + H;
				}
				if(i < 10) {
					i = '0' + i;
				}
				if(s < 10) {
					s = '0' + s;
				}
				let t = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
				//		var t = Y + '-' + m + '-' + d;
				return t;
			}
		},
		watch: {
			$route(to, from) {
				console.log('监听的路由', to, from)
				if(to.path == '/interact') {
					this.init();
				}
			}
		},
		methods: {
			init() {
				console.log(this.$store.state.sysUser.loginName)
				let self = this;
				let params = new URLSearchParams();
				//				params.append('pageNum', 1)
				//				params.append('pageSize', 10)
				params.append('from', self.$store.state.sysUser.loginName)
				axios.post(address3 + 'socket/msg/1/signle/msgAll', params).then(function(res) {
					console.log('获取聊天记录===>', res)
					if(res.data.code == 0) {
						self.chartArr = [];
						res.data.data.forEach(function(v, k) {
							console.log(v, k)
							//自己的
							let objs = {}
							if(v.type == 'from') {
								objs['chat'] = v.chat;
								objs['toName'] = v.fromName;
								objs['toAvatar'] = v.fromAvatar;
								objs['toClientId'] = v.fromClientid;
								objs['toId'] = v.fromId;
								objs['text'] = v.text;
								objs['last'] = v.last;
							} else {
								objs['chat'] = v.chat;
								objs['toName'] = v.toName;
								objs['toAvatar'] = v.toAvatar;
								objs['toClientId'] = v.toClientid;
								objs['toId'] = v.toId;
								objs['text'] = v.text;
								objs['last'] = v.last;
							}
							self.chartArr.push(objs)
						})
					}
				})
			},
			gosingle(test) {
				let self = this;
				let clientId = '';
				axios.get(address + 'push/api/getUserConfig', {
					params: {
						selUserId: test.toId
					}
				}).then(function(res) {
					console.log(res)
					if(res.data.data == null) {
						clientId = ''
					} else {
						clientId = res.data.data.clientId;
					}
					console.log('点击的信息内容===》', clientId)
					self.$router.push('/interact/mailsingle?name=' + test.toName + '&test=' + test.chat + '&id=' + test.toId + '&clientId=' + clientId)
				})

			}
		}
	}
</script>

<style scoped>
	.icon {
		margin: 0;
		font-size: 2rem;
		color: #fff;
	}
	
	.wrap {
		padding: 0;
		position: fixed;
		top: 3rem;
		bottom: 4.5rem;
		width: 100%;
	}
	
	.inter_list {
		background: #fff;
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.inter_item {}
	
	.inter_item .inter_img {
		float: left;
		padding: 1rem;
		border-radius: 50%;
		text-align: center;
		margin: 0.5rem 0.5rem 0.5rem 1rem;
	}
	
	.colGre {
		background: #51da42;
	}
	
	.colblu {
		background: #76d8ff;
	}
	
	.colyel {
		background: #f9e237;
	}
	
	.colpink {
		background: #fba986;
	}
	
	.colViolet {
		background: #ecb3ef;
	}
	
	.inter_item .inter_img img {
		display: inline-block;
		width: 2rem;
		height: 2rem;
	}
	
	.inter_item .inter_title {
		line-height: 5.2rem;
		border-bottom: 1px solid #ededed;
		display: inline-block;
		width: 24rem;
		color: #7c807c;
		font-size: 1.2rem;
	}
	
	.personItem {
		height: 4.4rem;
		width: 100%;
		border-bottom: 1px solid #ebebeb;
		margin-top: 1rem;
	}
	
	.personItem>p {
		display: inline-block;
		float: left;
		height: 100%;
		position: relative;
	}
	
	.personItem>p img {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin-top: 0.2rem;
		margin: 0.2rem 0.5rem 0;
	}
	
	.personItem .personCon {
		display: inline-block;
		float: left;
		width: 26rem;
		height: 4.4rem;
	}
	
	.personItem .personCon div {
		width: 100%;
		height: 2rem;
		line-height: 2rem;
	}
	
	.personItem .personCon div span {
		display: inline-block;
		float: left;
		font-size: 1.2rem;
	}
	
	.personItem .personCon div i {
		display: inline-block;
		float: right;
		font-style: normal;
		font-size: 1.1rem;
		color: #979595;
	}
	
	.personItem .personCon p {
		height: 2rem;
		line-height: 2rem;
		margin-top: 0.2rem;
		font-size: 1.1rem;
		color: #979595;
	}
	
	.personItem b {
		display: inline-block;
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
		background: red;
	}
	
	@media only screen and (min-width: 320px) {
		.inter_item .inter_title {
			width: 21rem;
		}
		.personItem .personCon {
			width: 21rem;
		}
	}
	
	@media only screen and (min-width: 340px) {
		.inter_item .inter_title {
			width: 22rem;
		}
		.personItem .personCon {
			width: 23rem;
		}
	}
	
	@media only screen and (min-width: 360px) {
		.inter_item .inter_title {
			width: 24rem;
		}
		.personItem .personCon {
			width: 25rem;
		}
	}
	
	@media only screen and (min-width: 375px) {
		.inter_item .inter_title {
			width: 25rem;
		}
		.personItem .personCon {
			width: 26rem;
		}
	}
	
	@media only screen and (min-width: 414px) {
		.inter_item .inter_title {
			width: 26rem;
		}
		.personItem .personCon {
			width: 26rem;
		}
	}
</style>
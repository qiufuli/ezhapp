<template>
	<transition name="slideX">
		<div class="login child">
			<p class="logo_img">
				<img src="static/test/lg.png" alt="" />
			</p>
			<div class="login_input clearfix">
				<i class="un"></i>
				<input type="text" v-model="loginForm.username" placeholder="请输入账号" />
			</div>
			<div class="login_input bor clearfix">
				<i class="ps"></i>
				<input type="password" v-model="loginForm.password" placeholder="请输入密码" />
			</div>
			<mt-button type="primary" class="save" @click="go()">登录</mt-button>
			<router-link tag="p" to="/login/forgetPW" class="forgetPW">忘记密码？</router-link>
			<router-view></router-view>
		</div>
	</transition>
</template>

<script>
//	import * as request from '@/utils/request.js'
	import { setUsert,getUsert} from '@/utils/auth'
	import * as scoket from '@/common/util/webscokt.js'
	import {Toast} from 'mint-ui';
	export default {
		data() {
			return {
				webscoket:null,
				loginForm: {
					username: '',
					password: null,
					randomStr: '5158_1523430505667',
					code: 'qw12',
					grant_type: 'password',
					scope: 'server'
				}
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				let info = plus.push.getClientInfo();
				if(info.clientid){
					let params = new URLSearchParams();
					params.append('clientId', info.clientid)
					var self = this;
					axios.post(address+'push/api/checkLoginStatus',params).then(function(res){
						if(res.data.code == 0){
							if(res.data.data.status == 1){
								alert("skip")
								self.$store.state.userId = res.data.data.userId;
								self.$router.push('/Recommond')
							}
						}
					})
				}
//				if(getUsert() != undefined) {
//					this.$router.push('/Recommond')
//				}
			},
			changeshow() {
				console.log(this.value)
			},
			//登录接口
			go() {
//				if(this.loginForm.username == '' || this.loginForm.password == '') {
//					Toast({
//					  message: '用户名和密码不能为空',
//					  duration: 2000
//					})
//
//				} else {
//					this.$store.dispatch('Login', this.loginForm).then(() => {
//						this.$router.push({
//							path: '/Recommond'
//						})
//					this.$store.dispatch('GetInfo', this.$store.state).then(() => { //加入聊天室
//						this.getWebsoket()
//						this.getPushInfo();
//					})
//					}).catch((error) => {
//						console.log(error)
//					})
//				}

				let self = this;
				let params = new URLSearchParams();
				params.append('encode', this.loginForm.username)
				params.append('sign', this.loginForm.password)
				axios.post(address+'index/api/login',params).then(function(res){
						if(res.data.code == 0){
							self.$store.state.userId =res.data.data;
							self.$store.state.name =self.loginForm.username;
							setUsert(self.$store.state.userId)
							self.$router.push({
							path: '/Recommond'
						})
							//getWebsoket 需要传 name ---ezh qfl 这种 
							self.getWebsoket()
							self.getPushInfo();
						}else{
							Toast({
							  message: res.data.msg,
							  duration: 2000
							})
						}
					console.log(res)
				})
			},
			getWebsoket(){
				this.websock=scoket.init()
				//scoket.setWs(this.websock)
				this.$store.dispatch('setScoket',this.websock)
				this.websock.onmessage = this.websocketonmessage;
				this.websock.onclose = this.websocketclose;
			},
			websocketonmessage(e) { //数据接收
				console.log('loGIn接收',e)
			},
			websocketsend(agentData) { //数据发送
				this.websock.send(agentData);
			},
			websocketclose(e) { //关闭
				console.log("connection closed (" + e.code + ")");
			},
			getPushInfo(){
				let info = plus.push.getClientInfo();
				let params = new URLSearchParams();
				params.append('userId',this.$store.state.userId)
				params.append('clientId',info.clientid)
				axios.post(address+'push/api/bindPushConfig',params).then((res)=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped>
	.child{
		background: url('../../../static/test/ezh_bg06.png') no-repeat center bottom;
		background-size:100% 14rem;
	}
	input::-webkit-input-placeholder {
		color: #C6C6C6;
		font-size: 1.3rem;
	}
	
	input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #949494;
	}
	
	input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #949494;
	}
	
	input:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #949494;
	}
	
	.logo_img {
		text-align: center;
		margin-top: 6rem;
		margin-bottom: 3rem;
	}
	
	.logo_img img {
		display: inline-block;
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		border: 5px solid #fff;
	}
	
	.login_input {
		width: 90%;
		height: 3rem;
		background: #fff;
		margin: 0 auto;
		border-top-left-radius: 0.3rem;
		border-top-right-radius: 0.3rem;
		margin-bottom: 0.2rem;
	}
	
	.login_input.bor {
		border-radius: 0;
		border-bottom-left-radius: 0.3rem;
		border-bottom-right-radius: 0.3rem;
	}
	
	.login_input .un,
	.login_input .ps {
		float: left;
		display: inline-block;
		margin: 0.7rem 1rem;
		width: 1.6rem;
		height: 1.6rem;
		background: url('../../../static/test/username.png') no-repeat;
		background-size: 100% 100%;
	}
	
	.login_input .ps {
		background: url('../../../static/test/password.png') no-repeat;
		background-size: 100% 100%;
	}
	
	.login_input input {
		width: 22rem;
		float: left;
		line-height: 3rem;
		border: none;
		color: #FF9800;
		font-size: 1.4rem;
	}
	
	@media only screen and (min-width:320px) {
		.login_input input {
			width: 20rem;
		}
	}
	@media only screen and (min-width:340px) {
		.login_input input {
			width: 21rem;
		}
	}
	@media only screen and (min-width:360px) {
		.login_input input {
			width: 22rem;
		}
	}
	@media only screen and (min-width:375px) {
		.login_input input {
			width: 24rem;
		}
	}
	
	.save {
		width: 70%;
		height: 3rem;
		margin: 2rem 0 0 15%;
		font-size: 1.2rem;
	}
	
	.forgetPW {
		line-height: 3rem;
		text-align: center;
		font-size: 1.4rem;
		margin-top: 1rem;
		color: #7C807C;
	}
</style>
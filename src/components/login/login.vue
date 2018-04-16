<template>
	<transition name="slideX">
		<div class="login child">
			<p class="logo_img">
				<img src="static/test/test01.jpg" alt="" />
			</p>
			<div class="login_input clearfix">
				<i class="un"></i>
				<input type="text" v-model="loginForm.username" />
			</div>
			<div class="login_input bor clearfix">
				<i class="ps"></i>
				<input type="password" v-model="loginForm.password" />
			</div>
			<mt-button type="primary" class="save" @click="go()">登录</mt-button>
			<router-link tag="p" to="/login/forgetPW" class="forgetPW">忘记密码？</router-link>
			<v-confirm v-show="flag">
				<div class="confirm_top">选择身份</div>
				<div class="">
					<mt-radio align="right" v-model="value" :options="options">
					</mt-radio>
				</div>
				<div class="confirm_bottom" @click="changeshow()">确定</div>
			</v-confirm>
			<router-view></router-view>
		</div>
	</transition>
</template>

<script>
	import vConfirm from '@/components/confirm/changeConfirm';
	import * as request from '@/utils/request.js'
	export default {
		components: {
			vConfirm
		},
		data() {
			return {
				flag: false, //radio显示
				value: '值F', //radio的值
				//radio的选项
				loginForm: {
					username: '',
					password: null,
					randomStr: '5158_1523430505667',
					code: 'qw12',
					grant_type: 'password',
					scope: 'server'
				},
				options: [{
						label: '被禁用',
						value: '值F'
					},
					{
						label: '选项A',
						value: '值A'
					},
					{
						label: '选项B',
						value: '值B'
					}
				]
			}
		},
		methods: {
			changeshow() {
				console.log(this.value)
			},
			//登录接口
			go() {
				if(this.loginForm.username == '' || this.loginForm.password == '') {
					request.message("用户名和密码不能为空")
				
				} else {
					this.$store.dispatch('Login', this.loginForm).then(() => {
						this.$router.push({
							path: '/Recommond'
						})
					}).catch((error) => {
						console.log(error)
					})
				}
			}
		}
	}
</script>

<style scoped>
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
		color: #38bae2;
		font-size: 1.6rem;
	}
	
	@media only screen and (min-width:320px) {
		.login_input input {
			width: 18rem;
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
	}
</style>
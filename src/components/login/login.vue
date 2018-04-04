<template>
	<transition name="slideX">
		<div class="login child">
			<p class="logo_img">
				<img src="static/test/test01.jpg" alt="" />
			</p>
			<div class="login_input clearfix">
				<i class="un"></i>
				<input type="text" />
			</div>
			<div class="login_input bor clearfix">
				<i class="ps"></i>
				<input type="password" />
			</div>
				<mt-button type="primary" class="save" @click="go()">登录</mt-button>
			<router-link tag="p" to="/login/forgetPW" class="forgetPW">忘记密码？</router-link>
		<router-view></router-view>
		</div>
	</transition>
</template>

<script>
	export default{
		methods:{
			go(){
				this.$router.push('/Recommond')
			}
		}
	}
</script>

<style scoped>
	.logo_img{
		text-align: center;
		margin-top: 6rem;
		margin-bottom: 3rem;
	}
	.logo_img img{
		display: inline-block;
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		border:5px solid #fff;
	}
	.login_input{
		width: 90%;
		height: 3rem;
		background: #fff;
		margin: 0 auto;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		margin-bottom: 0.3rem;
	}
	.login_input.bor{
		border-radius: 0;
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
	.login_input .un,.login_input .ps{
		float: left;
		display: inline-block;
		margin:0.7rem 1rem;
		width: 1.6rem;
		height: 1.6rem;
		background: url('../../../static/test/username.png') no-repeat;
		background-size: 100% 100%;
	}
	.login_input .ps{
		background: url('../../../static/test/password.png') no-repeat;
		background-size: 100% 100%;
	}
	.login_input input{
		width: 22rem;
		float: left;
		line-height: 3rem;
		border: none;
		color: #38bae2;
		font-size: 1.6rem;
	}
	@media only screen and (min-width:320px ) {
		.login_input input{
		width: 18rem;
		}
	}
	.save{
		width: 70%;
		height: 3rem;
		margin: 2rem 0 0 15%;
	}
	.forgetPW{
		line-height: 3rem;
		text-align: center;
		font-size: 1.4rem;
	}
</style>
<template>
	<transition name="slideY">
		<div class="forgetPW child">
			<mt-header fixed title="找回密码">
				<router-link to="/login" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
			</mt-header>
			<div class="wrap">
				<div class="forgetPW_phone" style="margin:0.5rem 0 0.5rem 0">
					<input type="text" />
				</div>
				<div class="forgetPW_yzm">
					<input type="text" />
					<mt-button type="primary" size="small" class="save">获取验证码</mt-button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
</script>

<style scoped>
	.forgetPW_phone input{
		border:none;
		line-height: 3rem;
		width: 95%;
		margin: 0 auto;
		border-radius: 0.5rem;
		text-indent: 1rem;
	}
	.forgetPW_yzm{
		width: 95%;
		margin: 0 auto;
	}
	.forgetPW_yzm input{
		display: inline-block;
		width: 10rem;
		line-height: 3rem;
		float: left;
		border: none;
		border-radius: 0.5rem;
		text-indent: 1rem;
	}
	.forgetPW_yzm .save{
		float: left;
		margin-left: 1rem;
		height: 3rem;
		font-size: 1.4rem;
	}
</style>
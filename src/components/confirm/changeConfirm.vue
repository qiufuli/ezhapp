<template>
	<transition name="showed">
		<div class="changeConfirm">
			<div class="confirm_con">
				<div class="confirm_top">提示</div>
				<div class="confirm_center">{{str}}</div>
				<div class="confirm_bottom" @click="changeshow()">确定</div>
			</div>
		</div>
	</transition>
	
</template>

<script>
	export default{
		props:{
			str:{
				type:String,
				default:''
			}
		},
		methods:{
			changeshow(){
				this.$emit('cshow',false)
			}
		}
	}
</script>

<style scoped>
	.changeConfirm{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 400;
		background:rgba(7,17,27,0.7)
	}
	.confirm_con{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		background: #fff;
		width: 70%;
		height: 12rem;
		border-radius: 1rem;
	}
	.confirm_top{
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		color: #fff;
		font-size: 1.4rem;
		background:#fb7065;
		border-top-left-radius:1rem ;
		border-top-right-radius:1rem ;
	}
	.confirm_center{
		height: 5rem;
		line-height:5rem;
		text-align: center;
		color: #949494;
		font-size : 1.2rem;
	}
	.confirm_bottom{
		width: 60%;
		height: 2.4rem;
		line-height: 2.4rem;
		background:#fb7065;
		color: #fff;
		font-size: 1.4rem;
		text-align: center;
		border-radius: 0.3rem;
		margin-left: 20%;
	}
</style>
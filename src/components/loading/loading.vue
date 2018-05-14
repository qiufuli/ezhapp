<template>
	<div class="loading">
		<img  src="./loading.gif" alt="" />
		<p class="desc">{{title}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '请稍等...'
			}
		}
	}
</script>

<style scoped>
	.loading {
		position:absolute;
		top: 50%;
		left: 50%;
		width:10rem;
		transform: translate3d(-50%,-50%,0);
		text-align: center;
		background: rgba(7,17,27,0.7);
		border-radius: 0.5rem;
		padding: 1rem 0;
		z-index: 10001;
	}
	.loading img{
		display: inline-block;
		width: 3rem;
		height: 3rem;
	}
	.loading .desc {
		line-height: 20px;
		font-size: 1.1rem;
		color: #fff;
	}
</style>
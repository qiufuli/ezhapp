<template>
	<transition name="slideX">
		<div class="camera child">
			<mt-header fixed title="个人信息">
				<router-link :to="getParentLink" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
	</transition>
</template>

<script>
	export default {
		computed:{
			getParentLink(){
				// 动态获取父路由
				return this.$route.path.substring(this.$route.path.indexOf('/'),this.$route.path.lastIndexOf('/'));
			}
		}
	}
</script>

<style>
</style>
<template>
	<transition name="slideX">
		<div class="noticeList child">
			<mt-header fixed title="通知列表">
				<router-link to="/interact/notice" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
			</mt-header>
		</div>
	</transition>
</template>

<script>
</script>

<style>
</style>
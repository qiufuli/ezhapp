<template>
	<transition name="slideY">
		<div class="manage child">
		<mt-header fixed title="设备管理">
				<router-link to="/myself" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
				<img slot="icon" src="static/test/right.png" width="24" height="24">
		</mt-header>
		<div class="wrap">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">option A</mt-tab-item>
			  <mt-tab-item id="2">option B</mt-tab-item>
			  <mt-tab-item id="3">option C</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <mt-cell v-for="n in 10" :title="'content ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <mt-cell v-for="n in 4" :title="'content ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <mt-cell v-for="n in 6" :title="'content ' + n" />
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
	</transition>
	
</template>

<script>
	
	export default{
		data(){
			return{
				selected:'1'
			}
		}
	}
</script>

<style scoped>
	.mint-tab-container-item{
		    margin-top: 0.2rem;
	}
</style>
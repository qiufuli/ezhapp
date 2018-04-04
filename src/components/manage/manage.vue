<template>
	<transition name="slideY">
		<div class="manage child">
		<mt-header fixed title="设备管理">
				<router-link to="/myself" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>

		</mt-header>
		<div class="wrap">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">火灾报警器</mt-tab-item>
			  <mt-tab-item id="2">摄像头</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			   <!-- <mt-cell v-for="n in 10" :title="'content ' + n" />-->
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <div class="monitor_list clearfix">
			    	<div class="monitor-left">
			    		<img src="static/test/sxt.png" alt="" />
			    		<p>正常</p>
			    	</div>
			    	<div class="monitor-right">
			    		<p>设备编码:  <span>21511545445456465464654</span></p>
			    		<div class="name">
			    			<span>中一班</span>
			    			<i></i>
			    		</div>
			    		<div class="Input">
			    			<input type="text" class="monitor_input" />
			    			<i></i>
			    		</div>
			    	</div>
			    </div>
			    <div class="monitor_list clearfix">
			    	<div class="monitor-left">
			    		<img src="static/test/sxt.png" alt="" />
			    		<p>正常</p>
			    	</div>
			    	<div class="monitor-right">
			    		<p>设备编码:  <span>21511545445456465464654</span></p>
			    		<div class="name">
			    			<span>中一班</span>
			    			<i></i>
			    		</div>
			    		<div class="Input">
			    			<input type="text" class="monitor_input" />
			    			<i></i>
			    		</div>
			    	</div>
			    </div>
			    <div class="monitor_list clearfix">
			    	<div class="monitor-left">
			    		<img src="static/test/sxt.png" alt="" />
			    		<p>正常</p>
			    	</div>
			    	<div class="monitor-right">
			    		<p>设备编码:  <span>21511545445456465464654</span></p>
			    		<div class="name">
			    			<span>中一班</span>
			    			<i></i>
			    		</div>
			    		<div class="Input">
			    			<input type="text" class="monitor_input" />
			    			<i></i>
			    		</div>
			    	</div>
			    </div>
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
	.monitor_list{
		background: #fff;
		padding: 1rem 0;
		margin-bottom: 0.5rem;
	}
	.monitor_list .monitor-left{
		float: left;
		margin: 0 0.5rem;
	}
	.monitor-left img{
		display: inline-block;
		width: 4rem;
		height: 4rem;
	}
	.monitor-left p{
		text-align: center;
		color: #676565;
	}
	.monitor-right{
		float: left;
	}
	.monitor-right p{
		margin-bottom:0.5rem ;
		color: #676565;
		font-size: 1.1rem;
	}
	.monitor-right .name{
		margin-bottom:0.5rem ;
		color: #676565;
		font-size: 1.1rem;
	}
	.monitor-right .name span{
		display: inline-block;
		line-height: 2rem;
	}
	.monitor-right .name i,.monitor-right .Input i{
		vertical-align: top;
		display: inline-block;
		width: 2rem;
		height: 2rem;
		background: url('../../../static/test/bj.png') no-repeat center -3px;
		background-size: 100% 100%;
	}
	.monitor-right .Input{
		
	}
	@media only screen and (max-width:360px) {
		.monitor-right .monitor_input{
			display: inline-block;
			width: 20rem;
			height: 1.6rem;
			border: 1px solid #ccc;
		} 
	}
	.monitor-right .monitor_input{
		display: inline-block;
		width: 22rem;
		height: 1.6rem;
		border: 1px solid #ccc;
	} 
	@media only screen and (min-width: 320px) {
		.monitor-right .monitor_input{
			width: 18rem;
		}
	}
	@media only screen and (min-width: 375px) {
		.monitor-right .monitor_input{
			width: 22rem;
		}
	}
</style>
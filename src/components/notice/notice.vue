<template>
	<transition name="slideY">
		<div class="mainsingle child">
			<mt-header fixed title="发通知">
				<router-link to="/interact" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
				<router-link tag="div" to="/interact/notice/noticeList" class="update" slot="right">
					通知列表
				</router-link>
			</mt-header>
			<div class="wrap">
				<router-link tag="div" to="/interact/notice/selectPeople" class="sendOut clearfix">
					<span>发送给:</span>
					<p class="sendOutWho">
						请选择联系人
					</p>
					<i class="list_i">
						<img src="static/test/right02.png" alt="">
					</i>
				</router-link>
				<!--信息框-->
				<textarea class="sendText" placeholder="请输入内容...">
				</textarea>
				<mt-button class="sendBtn" type="primary">发送</mt-button>
			</div>
			<router-view></router-view>
		</div>
	</transition>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.sendOut{
		width: 100%;
		height: 4rem;
		line-height:4rem;
		background:#fff;
		position: relative;
		border-bottom: 1px solid #efeded;
	}
	.sendOut span{
		margin:0 1rem;
		font-size: 1.2rem;
	}
	.sendOut p{
		display: inline-block;
		color: #b4b6b4;
		font-size: 1.2rem;
	}
	.sendOut .list_i,.sendOut .list_i img{
		display: inline-block;
		width: 1.6rem;
		height: 1.6rem;
	}
	.sendOut .list_i{
		position: absolute;
		top:1.2rem;
		right: 1rem;
	}
	.sendOut .list_i img{
		vertical-align: top;
	}
	.sendText{
		display: inline-block;
	    width: 100%;
	    min-height: 8rem;
	    border: none;
	    resize: none;
	    outline: none;
	    padding: 1rem 0;
	    text-indent: 1rem;
	}
	.sendBtn{
		width: 90%;
		margin: 5rem 0 0 5%;
	}

</style>
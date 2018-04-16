<template>
	<transition name="slideY">
		<div class="pub child" v-show="showFlag">
			<mt-header fixed title="发布动态">
				<mt-button slot="left" @click="hide">
					<mt-button icon="back"></mt-button>
				</mt-button>
				<mt-button slot="right" @click="addComment">
					发布
				</mt-button>
			</mt-header>
			<div class="wrap">
				<div class="wrap-box">
					<textarea class="sendText" @input="descInput" placeholder="请输入内容..." maxlength="240" v-model="comText"></textarea>
					<span>{{remnant}}/240</span>
				</div>
				<div class="up">
					<input type="file" name="" id="" value="" multiple/>
				</div>
				<div class="select" @click="selectShow">
					<i class="iconfont icon-yanjing icon1"></i>
					<span>选择可见范围</span>
					<a>公开</a>
					<i class="iconfont icon-go  icon2"></i>
				</div>
			</div>
			<selectAll ref="selectAll"></selectAll>
		</div>
	</transition>
</template>

<script>
	import selectAll from "@/components/select/select";
	export default {
		data() {
			return {
				showFlag: false,
				remnant: 0,
				comText: ''
			}
		},
		components: {
			selectAll
		},
		methods: {
			hide: function() {
				this.showFlag = false
			},
			show: function() {
				this.showFlag = true
			},
			descInput() {
				var txtVal = this.comText.length;
				this.remnant = txtVal;
			},
			selectShow: function() {
				this.$refs.selectAll.show()
			},
			addComment:function(){
				this.$emit("submit",this.comText);
				this.showFlag = false
				this.commentText="";				
			}

		}
	}
</script>

<style scoped="scoped">
	.wrap-box {
		width: 100%;
		background: #FFFFFF;
		margin-top: 0.2rem;
	}
	
	.sendText {
		display: inline-block;
		width: 85%;
		padding: 1rem 0 0 0.1rem;
		min-height: 8rem;
		border: none;
		resize: none;
		outline: none;
		text-indent: 1rem;
	}
	
	.wrap-box span {
		display: inline-block;
	}
	
	.up {
		width: 100%;
		height: 5rem;
		border-top: 1px solid #CCCCCC;
		border-bottom: 1px solid #CCCCCC;
		background: #FFFFFF;
	}
	
	.select {
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		background: #FFFFFF;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.select .icon1 {
		padding: 0 1rem;
	}
	
	.select .icon2 {
		font-size: 12px;
	}
	
	.select span {
		font-size: 14px;
		color: black;
		width: 70%;
		display: inline-block;
	}
	
	.select a {
		font-size: 14px;
	}
</style>
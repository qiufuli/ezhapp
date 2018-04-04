<template>
	<transition name="slideY">
		<div class="changePW child">

			<mt-header fixed title="修改密码">
				<router-link to="/myself" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>

			</mt-header>
			<!--修改密码列表-->
			<div class="wrap">
				<div class="common_list clearfix">
					<span class="common_list_left">
						原密码
					</span>
					<div class="common_list_right">
						<input class="inputStyle" ref="oldPS" type="password" placeholder="请输入原密码" />
					</div>
				</div>
				<div class="common_list clearfix">
					<span class="common_list_left">
						新密码
					</span>
					<div class="common_list_right">
						<input class="inputStyle" ref="newPS" type="password" placeholder="请输入8-16位数字、字母的组合" />
					</div>
				</div>
				<div class="common_list clearfix">
					<span class="common_list_left">
						确认密码
					</span>
					<div class="common_list_right">
						<input class="inputStyle" ref="confirmPS" type="password" placeholder="请再次输入新密码" />
					</div>
				</div>
				<mt-button type="primary" class="save" @click.native="savePs()">保存</mt-button>
			</div>
			<v-confirm :str="strs" @cshow="cshow" v-show="show"></v-confirm>
		</div>
	</transition>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import vConfirm from '@/components/confirm/changeConfirm';
	export default {
		components:{
		vConfirm
		},
		data() {
			return {
				show: false,
				strs:''
			}
		},
		methods: {
			savePs() {
				if(this.$refs.oldPS.value == '') {
					this.strs ='请输入原始密码'
					this.show = true;
				}
				if(this.$refs.oldPS.value !='' && this.$refs.newPS.value == '') {
					this.strs ='请输入8-16位数字、字母的组合'
					this.show = true;
				}
				if(this.$refs.oldPS.value !='' &&  this.$refs.newPS.value !='' && this.$refs.confirmPS.value == '') {
					this.strs ='请输入确认密码'
					this.show = true;
				}
			},
			cshow(data){
				this.show=data;
			}
		}
	}
</script>

<style scoped>
	.inputStyle {
		width: 99%;
		height: 3rem;
		line-height: 3rem;
		border: none;
		color: #949494;
		border-bottom: 1px solid #ededed;
		box-sizing: border-box;
	}
	
	.save {
		width: 70%;
		margin: 5rem 0 0 15%;
	}
	
	.showed {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	
</style>
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
			<v-confirm v-show="show">
				<div class="confirm_top">提示</div>
				<div class="confirm_center">{{strs}}</div>
				<div class="confirm_bottom" @click="changeshow()">确定</div>
			</v-confirm>
		</div>
	</transition>
</template>

<script>
	import { MessageBox, Toast } from 'mint-ui';

	import vConfirm from '@/components/confirm/changeConfirm';
	export default {
		components: {
			vConfirm
		},
		data() {
			return {
				show: false,
				strs: ''
			}
		},
		created(){
		},
		methods: {
			savePs() {
				let self = this;
				if(this.$refs.oldPS.value == '') {
					this.strs = '请输入原始密码'
					this.show = true;
				} else if(this.$refs.oldPS.value != '' && this.$refs.newPS.value == '') {
					this.strs = '请输入8-16位数字、字母的组合'
					this.show = true;
				} else if(this.$refs.oldPS.value != '' && this.$refs.oldPS.value.length < 6 || this.$refs.oldPS.value.length > 16) {
					this.strs = '请输入6-16位数字、字母的组合'
					this.show = true;
				} else if(this.$refs.oldPS.value != '' && this.$refs.newPS.value != '' && this.$refs.confirmPS.value != this.$refs.newPS.value) {
					this.strs = '请输入正确的确认密码'
					this.show = true;
				} else {
					let params = new URLSearchParams();
					params.append('userId', this.$store.state.userId);
					params.append('password', this.$refs.oldPS.value);
					params.append('newPassword', this.$refs.newPS.value);
					params.append('accessToken', this.$store.state.token);
					params.append('refreshToken',this.$store.state.refresh_token);
					axios.post(address + 'index/api/updatePwd', params).then(function(res) {
						console.log(res)
						if(res.data.code != 0) {
							Toast({
								message: res.data.msg,
								duration: 2000
							})
						} else {
							self.$store.dispatch('LogOut', self.$store.state).then(() => {
								self.$router.push({
									path: '/'
								})
							})
						}
					}).catch(function(err) {
						console.log(err)
					})
				}

			},
			changeshow() {
				this.show = false;
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
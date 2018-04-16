<template>
	<transition name="slideX">
		<div class="contactdetail child" ref="contactdetail">
			<mt-header fixed title="个人信息">
				<router-link to="/Recommond/maillist" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				
			</mt-header>
			<div class="wrap">
				<div class="person_bg">
					<img src="static/test/test01.jpg" alt="" />
					<p>{{username}}</p>
				</div>
				<div class="detail_person_list clearfix">
					<span>手&nbsp;&nbsp;&nbsp;&nbsp;机</span>
					<p>{{mobile}}</p>
				</div>
				<div class="detail_person_list clearfix">
					<span>班&nbsp;&nbsp;&nbsp;&nbsp;级</span>
					<p>{{userclass}}</p>
				</div>
				<div class="detail_person_list clearfix ">
					<span>身&nbsp;&nbsp;&nbsp;&nbsp;份</span>
					<p class="noborder_bottom">{{usertypename}}</p>
				</div>
				<div class="profile">
					<div class="weixin">
						<i class="iconfont icon-weixintubiao"></i>
						<span>聊天</span>
					</div>
					<div class="tel">
						<i class="iconfont icon-weibiaoti-"></i>
						<span @click="showAction">致电</span>
					</div>
				</div>
			</div>
			<mt-actionsheet :actions="menus1" v-model="show1" cancelText="取消">
			</mt-actionsheet>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				showFlag: false,
				menus1: [{
						name: '13601000003',
						method: this.getStr
					},
					{
						name: '拨打电话',
						method: this.getStr
					}
				],
				show1: false,
				username:'',
				mobile:'',
				userclass:'',
				usertypename:''
			}
		},
		created() {
			console.log('获取到了',this.$store.state.sysUser)
			this.username = this.$store.state.sysUser.username;
			this.mobile = this.$store.state.sysUser.mobile;
			this.userclass = this.$store.state.sysUser.username;
			this.usertypename = this.$store.state.sysUser.username;
		},
		methods: {
			hide() {
				this.$router.back(-1)
			},
			change(value) {
				this.value = value
			},
			showAction(){
				this.show1 = true;
			},
			getStr(target){			
				window.location.href = 'tel://17611258883'
			}
		}
	}
</script>

<style scoped="scoped">
	.person_bg {
		height: 15rem;
		background: #fb7065;
		text-align: center;
		margin-top: -0.1rem;
		margin-bottom: 1.2rem;
	}
	
	.person_bg img {
		display: inline-block;
		width: 5.6rem;
		height: 5.6rem;
		border-radius: 50%;
		margin-top: 3rem;
	}
	
	.person_bg p {
		color: #fff;
		font-size: 1.4rem;
		line-height: 3rem;
	}
	
	.detail_person_list {
		background: #fff;
		line-height: 3rem;
	}
	
	.detail_person_list span {
		float: left;
		font-size: 1.2rem;
		color: black;
		margin: 0 1rem;
	}
	
	.detail_person_list p {
		display: inline-block;
		width: 25rem;
		border-bottom: 1px solid #ededed;
		text-align: left;
		color: #949494;
		font-size: 1.1rem;
	}
	
	.profile {
		margin-top: 1.2rem;
		background: #FFFFFF;
		height: 3rem;
		line-height: 3rem;
		font-size: 0;
	}
	
	.profile div {
		display: inline-block;
		width: 50%;
		text-align: center;
	}
	
	.profile span {
		font-size: 18px;
		color: #fb7065;
		margin-left: 0.5rem;
	}
	
	.weixin i {
		font-size: 20px;
		color: #fb7065;
	}
	
	.tel i {
		font-size: 20px;
		color: #fb7065;
	}
</style>
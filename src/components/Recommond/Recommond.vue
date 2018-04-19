<template>
	<transition name="slideNav">
		<div class="Recommond">
			<mt-header fixed title="校园"></mt-header>
			<div class="wrap">
				<img class="Rec_img" src="static/test/test01.jpg" alt="" />
				<!--个人信息-->

				<div class="person clearfix" @click="person()">
					<img class="person_img" src="static/test/test01.jpg" alt="" />
					<p>您好，{{username}}</p>
				</div>
				<div class="baby_list clearfix">
					<router-link to="/baby" class="baby_item" tag='div'>
						<img src="static/icon/indexchoose.png" alt="" />
						<p>看宝宝</p>
					</router-link>
					<router-link to="/BabyCircle" class="baby_item" tag='div'>
						<img src="static/icon/indexchoose.png" alt="" />
						<p>宝贝圈</p>
					</router-link>
				</div>
				<div class="recommond_list clearfix">
					<router-link to="/cookbook" class="recommond_item " tag='div'>
						<img src="static/icon/brand.png" alt="" />
						<p>食谱</p>
					</router-link>
					<router-link :to="kaoqin" class="recommond_item" tag='div' @click="kaoqin()">
						<img src="static/icon/brand.png" alt="" />
						<p>考勤</p>
					</router-link>
					<router-link tag="div" :to="feel" class="recommond_item">
						<img src="static/icon/brand.png" alt="" />
						<p>体感</p>
					</router-link>
					<router-link to="/performanceList" class="recommond_item" tag='div'>
						<img src="static/icon/brand.png" alt="" />
						<p>表现列表</p>
					</router-link>
					<router-link to="/noticeList" class="recommond_item" tag='div'>
						<img src="static/icon/brand.png" alt="" />
						<p>园长信箱</p>
					</router-link>
					<router-link to="/Recommond/maillist" class="recommond_item" tag='div'>
						<img src="static/icon/brand.png" alt="" />
						<p>通讯录</p>
					</router-link>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				username: ''
			}
		},
		created() {
			let self = this;

			this.$nextTick(function() {
				self.$store.dispatch('GetInfo', this.$store.state).then(() => {
					axios.get(address + 'index/api/getUserInfo', {
					params: {
						userId: this.$store.state.userId
					}
				}).then(function(res) {
					console.log('111111',res)
					self.$store.state.sysUser = res.data.data;
					console.log('用户1', self.$store.state.sysUser)
					self.$store.state.userId = res.data.data.id;
					self.$store.state.token = res.data.data.userToken;
					self.$store.state.userType = res.data.data.userType;
					self.$store.state.name = res.data.data.loginName;
					if(self.$store.state.userType == 3) {
						self.username = res.data.data.name + '园长';
					}else if(self.$store.state.userType == 4){
						self.username = res.data.data.name + '教师';
					}else if(self.$store.state.userType == 5){
						self.username = res.data.data.name + '家长';
					}

				})
				})
				
			})

		},
		computed: {
			kaoqin() {
				if(this.$store.state.userType == 5) {
					return '/Recommond/kqCon?name=' + this.username
				} else {
					return '/kaoqin'
				}
			},
			feel() {
				if(this.$store.state.userType == 5) {
					return '/Recommond/feelCon?name=' + this.username
				} else {
					return '/feel'
				}
			}
		},
		methods: {
			person() {
				this.$router.push('/Recommond/person')
			},

		}
	}
</script>

<style scoped>
	.Rec_img {
		display: inline-block;
		width: 100%;
		height: 15rem;
	}
	
	.person {
		width: 100%;
		height: 5rem;
		background: #fff;
		margin-bottom: 1rem;
		margin-top: -0.3rem;
	}
	
	.person .person_img {
		display: inline-block;
		float: left;
		width: 3.6rem;
		height: 3.6rem;
		border-radius: 50%;
		border: 0.3rem solid #ccc;
		margin: 0.4rem 1rem 0 0.5rem;
	}
	
	.person p {
		display: inline-block;
		line-height: 5rem;
		font-size: 1.2rem;
		color: #7c807c;
	}
	
	.baby_list {
		margin-bottom: 1rem;
	}
	
	.baby_list .baby_item {
		width: 45%;
		float: left;
		height: 7rem;
		background: #fff;
		text-align: center;
		box-shadow: 0px 0.2rem 0.5rem rgba(34, 25, 25, 0.2);
		border-radius: 0.5rem;
		box-sizing: border-box;
		
	}
	
	.baby_list .baby_item:first-child {
		/*border-right: 1px solid #dcd5d5;*/
		box-sizing: border-box;
		margin-right: 6%;
		margin-left: 2%;
	}
	
	.baby_list .baby_item img,
	.recommond_item img {
		display: inline-block;
		width: 3rem;
		height: 3rem;
		margin-top: 1rem;
	}
	
	.recommond_list {
		padding-bottom: 3rem;
	}
	
	.recommond_item {
		background: #fff;
		text-align: center;
		width: 50%;
		float: left;
		height: 7rem;
		border-bottom: 1px solid #dcd5d5;
		box-sizing: border-box;
		box-shadow: 0px 0.1rem 0.3rem rgba(34, 25, 25, 0.2);
		
	}
	
	.recommond_item:nth-child(odd) {
		border-right: 1px solid #dcd5d5;
	}
	
	.recommond_item:nth-child(5) {
		border-bottom: none;
	}
	
	.recommond_item:nth-child(6) {
		border-bottom: none;
	}
	
	@media only screen and (min-width:414px) {
		.recommond_item {
			width: 33.33%;
		}
		.recommond_item {
			border-right: 1px solid #dcd5d5;
		}
		.recommond_item:nth-child(3n) {
			border-right: none;
		}
		.recommond_item:nth-child(4) {
			border-bottom: none;
		}
		.recommond_item:nth-child(5) {
			border-bottom: none;
		}
		.recommond_item:nth-child(6) {
			border-bottom: none;
		}
	}
	
	.recommond_item p,
	.baby_list .baby_item p {
		color: #949494;
		font-size: 1.1rem;
	}
</style>
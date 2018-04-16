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
					<p>宝宝在线</p>
				</router-link>
				<router-link to="/BabyCircle" class="baby_item" tag='div'>
					<img src="static/icon/indexchoose.png" alt="" />
					<p>宝贝圈</p>
				</router-link>
			</div>
			<div class="recommond_list clearfix">
				<router-link to="/cookbook" class="recommond_item" tag='div'>
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
				<div class="recommond_item">
					<img src="static/icon/brand.png" alt="" />
					<p>警告</p>
				</div>
				<div class="recommond_item">
					<img src="static/icon/brand.png" alt="" />
					<p>园长信箱</p>
				</div>
				<router-link to="/Recommond/maillist" class="recommond_item"  tag='div'>
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
					username:''
			}
		}, 
		created(){
			this.$store.dispatch('GetInfo',this.$store.state).then(()=>{
			})
			this.$nextTick(function(){
			this.username=this.$store.state.name;	
			})
			console.log('用户',this.$store.state.sysUser)
		},
		computed:{
			kaoqin(){
				if(this.$store.state.userType == 5){
					return '/Recommond/kqCon?name='+this.username
				}else{
					return '/kaoqin'
				}
			},
			feel(){
				if(this.$store.state.userType == 5){
					return '/Recommond/feelCon?name='+this.username
				}else{
					return '/feel'
				}
			}
		},
		methods:{
			person(){
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
		width: 50%;
		float: left;
		height: 7rem;
		background: #fff;
		text-align: center;
	}
	
	.baby_list .baby_item:first-child {
		border-right: 1px solid #dcd5d5;
		box-sizing: border-box;
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
	.recommond_item p,.baby_list .baby_item p{
		color:#949494;
		font-size: 1.1rem;
	}
</style>
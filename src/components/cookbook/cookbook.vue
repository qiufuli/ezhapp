<template>
	<transition name="slideX">
		<div class="cookbook">
			<mt-header fixed title="食谱">
				<router-link to="/Recommond" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<mt-button slot="right" @click="a" v-show="userT == 3">编辑食谱</mt-button>
			</mt-header>
			<div class="ta">
				<div class=" wrap">
					<tab :line-width=2 active-color='#fc378c' v-model="index">
						<tab-item class="vux-center" @on-item-click="handler(index)" :selected="demo2 === item" v-for="(item, index) in list2 " @click="demo2 = item" :key="index">
							<span>{{list3[index]}}</span>
							<p> {{item}} </p>
						</tab-item>
					</tab>
					<swiper v-model="index" height="46rem" :show-dots="false">
						<swiper-item v-for="(item, index) in list2" :key="index">
							<div class="food">
								<ul>
									<li>
										<img src="../../assets/img/icon/icon_114-114.png" />
										<div class="food-box">
											<a>早餐: <span>{{mo1}}</span></a>
											<a>早点: <span>{{mo2}}</span></a>
										</div>
									</li>
									<li>
										<img src="../../assets/img/icon/icon_114-114.png" />
										<div class="food-box">
											<a>午餐: <span>{{mo3}}</span></a>
											<a>午点: <span>{{mo4}}</span></a>
										</div>
									</li>
									<li>
										<img src="../../assets/img/icon/icon_114-114.png" />
										<div class="food-box">
											<a>晚餐: <span>{{mo5}}</span></a>
											<a>晚点: <span>{{mo6}}</span></a>
										</div>
									</li>
								</ul>
							</div>
						</swiper-item>
					</swiper>
				</div>
			</div>
			<food v-if="flag" @flags="flags" @go="go" :time="selectedTime" :longtime="getWeekTimeLong" ref="food"></food>
		</div>
	</transition>
</template>

<script>
	import * as time from '@/common/util/time.js'
	import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
	import food from '@/components/food/food'
	const list = () => ['一', '二', '三', '四', '五', '六', '日']
	export default {
		data() {
			return {
				list2: [],
				list3: list(),
				index: 0,
				demo2: '',
				selectedTime: '',
				getWeekTimeLong: '',
				flag: false,
				mo1: '',
				mo2: '',
				mo3: '',
				mo4: '',
				mo5: '',
				mo6: '',
				getList:[]
			}
		},
		watch: {
			index(n, o) {
				console.log(n, o)
				this.getWeekTimeLong = time.getThisTime3()[n];
				let self = this;

					axios.get(address + 'index/api/getRecipes', {
						params: {
							userId: this.$store.state.userId,
							createDate: new Date(self.getWeekTimeLong).getTime()
						}
					}).then((res) => {
						if(res.data.data == null){
							self.mo1 = '';
							self.mo2 = '';
							self.mo3 = '';
							self.mo4 = '';
							self.mo5 = '';
							self.mo6 = '';
						}else{
							self.getList = eval(res.data.data.text);
							self.mo1 = self.getList[0];
							self.mo2 = self.getList[1];
							self.mo3 = self.getList[2];
							self.mo4 = self.getList[3];
							self.mo5 = self.getList[4];
							self.mo6 = self.getList[5];
						}
					}).catch((err) => {
						console.log(err)
					})
				
			}
		},
		computed: {
			userT() {
				return this.$store.state.userType;
			}
		},
		created() {
			this.list2 = time.getThisTime();
			this.demo2 = time.getDateWeek();
			this.selectedTime = time.getDateWeek2();
			
			this.init();
		},
		mounted: function() {
			this.$nextTick(function() {})
		},
		methods: {
			flags(data) {
				this.flag = data;
			},
			go(data){
				if(data){
					this.init();
				}
			},
			init() {
				
				let self = this;
				this.$nextTick(() => {
					axios.get(address + 'index/api/getRecipes', {
						params: {
							userId: this.$store.state.userId,
							createDate: new Date(self.getWeekTimeLong).getTime()
						}
					}).then((res) => {
						console.log(res)
						if(res.data.code == 0){
							self.getList = eval(res.data.data.text);
							self.mo1 = self.getList[0];
							self.mo2 = self.getList[1];
							self.mo3 = self.getList[2];
							self.mo4 = self.getList[3];
							self.mo5 = self.getList[4];
							self.mo6 = self.getList[5];
						}
						

					}).catch((err) => {
						console.log(err)
					})
				})

			},
			a() {
				this.flag = true;
				//				this.$refs.food.show();
				this.selectedTime = this.list2[this.index];
				this.getWeekTimeLong = time.getThisTime3()[this.index];

			},
			handler(index) {
				this.selectedTime = time.getThisTime2()[index]
				this.getWeekTimeLong = time.getThisTime3()[index];
				console.log(this.getWeekTimeLong)
			}
		},
		components: {
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			food
		}
	}
</script>

<style scoped="scoped">
	.nav {
		margin-top: 3rem;
	}
	
	.cookbook {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.tab {
		display: none;
	}
	
	.ta {
		/*position:fixed;
		top: 3rem;
		bottom: 0;
		height: 100%;
		padding: 3.3rem 0 3.4rem 0;*/
	}
	
	.wrap {
		/*width: 100%;
		height: 100%;*/
	}
	
	.vux-swiper {
		height: 1000px !important;
	}
	
	.vux-center span {
		display: block;
		height: 1.8rem;
		vertical-align: top;
		margin-top: -1rem;
	}
	
	.food ul li {
		display: flex;
		background: #fff;
		margin-top: 1rem;
	}
	
	.food ul li img {
		display: inline-block;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		margin: 1rem;
	}
	
	.food-box {
		flex: 1;
		margin-top: 2rem;
	}
	
	.food-box a {
		display: block;
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}
	
</style>
<template>
	<transition name="slideX">
		<div class="kqCon child" ref="kqCon">
			<mt-header fixed :title="name+'体感'">
				<router-link :to="getParentLink" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
			<div class="wrap">
				<div class="wrap-box">
					<!--<group>
						<datetime class="top" v-model="times" :min-year=2017 :max-year=2099 format="YYYY-MM-DD" :end-date="endDate" @on-change="change" year-row="{value}年" month-row="{value}月" day-row="{value}日" confirm-text="确定" cancel-text=" "></datetime>
					</group>-->
					<p class="timeP">{{times}}</p>
					<scroll class="minHeight">
						<div>
							<div class="timeList" v-for="item in timeList" v-show="item.signTime != null">

								<div class="timeItem clearfix">
									<img :src="item.signTemp < 37.5? 'static/test/item03.png':'static/test/item04.png'" alt="" />
									<div>
										<p :style="item.signTemp < 37.5? '':'color:#f6a305'">测量时间：{{item.signTime}}</p>
										<p :style="item.signTemp < 37.5? '':'color:#f6a305'">测量温度：{{item.signTemp}}℃</p>
										<p v-html="item.signTemp < 37.5?'宝宝体温正常':'宝宝体温偏高'" :style="item.signTemp < 37.5? '':'color:#f6a305'"></p>
									</div>

								</div>
							</div>

							<div class="noTimeList clearfix" v-show="timeList[0] == null">
								<img src="static/test/item01.png" alt="" />
								<p>亲爱的家长,<br/>您的宝宝今天没有测量体温哦~</p>
							</div>
							<div>
								<calendar ref="calendar1" :events="calendar1.events" :lunar="calendar1.lunar" :value="calendar1.value" :begin="calendar1.begin" :end="calendar1.end" :weeks="calendar1.weeks" :months="calendar1.months" @select="select" @selectMonth="selectMonth" @selectYear="calendar1.selectYear"></calendar>
							</div>
						</div>
					</scroll>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import { Datetime, Group } from 'vux'
	import * as time from '@/common/util/time.js'
	import { Toast, Indicator } from 'mint-ui';
	import Scroll from '@/base/scroll/scroll';
	import calendar from '@/base/calendar/calendar.vue'

	export default {
		props: {
			selectedItem: {
				type: Object
			},
			selectedValue: {
				type: String
			}
		},
		components: {
			Datetime,
			Group,
			Scroll,
			calendar
		},
		data() {
			return {
				showFlag: false,
				readonly: true,
				value5: '', //date组件时间
				value: '',
				userId: this.$store.state.userId, //全局userid
				selUserId: this.$route.query.selUserId, //学生userid
				name: this.$route.query.name, //学生name
				selectTime: new Date().getTime(), //当前时间
				times: "", //当前时间
				timeList: [],
				endDate: '',
				calendar1: {
					value: [2017, 7, 20], //默认日期
					// lunar:true, //显示农历
					weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
					months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					events: {
						'2018-5-2': '<span style="color:#a7d091">已打卡</span>',
						'2018-5-3': '<span style="color:#ffb58d">未打卡</span>',
						'2018-5-4': '<span style="color:#ffb58d">未打卡</span>',
					},
					select(value) {
						//						let self = this;
						//						console.log(value.join('-'));
						//						self.times = value.join('-');
						//						self.init();
					},
					selectMonth(month, year) {
						console.log(year, month)
					},
					selectYear(year) {
						console.log(year)
					},
					timestamp: Date.now()
				},
			}
		},
		computed: {
			getParentLink() {
				// 动态获取父路由
				return this.$route.path.substring(this.$route.path.indexOf('/'), this.$route.path.lastIndexOf('/'));
			}
		},
		created() {
			if(this.$route.query.times) {
				this.times = this.$route.query.times
			} else {
				this.times = time.getYYMMDD();
			}
			//			this.value5 = time.getYYMMDD();
			this.endDate = time.getYYMMDD();
			this.calendar1.value = [this.times.split('-')[0], this.times.split('-')[1], this.times.split('-')[2]]

			this.init();
			console.log(this.times)
		},
		methods: {
			select(value) {
				console.log(value.join('-'));
				this.calendar1.value = value;
				this.times = value.join('-');
				this.init();
			},
			selectMonth(month, year) {
				this.init(year, month)
			},
			change(value) {
				if(this.$store.state.userType == 3 || this.$store.state.userType == 4) {
					axios.get(address2 + 'v1.0/terminal/getTemperDetail', {
						params: {
							userId: this.userId,
							selUserId: this.selUserId,
							selectTime: new Date(value).getTime()
						}
					}).then((res) => {
						if(res.data.code == 1000) {
							this.timeList = res.data.data;
						}
					}).catch((err) => {
						console.log(err)

					})
				}
				if(this.$store.state.userType == 5) {
					axios.get(address2 + 'v1.0/terminal/getTemperDetail', {
						params: {
							userId: this.userId,
							selUserId: this.userId,
							selectTime: new Date(value).getTime()
						}
					}).then((res) => {
						if(res.data.code == 1000) {
							this.timeList = res.data.data;
						}
						console.log(this.timeList)
					}).catch((err) => {
						console.log(err)

					})
				}

			},
			Calendar(year, month) {
				let Year = '';
				let Month = ''
				if(year) {
					Year = year;
					Month = month;
				} else {
					Year = this.times.split('-')[0];
					if(this.times.split('-')[1].substring(0, 1) == 0) {
						Month = this.times.split('-')[1].substring(1)
					} else {
						Month = this.times.split('-')[1]
					}
				}

				let self = this;
				if(this.$store.state.userType == 3 || this.$store.state.userType == 4) {
					axios.get(address2 + 'v1.0/terminal/getMonthWorkList', {
						params: {
							userId: this.userId,
							selUserId: this.$route.query.selUserId,
							year: Year,
							month: Month,
							isTemp: true
						}
					}).then(function(res) {
						console.log('当月===>', res)
						if(res.data.code == 1000) {
							self.calendar1.events = res.data.data;
						}

					})
				}
				if(this.$store.state.userType == 5) {
					axios.get(address2 + 'v1.0/terminal/getMonthWorkList', {
						params: {
							userId: this.userId,
							selUserId: this.userId,
							year: Year,
							month: Month,
							isTemp: true
						}
					}).then(function(res) {
						console.log('当月===>', res)
						if(res.data.code == 1000) {
							self.calendar1.events = res.data.data;
						}

					})
				}

			},
			init(year, month) {
				this.Calendar(year, month);

				if(this.$store.state.userType == 3 || this.$store.state.userType == 4) {
					axios.get(address2 + 'v1.0/terminal/getTemperDetail', {
						params: {
							userId: this.userId,
							selUserId: this.selUserId,
							selectTime: new Date(this.times.replace(/\-/g, "/")).getTime()
						}
					}).then((res) => {
						if(res.data.code == 1000) {
							this.timeList = res.data.data;
						}
					}).catch((err) => {
						console.log(err)
					})
				}
				if(this.$store.state.userType == 5) {
					axios.get(address2 + 'v1.0/terminal/getTemperDetail', {
						params: {
							userId: this.userId,
							selUserId: this.userId,
							selectTime: new Date(this.times).getTime()
						}
					}).then((res) => {
						if(res.data.code == 1000) {
							this.timeList = res.data.data;
						}
					}).catch((err) => {
						console.log(err)

					})
				}

			},
			getTimes(data) {
				return time.getTimes(data);
			}
		}
	}
</script>

<style scoped="scoped">
	.kqCon {
		z-index: 1000;
	}
	
	.kqCon .title {
		position: fixed;
		width: 100%;
		height: 3.1rem;
		line-height: 3.1rem;
		text-align: center;
		color: #FFFFFF;
		font-size: 16px;
		top: 0;
		left: 0;
		background: #fb7065;
		margin: 0;
	}
	
	.kqCon i {
		float: left;
		margin-left: 0.7rem;
		font-size: 19px;
	}
	
	.timeList {
		background: #fff;
		font-size: 1.4rem;
		line-height: 3rem;
	}
	
	.wrap-box {
		position: absolute;
		top: 3rem;
		bottom: 0;
		width: 100%;
	}
	
	.minHeight {
		position: absolute;
		top: 3rem;
		bottom: 0;
		width: 100%;
		overflow: hidden;
	}
	
	.timeItem {
		margin-bottom: 1rem;
		padding: 1rem 0;
	}
	
	.timeItem>img {
		display: inline-block;
		float: left;
		width: 4rem;
		height: 4rem;
		margin-left: 1rem;
	}
	
	.timeItem div {
		display: inline-block;
		float: left;
		width: 80%;
		height: auto;
		overflow: hidden
	}
	/*.timeItem div {
		display: inline-block;
		width: 4rem;
		height: 4rem;
	}*/
	
	.timeItem div img {
		display: inline-block;
		width: 12rem;
		height: 9rem;
		margin-top: 1rem;
		margin-left: 1rem;
		border-radius: 0.5rem;
	}
	
	.timeItem p {
		display: block;
		text-indent: 1rem;
		font-size: 1.2rem;
		line-height: 1.8;
		margin-top: 0rem;
		color: #a7d091;
	}
	
	.noTimeList {
		/*line-height: 10rem;*/
		font-size: 1.6rem;
		text-align: center;
		background: #fff;
		padding: 3rem 0;
		margin-bottom: 1rem;
	}
	
	.noTimeList img {
		display: inline-block;
		float: left;
		width: 5rem;
		height: 5rem;
		margin-left: 4rem;
	}
	
	.noTimeList p {
		display: inline-block;
		float: left;
		text-align: left;
		font-size: 1.4rem;
		margin-top: 0.6rem;
		margin-left: 1rem;
		color: #333333;
	}
	
	.timeP {
		line-height: 3rem;
		text-align: center;
		background: #fff;
		font-size: 1.2rem;
		color: #999;
	}
</style>
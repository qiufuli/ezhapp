<template>
	<transition name="slideX">
		<div class="kqCon child" ref="kqCon">
			<mt-header fixed :title="name+'考勤记录'">
				<router-link :to="getParentLink" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
			<div class="wrap">
				<div class="wrap-box">
					<group>
						<datetime class="top" v-model="times" :min-year=2017 :max-year=2099 format="YYYY-MM-DD" :end-date="endDate" @on-change="change" year-row="{value}年" month-row="{value}月" day-row="{value}日" confirm-text="确定" cancel-text=" "></datetime>
					</group>

					<scroll class="minHeight">
						<div>
							<div class="timeList" v-for="item in timeList" v-show="item.signTime != null">
								<div class="timeItem">
									<img @click="showImgFn(item.picUrl)" :src="item.picUrl? imgURL+item.picUrl : 'static/test/person.png'" onerror="src='static/test/person.png'" alt="" />
									<p>打卡时间：{{item.signTime}}</p>
								</div>
							</div>

						</div>

					</scroll>

					<div class="noTimeList" v-show="timeList[0] == null">当天没有打卡记录哦~</div>
				</div>
			</div>
			<div class="tc" v-if="showFlag">
				<img :src="showImg" @click="hideImgFn()" alt="" />
			</div>
		</div>
	</transition>
</template>

<script>
	import Scroll from '@/base/scroll/scroll';
	import { Datetime, Group } from 'vux'
	import * as time from '@/common/util/time.js'
	import { Toast, Indicator } from 'mint-ui';
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
			Scroll
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
				imgURL: imgURL,
				showImg: '',
				showFlag: false
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
			this.init();
			console.log(this.times)
		},
		methods: {
			change(value) {
				if(this.$store.state.userType == 3 || this.$store.state.userType == 4) {
					axios.get(address2 + 'v1.0/terminal/getWorkDetail', {
						params: {
							userId: this.userId,
							selUserId: this.selUserId,
							selectTime: new Date(value).getTime()
						}
					}).then((resolve) => {
						this.timeList = resolve.data.data;
						console.log(resolve)
					}).catch((err) => {
						console.log(err)
					})
				}
				if(this.$store.state.userType == 5) {
					axios.get(address2 + 'v1.0/terminal/getWorkDetail', {
						params: {
							userId: this.userId,
							selUserId: this.userId,
							selectTime: new Date(value).getTime()
						}
					}).then((resolve) => {
						this.timeList = resolve.data.data;
						console.log(resolve)
					}).catch((err) => {
						console.log(err)

					})
				}

			},
			init() {
				if(this.$store.state.userType == 3 || this.$store.state.userType == 4) {
					axios.get(address2 + 'v1.0/terminal/getWorkDetail', {
						params: {
							userId: this.userId,
							selUserId: this.selUserId,
							selectTime: new Date(this.times).getTime()
						}
					}).then((resolve) => {
						this.timeList = resolve.data.data;
						console.log(resolve)
					}).catch((err) => {
						console.log(err)
					})
				}
				if(this.$store.state.userType == 5) {
					axios.get(address2 + 'v1.0/terminal/getWorkDetail', {
						params: {
							userId: this.userId,
							selUserId: this.userId,
							selectTime: new Date().getTime()
						}
					}).then((resolve) => {
						this.timeList = resolve.data.data;
						console.log(resolve)
					}).catch((err) => {
						console.log(err)

					})
				}

			},
			getTimes(data) {
				return time.getTimes(data);
			},
			showImgFn(src) {
				if(src) {
					this.showImg = imgURL + src;
				} else {
					this.showImg = 'static/test/person.png'
				}
				this.showFlag = true;
			},
			hideImgFn(){
				this.showFlag = false;
				
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
	
	.noTimeList {
		line-height: 10rem;
		font-size: 1.6rem;
		text-align: center;
		background: #fff;
	}
	
	.timeItem {
		margin-bottom: 1rem;
	}
	
	.timeItem div {
		display: inline-block;
		width: 4rem;
		height: 4rem;
	}
	
	.timeItem img {
		display: inline-block;
		width: 10rem;
		height: 10rem;
	}
	
	.timeItem p {
		display: block;
		text-indent: 2rem;
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
	
	.tc {
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		background: rgba(7, 17, 27, 0.7);
		z-index: 1000;
	}
	
	.tc img {
		display: inline-block;
		max-width: 100%;
		max-height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
	}
</style>
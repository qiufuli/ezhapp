<template>
	<transition name="move">
		<div class="food" ref="header">
			<mt-header fixed :title="time">
				<div class="back" @click="hide" slot="left">
					<mt-button icon="back"></mt-button>
				</div>
				<mt-button slot="right" @click="tj()">提交</mt-button>-->
			</mt-header>
			<div class="food-content">
				<div class="foodBox">
					<ul>
						<li>
							<div class="getImg colGre">
								<i class="icon iconfont icon-baby_crockery"></i>
							</div>
							<div class="food-box">
								<a>早餐: <input v-model="morningName1" /></a>
								<a>早点: <input v-model="morningName2" /></a>
							</div>
						</li>
						<li>
							<div class="getImg colblu">
								<i class="icon iconfont icon-baby_crockery"></i>
							</div>
							<div class="food-box">
								<a>午餐: <input v-model="middayName1" /></a>
								<a>午点: <input v-model="middayName2" /></a>
							</div>
						</li>
						<li>
							<div class="getImg colyel">
								<i class="icon iconfont icon-baby_crockery"></i>
							</div>
							<div class="food-box">
								<a>晚餐: <input v-model="eveningName1" /></a>
								<a>晚点: <input v-model="eveningName2" /></a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import * as time from '@/common/util/time.js'
	import { Toast } from 'mint-ui';
	export default {
		props: {
			time: {
				type: String
			},
			longtime: {
				type: String
			}
		},
		data() {
			return {
				showFlag: false,
				morningName1: '',
				morningName2: '',
				middayName1: '',
				middayName2: '',
				eveningName1: '',
				eveningName2: '',
				list: []
			}
		},
		created() {
			this.init();
			console.log(this.longtime, 2)
		},
		methods: {

			hide() {
				this.$emit('flags', false);
			},
			tj() {
				var params = new URLSearchParams();
				params.append('userId', this.$store.state.userId);
				params.append('createDate', new Date(this.longtime).getTime());
				params.append('text', '["' + this.morningName1 + '","' + this.morningName2 + '","' + this.middayName1 + '","' + this.middayName2 + '","' + this.eveningName1 + '","' + this.eveningName2 + '"]');
				axios.post(address + 'index/api/iuRecipes', params).then((res) => {
					if(res.data.code == 0) {
						this.$emit('flags', false);
						this.$emit('go', true);
						Toast({
							message: '食谱提交成功',
							duration: 2000
						})
					}
					console.log(res)
				}).catch((err) => {
					console.log(err)
				})
			},
			init() {
				axios.get(address + 'index/api/getRecipes', {
					params: {
						userId: this.$store.state.userId,
						createDate: new Date(this.longtime).getTime()
					}
				}).then((res) => {
					console.log(res)
					this.list = eval(res.data.data.text);
					this.morningName1 = this.list[0];
					this.morningName2 = this.list[1];
					this.middayName1 = this.list[2];
					this.middayName2 = this.list[3];
					this.eveningName1 = this.list[4];
					this.eveningName2 = this.list[5];
					console.log(this.list)
				}).catch((err) => {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.food {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: 30;
		width: 100%;
		background: #ebebeb;
		transform: translate3d(0, 0, 0);
	}
	
	.move-enter-active,
	.move-leave-active {
		transition: all 0.2s linear;
	}
	
	.move-enter,
	.move-leave-to {
		transform: translate3d(0, 100%, 0);
	}
	
	.food-content {
		margin-top: 3rem;
	}
	
	.num {
		margin-left: 9rem;
	}
	
	.foodBox ul li {
		display: flex;
		background: #fff;
	}
	
	.food ul li .getImg {
		display: inline-block;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		margin: 1rem;
		text-align: center;
	}
	
	.colGre {
		background: #51da42;
	}
	
	.colblu {
		background: #76d8ff;
	}
	
	.colyel {
		background: #f9e237;
	}
	
	.food ul li .getImg i {
		color: #fff;
		font-size: 3rem;
	}
	
	.food-box {
		flex: 1;
		padding-top: 1rem;
	}
	
	.food-box a {
		display: block;
		font-size: 1.2rem;
		/*margin-bottom: 0.5rem;*/
		height: 2.6rem;
		line-height: 2.6rem;
	}
	
	.food-box a input {
		border: 1px solid #ccc;
		border-radius: 0.3rem;
		font-size: 1.1rem;
		line-height: 2rem;
		height: 2rem;
	}
</style>
<template>
	<transition name="slideY">
		<div class="book child">
			<mt-header fixed :title="getName">
				<router-link to="/myself" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
			</mt-header>
			<div class="wrap">
				<swiper v-model="targetindex" height="46rem" :show-dots="false">
					<swiper-item v-for="(item, index) in getList" :key="index">
						<router-link tag="div" :to="'/myself/book/bookDetail?id='+ item2.id" class="bookList" v-for="(item2,index2) in item.bookList" >
							<div class="bookItem">
								<p>
								<img :src="item2.thumbnailUrl" alt="" />
								</p>
								<span>{{item2.name}}</span>
							</div>
							
						</router-link>
					</swiper-item>
				</swiper>
			</div>
			<router-view></router-view>
		</div>
	</transition>
</template>

<script>
	import { Swiper, SwiperItem } from 'vux'
	export default {
		data() {
			return {
				targetindex: 0,
				getList:[],
				getName:''
			}
		},
		created() {
			this.init();
		},
		components: {
			Swiper,
			SwiperItem
		},
		watch:{
			targetindex(n,o){
				console.log(n,o)
				this.getName = this.getList[n].bookShelf.name;
			}
		},
		methods: {
			init() {
				this.$nextTick(function() {
					if(this.$store.state.userType == 5) {
						axios.get(address + 'index/api/bookList', {
							params: {
								userId: this.$store.state.userId
							}
						}).then((res) => {
							this.getList = res.data.data
							this.getName = this.getList[this.targetindex].bookShelf.name;
						}).catch((err) => {
							console.log(err)

						})
					}
				})

			}
		}
	}
</script>

<style scoped>
.bookList{
	width:100%;
}
.bookList .bookItem{
	float: left;
    display: inline-block;
    width: 47%;
    height: 15rem;
    margin: 0.5rem 1%;
}
.bookList .bookItem p{
	width: 100%;
	height: 10rem;
}
.bookList .bookItem img{
	display: inline-block;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	border:5px solid #dfe4e0;
	box-sizing: border-box;
}
.bookList .bookItem span{
	display: inline-block;
	width: 100%;
	line-height: 2rem;
	font-size: 1.2rem;
	color: #464141;
	margin-top:0.5rem;
	padding-left:0.5rem;
}
.bookList .bookItem b{
	font-weight: normal;
	font-size: 1rem;
	color: #888888;
	padding-left:0.5rem;
}
</style>
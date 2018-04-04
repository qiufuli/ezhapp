<template>
	<transition name="slideY">
		<div class="maillist child">
			<mt-header fixed title="通讯录">
				<router-link :to="getParentLink" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
				<div  class="update" slot="right">
					<img src="static/test/sx02.png" alt="" />
				</div>
			</mt-header>
			<div class="wrap">
				<div class="search">
					<input type="text" class="search_input active" placeholder="搜索" />
					<i class="del"></i>
				</div>
				<div class="mailDiv">
					<scroll :data="maillist" class="mailHeight">
						<div>
							<div class="mail_con" v-for="item in maillist" >
								<h1>{{item.title}}</h1>
								<div class="mail_item" v-for="test in item.items" @click="gosingle(test)">
									<img src="static/test/test01.jpg" alt="" />
									<div>
										{{test}}
									</div>
								</div>
							</div>
						</div>
					</scroll>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</transition>
</template>

<script>
	import Scroll from '@/base/scroll/scroll';
	export default {
		data(){
			return{
				maillist:[
					{
						title:'全体班级',
						items:['aaa','bbb','bbb']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					},
					{
						title:'2018一年级',
						items:['test','test','test']
					}
				]
			}
		},
		components:{
			Scroll
		},
		computed:{
			getParentLink(){
				// 动态获取父路由
				return this.$route.path.substring(this.$route.path.indexOf('/'),this.$route.path.lastIndexOf('/'));
		}
		
	},
	methods:{
			gosingle(test){
				this.$router.push('/interact/maillist/mailsingle?test='+test)
			}
		}
}
</script>

<style scoped>
	.update img{
		display: inline-block;
		width: 2rem;
		height: 2rem;
		vertical-align: middle;
	}
	.search{
		background: #fff;
		line-height: 4.5rem;
		text-align: center;
		position: relative;
	}
	.search .search_input{
		border: none;
		background: #eae8e8 url('../../../static/test/search.png') no-repeat 47% 0;
		background-size:2rem 2rem;
		height: 2.5rem;
		line-height: 2.5rem;
		width: 95%;
		border-radius: 3rem;
		text-indent: 2.5rem;
		text-align: center;
		
	}
	.search .search_input.active{
		text-indent: 3rem;
		text-align: left;
		background: #eae8e8 url('../../../static/test/search.png') no-repeat 1rem 0.25rem;
		background-size:2rem 2rem;
	}
	.del{
		display: inline-block;
		width:1.8rem;
		height:1.8rem;
		background: url('../../../static/test/del.png') no-repeat;
		background-size:100% 100%;
		position: absolute;
		right: 1.2rem;
		top: 1.1rem;
		display: none;
	}
	.mail_con h1{
		font-weight: normal;
		font-size: 1rem;
		color:#7c807c;
		line-height: 2.5rem;
		text-indent: 1rem;
	}
	.mail_con .mail_item{
		background: #fff;
		font-size: 1.2rem;
	}
	.mail_item img{
		display: inline-block;
		width: 3.8rem;
		height: 3.8rem;
		border-radius: 50%;
		margin: 0.5rem 1rem;
		vertical-align: middle;
	}
	.mail_item div{
		display: inline-block;
		width: 22rem;
		border-bottom: 1px solid #efeded;
		line-height: 4.7rem;
		font-size: 1.4rem;
	}
	@media only screen and (min-width:320px) {
		.mail_item div{
			width: 20rem;
		}
	}
	@media only screen and (min-width:375px) {
		.mail_item div{
			width: 24rem;
		}
	}
	.mailDiv{
		position: fixed;
	    top:7.5rem;
	    bottom: 0;
	    width: 100%;
	}
	.mailHeight{
		height:100%;
		position: relative;
		overflow: hidden;
	}
</style>
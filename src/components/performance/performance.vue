<template>
	<transition name="slideY">
		<div class="performance child">
			<mt-header fixed title="发表现">
				<router-link to="/interact" slot="left">
					<mt-button icon="back">关闭</mt-button>
				</router-link>
				<router-link tag="div" to="/interact/performance/performanceList" class="update" slot="right">
					表现列表
				</router-link>
			</mt-header>
			<div class="wrap">
				<router-link tag="div" to="/interact/performance/selectPeople" class="sendOut clearfix">
					<span>受评同学:</span>
					<p class="sendOutWho">
						请选择联系人
					</p>
					<i class="list_i">
						<img src="static/test/right02.png" alt="">
					</i>
				</router-link>
				<div class="good clearfix">
					<div class="good_list" v-for="(item,index) in goodList" @click="showAction(index)">
						<img :src="item.img" alt="" />
						<p>{{item.test}}</p>
					</div>
					
				</div>
				<!--信息框-->
				<textarea class="sendText" placeholder="请输入评语内容">{{texts}}</textarea>
				<mt-button class="sendBtn" type="primary">发送</mt-button>
				<mt-actionsheet  
			        :actions= "menus1"  
			        v-model="show1"
			        cancelText="自己填写"
			        >  
			    </mt-actionsheet>
			    <mt-actionsheet  
			        :actions= "menus2"  
			        v-model="show2"
			        cancelText="自己填写"
			        >  
			    </mt-actionsheet>
			</div>
			<router-view></router-view>
		</div>
	</transition>
</template>

<script>
//	import { Actionsheet } from 'mint-ui';

	export default{
		components:{
		},
		data(){
			return{
				texts:'',
				goodList:[
					{
						test:'非常好',
						img:'static/test/good1.png'
					},
					{
						test:'继续努力',
						img:'static/test/good2.png'
					}
				],
				menus1:[
				{
					name:'是小朋友们学习的榜样！',
					method:this.getStr
				},
				{
					name:'热心积极，是老师的小助手！',
					method:this.getStr
				},
				{
					name:'爱分享，总能得到小伙伴的赞许！',
					method:this.getStr
				},
				{
					name:'能主动跟老师同伴交流了，真棒！',
					method:this.getStr
				},
				{
					name:'进步之快，令老师刮目相看！',
					method:this.getStr
				}
				],
				menus2:[
				{
					name:'要是能养成良好的午睡习惯就更棒了！',
					method:this.getStr
				},
				{
					name:'大胆些、努力些、努力做老师的小帮手！',
					method:this.getStr
				},
				{
					name:'如果学会谦让，你将更完美！',
					method:this.getStr
				},
				{
					name:'有问题主动跟老师同学交流哦！',
					method:this.getStr
				},
				{
					name:'勇敢的孩子不掉“小金豆”！',
					method:this.getStr
				}
				],
				show1:false,
				show2:false
			}
		},
		methods:{
			showAction(index){
				
				if(index == 0){
					this.show1 = true;
				}else{
					this.show2 = true;
				}
			},
			getStr(target){
				this.texts = target.name;
			}
		}
	}
</script>

<style scoped>
	.sendOut{
		width: 100%;
		height: 4rem;
		line-height:4rem;
		background:#fff;
		position: relative;
		border-bottom: 1px solid #efeded;
	}
	.sendOut span{
		margin:0 1rem;
		font-size: 1.2rem;
	}
	.sendOut p{
		display: inline-block;
		color: #b4b6b4;
		font-size: 1.2rem;
	}
	.sendOut .list_i,.sendOut .list_i img{
		display: inline-block;
		width: 1.6rem;
		height: 1.6rem;
	}
	.sendOut .list_i{
		position: absolute;
		top:1.2rem;
		right: 1rem;
	}
	.sendOut .list_i img{
		vertical-align: top;
	}
	.sendText{
		display: inline-block;
	    width: 100%;
	    min-height: 5rem;
	    border: none;
	    resize: none;
	    outline: none;
	    padding: 1rem 0;
	    text-indent: 1rem;
	}
	.sendBtn{
		width: 90%;
		margin: 2rem 0 0 5%;
	}
	.good{
		border-bottom: 1px solid #efeded;
		background:#fff;
		padding: 1rem 0;
		text-align: center;
	}
	.good_list{
		float: left;
	}
	.good_list img{
		display: inline-block;
		width: 5rem;
		height: 5rem;
	}
	.good_list:first-child{
		margin-left: 6rem;
		margin-right: 3rem;
	}
	@media only screen and (min-width:375px ) {
		.good_list:first-child{
			margin-left: 10rem;
			margin-right: 3rem;
		}
	}
	@media only screen and (min-width:414px ) {
		.good_list:first-child{
			margin-left: 11rem;
			margin-right: 3rem;
		}
	}
	
</style>
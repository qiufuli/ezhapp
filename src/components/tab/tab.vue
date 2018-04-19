<template>
	<div class="tab clearfix">
		<router-link tag="div" to="/Recommond" class="tabList">
			<img :src="img1" alt="" />
			<p>校园</p>
		</router-link>
		<router-link tag="div" to="/interact" class="tabList">
			<img :src="img2" alt="" />
			<p>互动</p>
		</router-link>
		<router-link tag="div" to="/find" class="tabList">
			<img :src="img3" alt="" />
			<p>每日推荐</p>
		</router-link>
		<router-link tag="div" to="/myself" class="tabList">
			<img :src="img4" alt="" />
			<p>我的</p>
		</router-link>
	</div>
</template>

<script>
export default {
  data () {
    return {
      selected: "校园",
      img1: 'static/icon/indexchoose.png',
      img2: 'static/icon/brand.png',
      img3: 'static/icon/livechoose.png',
      img4: 'static/icon/me.png'
    }
  },
  created(){
  	this.init();
  	console.log(this.$route.path)
  },
	methods:{
		init(){
			
			this.$nextTick(function(){
			if(this.$route.path == '/'){
				this.img1 = "static/icon/indexchoose.png"
			}else{
				this.img2 = "static/icon/index.png"
			}
			if(this.$route.path == '/Recommond'){
				this.img1 = "static/icon/indexchoose.png"
			}else{
				this.img2 = "static/icon/index.png"
			}
			if(this.$route.path == '/find'){
				this.img3 = "static/icon/livechoose.png"
			}else{
				this.img3 = "static/icon/live.png"
			}
			if(this.$route.path == '/interact'){
				this.img2 = "static/icon/brandchoose.png"
			}else{
				this.img2 = "static/icon/brand.png"
			}
			if(this.$route.path == '/myself'){
				this.img4 = "static/icon/mechoose.png"
			}else{
				this.img4 = "static/icon/me.png"
			}
			})
		}
	},
	watch:{
		$route(to){
			if(to.path == '/'){
				this.img1 = "static/icon/indexchoose.png"
			}else{
				this.img1 = "static/icon/index.png"
			}
			if(to.path == '/Recommond'){
				this.img1 = "static/icon/indexchoose.png"
			}else{
				this.img1 = "static/icon/index.png"
			}
			if(to.path == '/find'){
				this.img3 = "static/icon/livechoose.png"
			}else{
				this.img3 = "static/icon/live.png"
			}
			if(to.path == '/interact'){
				this.img2 = "static/icon/brandchoose.png"
			}else{
				this.img2 = "static/icon/brand.png"
			}
			if(to.path == '/myself'){
				this.img4 = "static/icon/mechoose.png"
			}else{
				this.img4 = "static/icon/me.png"
			}
		}
	}
}
</script>

<style scoped>
	.tab{
		width: 100%;
		height: 4.4rem;
		font-size: 1.2rem;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
		text-align: center;
		color: #fff;
		background: #fff;
	}
	.tabList{
		display: inline-block;
		float: left;
		width: 25%;
		height: 4.4rem;
	}
	.tabList img{
		display: inline-block;
		width: 2.5rem;
		height: 2.2rem;
		margin-top: 0.3rem;
	}
	.tabList p{
		color: #666;
	}

	
</style>
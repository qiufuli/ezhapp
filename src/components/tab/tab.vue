<template>
	<div class="tab">
	    <mt-tabbar v-model="selected"  class="border-1px-top">
	      <mt-tab-item id="校园" >
	        <img :src="img1" slot="icon">校园
	      </mt-tab-item>
	      <mt-tab-item id="互动" to="/brandSale">
	        <img :src="img2" slot="icon">互动
	        <!-- <router-link to="brandSale">名品特卖</router-link> -->
	      </mt-tab-item>
	      <mt-tab-item id="每日推荐" >
	        <img :src="img3" slot="icon">每日推荐
	      </mt-tab-item>
	      <mt-tab-item id="我的">
	        <img :src="img4" slot="icon">我的
	      </mt-tab-item>
	    </mt-tabbar>
	</div>
</template>

<script>
export default {
  data () {
    return {
      selected: "校园",
      img1: "static/icon/indexchoose.png",
      img2: "static/icon/brand.png",
      img3: "static/icon/live.png",
      img4: "static/icon/me.png"
    }
  },
  computed: {
    otherSelect () {
      return this.$store.state.selectTab
    }
  },
  created(){
  },
  watch: {
    // 监听 是否从其他的页面跳转过来的数据
    "otherSelect" () {
      this.selected = this.otherSelect;
      console.log('111113',this.selected)
    },
    // this.$.router.push({name: ''})
    // 固定的书写 ""双引号里面是要监听的数据 handler是处理数据改变的函数 deep是否深度监听
    "selected": {
      handler (val,oldval) { //多看文档 handler
      	console.log(val)
        if (this.selected == "校园") {
          this.$router.push('/Recommond')
          this.img1="static/icon/indexchoose.png"

        } else {
          this.img1="static/icon/index.png"
        }
        if (this.selected == "互动") {
          this.$router.push('/interact')
          this.img2="static/icon/brandchoose.png"

        } else {
          this.img2="static/icon/brand.png"
        }
        if (this.selected == "每日推荐") {
          this.$router.push('/find')
          this.img3="static/icon/livechoose.png"
        } else {
          this.img3="static/icon/live.png"
        }
        if (this.selected == "我的") {
          this.$router.push('/myself')
          this.img4="static/icon/mechoose.png"
        } else {
          this.img4="static/icon/me.png"
        }
      }
      // deep:true//对象内部的属性监听，也叫深度监听
    }
  },
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
		z-index: 2;
		text-align: center;
		color: #7c807c;
	}
	.mint-tabbar{
		background:#fff;
		border-top:1px solid #d0c4c4;
		width: 100%;
		height: 100%;
	}
	.mint-tab-item{
		display: inline-block;
		float: left;
		width: 25%;
		padding-top:0.3rem;
		font-size: 1.2rem;
	}
	.mint-tab-item .mint-tab-item-icon,.mint-tab-item-icon img{
		display: inline-block;
		width: 2.4rem;
		height: 2rem;
	}
	.mint-tab-item.is-selected{
		color:#FE4070;
	    background:#fff;
	    text-decoration:none;
	}
	
</style>
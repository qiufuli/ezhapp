// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui';
import axios from 'axios'
import store from './store/index.js'
import 'mint-ui/lib/style.css';
import '@/assets/css/my-mint.css';
import '@/assets/css/base.css';
import '@/assets/js/rem.js';
import '@/assets/js/sockjs.js';
import vueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'url-search-params-polyfill'; // axios 兼容 userURLSearchParams的


import VueDplayer from 'vue-dplayer'
import '../node_modules/dplayer/dist/DPlayer.min.css'
Vue.use(VueDplayer)

Vue.use(MintUI);

Vue.use(vueLazyLoad,{
	loading: require('../static/test/test01.jpg')
})
axios.defaults.withCredentials = true //允许跨域
global.address = 'http://192.168.9.172:4040/';//接口地址
global.axios = axios //设置为全局引用


Vue.config.productionTip = false
import { Toast ,Indicator } from 'mint-ui';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//axios.interceptors.request.use(function(config){  
// Indicator.open({
//text: '加载中...',
//spinnerType: 'fading-circle'
//});
//  return config  
//},function(err){  
//  return Promise.reject(err)  
//});  
//axios.interceptors.response.use(function(response){  
//  Indicator.close()
//  return response  
//},function(err){  
//  return Promise.reject(err)  
//});  
//
//router.beforeEach(function(to, from, next){  
//	if(to.name == 'update'){
//		if(store.state.update == 0){
//			Toast({
//			  message: '您目前是最新版本',
//			  duration: 2000
//			})
//			next(false);
//		}else{
//			next();
//		}
//	}else{
//	next();
//		
//	}
//
////console.log(to,from ,next) 
//}) 
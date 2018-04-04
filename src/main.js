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
Vue.use(MintUI);
axios.defaults.withCredentials = true //允许跨域
global.axios = axios //设置为全局引用
Vue.config.productionTip = false
import { Toast } from 'mint-ui';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach(function(to, from, next){  
	if(to.name == 'update'){
		if(store.state.update == 0){
			Toast({
			  message: '您目前是最新版本',
			  duration: 2000
			})
			next(false);
		}else{
			next();
		}
	}else{
	next();
		
	}

  console.log(to,from ,next) 
}) 
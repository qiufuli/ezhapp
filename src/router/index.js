import Vue from 'vue'
import Router from 'vue-router'
//import Recommond from '@/components/Recommond/Recommond'
//import Interact from '@/components/interact/interact'
//import Find from '@/components/find/find'
//import Myself from '@/components/myself/myself'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
    	//登录
    	path:'/login',
    	component:resolve => require(['@/components/login/login'], resolve),
    	children:[
    		{
    			path:'forgetPW',
    			component:resolve => require(['@/components/forgetPW/forgetPW'], resolve),
    		}
    	]
    },
    {
    	//校园
      path: '/Recommond',
      component: resolve => require(['@/components/Recommond/Recommond'], resolve),
      children:[
      	{
      		//个人信息
      		path:'person',
      		component:resolve => require(['@/components/person/person'],resolve),
      		children:[
      			{
      				path:'editor',
      			component:resolve => require(['@/components/editor/editor'],resolve)
      			}
      		]
      	}
      ]
    },
    {
    	//互动
    	path:'/interact',
    	component:resolve => require(['@/components/interact/interact'], resolve),
    	children:[
    		{
    			//通讯录（发消息）
    			path:'maillist',
    			component:resolve => require(['@/components/maillist/maillist'], resolve),
    			children:[
    				{
    					//单个通讯人
    					path:'mailsingle',
    					component:resolve => require(['@/components/mailsingle/mailsingle'], resolve)
    				}
    			]
    		},
    		{
    			//发通知
    			path:'notice',
    			component:resolve => require(['@/components/notice/notice'], resolve),
    			children:[
    			//通知列表
    				{
    					path:'noticeList',
    					component:resolve => require(['@/components/noticeList/noticeList'], resolve)
    				},
    				//选择联系人
    				{
    					path:'selectPeople',
    					component:resolve => require(['@/components/selectPeople/selectPeople'], resolve)
    				}
    			]
    		},
    		{
    			//发表现 performance
    			path:'performance',
    			component:resolve => require(['@/components/performance/performance'], resolve),
    			children:[
    				{
    					//表现列表
    					path:'performanceList',
    					component:resolve => require(['@/components/performanceList/performanceList'], resolve)
    				},
    				//选择联系人
    				{
    					path:'selectPeople',
    					component:resolve => require(['@/components/selectPeople/selectPeople'], resolve)
    				}
    			]
    		}
    	]
    },
    {
    	//发现
    	path:'/find',
    	component:resolve => require(['@/components/find/find'], resolve)
    },
    {
    	//我的
    	path:'/myself',
    	component:resolve => require(['@/components/myself/myself'], resolve),
    	children:[
    		{
    			//个人信息
    			path:'person',
      		component:resolve => require(['@/components/person/person'],resolve)
    		},
    		{
    			//修改密码
    			path:'changePW',
    			component:resolve => require(['@/components/changePW/changePW'], resolve),
    		},
    		{
    			//设备管理
    			path:'manage',
    			component:resolve => require(['@/components/manage/manage'], resolve),
    		},
    		{
    			//意见反馈
    			path:'feedback',
    			component:resolve => require(['@/components/feedback/feedback'], resolve),
    		},
    		{
    			//检测更新
    			path:'update',
    			name:'update',
    			component:resolve => require(['@/components/update/update'], resolve),
    		}
    	]
    }
  ]
})

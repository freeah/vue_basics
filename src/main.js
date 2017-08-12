// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false
//路由的使用
const routes=[
	{
		path:'/',
		component:require('./components/apart')
	},
	{
		path:'/news',
		component:require('./components/news')
	}
]

const router=new VueRouter({routes})

//vuex通信
const store=new Vuex.Store({
	state:{
		showdagger:true,
		todos:[
			{id:'1',text:'苹果',done:true},
			{id:'2',text:'香蕉',done:false},
			{id:'3',text:'橘子',done:true}
		]
	},
	getters:{
		doneTodos:state=>{
			return state.todos.filter(todo=>todo.done)
		}
	},
	mutations:{
		 daggerCtrl(state){  //处理的时候可以加上传过来的参数，但是第一个参数必须是state
		 	//console.log(state.showdagger);
		 	//console.log(store.getters.doneTodos);
			state.showdagger=!state.showdagger;
			//console.log(state.showdagger);
		}
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import mintui from "mint-ui"
import "mint-ui/lib/style.css"
Vue.config.productionTip = false
Vue.use(VueResource)

Vue.use(mintui)

// import VueRouter from "vue-router"

//1、创建组件 引入组件
/*import MyRouter from "./components/MyRouter.vue"
import MyRouterSendMsg from "./components/MyRouterSendMsg.vue"
import MyRouterGetMsg from "./components/MyRouterGetMsg.vue"
import MyRouterGetMsgTail from "./components/MyRouterGetMsgTail.vue"
import MyRouteRequest from "./components/MyRouteRequest.vue"
import MyRouteRequestDetail from "./components/MyRouterRequestDetail.vue"
import MyRouteRequestDetail2 from "./components/MyRouterRequestDetail2.vue"
import MyRouteProgram from "./components/MyRouteProgram"
import FrameDemo from "./components/FrameDemo"
import FrameRight1 from "./components/FrameRight1"
import FrameRight2 from "./components/FrameRight2"*/
// Vue.use(VueRouter)
/* eslint-disable no-new */
// 2、定义路由  （建议复制）
/*const routes = [
  {path: "/myrouter", component: MyRouter },
  {path: "/myroutersendmsg", component: MyRouterSendMsg },
  {path:"/myroutergetmsg",component:MyRouterGetMsg},
  {path:"/myroutergetmsgtail/:id",component:MyRouterGetMsgTail},//动态路由
  {path:"/myrouterequest",component:MyRouteRequest},
  {path:"/myrouterequestdetail",component:MyRouteRequestDetail,name:"myrouterequestdetail"},
  {path:"/myrouterequestdetail2/:aid",component:MyRouteRequestDetail2,name:"myrouterequestdetail2"},
  {path:"/myrouteprogram",component:MyRouteProgram},
  {path:"/framedemo",component:FrameDemo,children:[{path:"frame1",component:FrameRight1},{path:"frame2",component:FrameRight2}]},
  // { path: '*', redirect: '/' }   /!*默认跳转路由*!/
]*/

/*3.实例化VueRouter  注意：名字
const router = new VueRouter({
  // History 模式
  mode: 'history',
  // （缩写）相当于 routes: routes
  routes
})*/
/*4、挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

5 <router-view></router-view> 放在 App.vue*/



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})








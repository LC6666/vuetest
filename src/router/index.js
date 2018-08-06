import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

//1、创建组件 引入组件
import MyRouter from "../components/MyRouter"
import MyRouterSendMsg from "../components/MyRouterSendMsg.vue"
import MyRouterGetMsg from "../components/MyRouterGetMsg.vue"
import MyRouterGetMsgTail from "../components/MyRouterGetMsgTail.vue"
import MyRouteRequest from "../components/MyRouteRequest.vue"
import MyRouteRequestDetail from "../components/MyRouterRequestDetail.vue"
import MyRouteRequestDetail2 from "../components/MyRouterRequestDetail2.vue"
import MyRouteProgram from "../components/MyRouteProgram"
import FrameDemo from "../components/FrameDemo"
import FrameRight1 from "../components/FrameRight1"
import FrameRight2 from "../components/FrameRight2"

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: Hello
    },
    {
      path: "/myrouter",
      component: MyRouter
    },
    {
      path: "/myroutersendmsg",
      component: MyRouterSendMsg
    },
    {
      path:"/myroutergetmsg",
      component:MyRouterGetMsg
    },
    {
      path:"/myroutergetmsgtail/:id",
      component:MyRouterGetMsgTail
    },
    //动态路由
    {
      path:"/myrouterequest",
      component:MyRouteRequest
    },
    {
      path:"/myrouterequestdetail",
      component:MyRouteRequestDetail,
      name:"myrouterequestdetail"
    },
    {
      path:"/myrouterequestdetail2/:aid",
      component:MyRouteRequestDetail2,
      name:"myrouterequestdetail2"},
    {
      path:"/myrouteprogram",
      component:MyRouteProgram
    },
    {
      path:"/framedemo",
      component:FrameDemo,
      children:[
          {
            path:"frame1",
            component:FrameRight1
          },
          {path:"frame2",
            component:FrameRight2
          }
        ]
    },
  ]
})

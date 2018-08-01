<template>
    <div>
      <hr>
      <div><b>18 Vue动态路由 Get传值</b></div>
      <div>不同路由传值：动态路由</div>
      <div>1、配置动态路由 </div>
      <div>routes:[<br>
        // 动态路径参数 以冒号开头<br>
        { path: '/user/:id', component: User }<br>
        ]</div>
      <div>2、在对应的页面 </div>
      <div>this.$route.params获取动态路由的值 </div>
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br/>
      <ul>
        <li v-for="(p,index) in personlist">
          <router-link :to="'/myroutergetmsg?id='+p.id">通过get传值{{p.name}}</router-link>
        </li>
        <li v-for="(p,key) in personlist">
          <router-link :to="'/myroutergetmsgtail/'+p.id">动态路由传值{{p.name}}</router-link>
        </li>
      </ul>
      <router-view></router-view>





    </div>
</template>

<script>
    export default {
      name: "MyRouterSendMsg",
      data(){
        return {
          msg:"MyRouterSendMsg",
          personlist:[{"name":"David","sex":"male","age":"20","id":"1"},{"name":"Sasa","sex":"famale","age":"18","id":"2"},{"name":"Momo","sex":"famale","age":"21","id":"3"}],
        }
      },

    }
</script>

<style scoped>

</style>

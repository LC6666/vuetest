<template>
    <div id="bottomNav">
      <!--<router-link to="/" class="tab">功能测试</router-link>-->
      <!--<router-link to="/interface" class="tab">接口测试</router-link>-->
      <router-link to="/myrouter" class="tab">vue路由配置</router-link>
      <router-link to="/myroutersendmsg" class="tab">vue路由配置 Get传值</router-link>
      <router-link to="/myrouterequest" class="tab">路由结合请求数据</router-link>
      <div class="tab"><button @click="go()">Vue路由编程式导航以及hash模式</button></div>
      <div class="tab"><span @click="go1()"  >路由的嵌套</span></div>
    </div>
</template>

<script>
    export default {
      name: "BottomNav",
      methods:{
        go(){
          this.$router.push({path:'myrouteprogram'});
        },
        go1(){
          this.$router.push({path:"/framedemo"});
        },
      },
    }
</script>

<style scoped>
  #bottomNav{
    display: flex;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding: 0.5rem 0;
    text-align: center;
    border-top: 1px solid #999999;
    /*position: fixed;*/
    left: 0;
    bottom: 0;
  }

  .tab{
    flex: 1;
    text-align: center;
    border-right: 1px solid #999999;
  }

</style>

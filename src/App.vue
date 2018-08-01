<template>
  <div id="app">
    <router-link to="/myrouter">vue路由配置</router-link>
    <router-link to="/myroutersendmsg">vue路由配置 Get传值</router-link>
    <router-view></router-view>
    <v-compon></v-compon>

  </div>

</template>

<script>

  import Components from "./components/Components";


  export default {
    name:'App',
    data(){
      return{
      }
    },components:{
      "v-compon":Components,

    },

  }




</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

  .red{
    color: red;
  }
  .blue{
    color: blue;
  }

  #app{
    /*display: flex;*/
    flex-direction: column;
  }

</style>

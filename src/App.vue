<template>
  <div id="app">
    <v-compon></v-compon>
    <mintuiDemo></mintuiDemo>
    <router-view></router-view>
  </div>

</template>

<script>

  import Components from "./components/Components";
  import MintuiDemo from "./components/MintUIDemo"


  export default {
    name:'App',
    data(){
      return{
      }
    },components:{
      "v-compon":Components,
      "mintuiDemo":MintuiDemo,

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

<template>
  <div>
    <hr>
    <div>
      <h4>12 Vue vue-resource 请求数据</h4>
      vue-resource  官方提供的 vue的一个插件<br>
      使用vue-resource请求数据的步骤<br>
      1、需要安装vue-resource模块，  注意加上  --save<br>
      npm install vue-resource --save /  cnpm install vue-resource --save<br>
      2、main.js引入 vue-resource<br>
      import VueResource from 'vue-resource';<br>
      3、main.js  Vue.use(VueResource);<br>
      4、在组件里面直接使用<br>
      this.$http.get(地址).then(function(){
      })
    </div>
    <button @click="getData()">点我，获取数据</button>
    <ul>
      <li v-for="(result,index) in resultlist">
        <span>{{index}}</span>
        <span>{{result.aid}}</span>
        <span>{{result.catid}}</span>
        <span>{{result.dateline}}</span>
        <span>{{result.pic}}</span>
        <span>{{result.title}}</span>
        <span>{{result.username}}</span>

      </li>
    </ul>

  </div>

</template>

<script>
    export default {
      name: "VueresourceUse",
      data(){
        return{
          resultlist:[],
        }
      },
      methods:{
        getData(){
          var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
          this.$http.get(api).then((response)=>{
            this.resultlist = response.body.result;
          });
        },
      },

    }

</script>

<style scoped>

</style>

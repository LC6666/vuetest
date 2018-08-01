<template>
  <div>
    <hr>
    <div><b>13 Axios  fetchJsonp请求数据</b></div>
    请求数据的模板  axios  的使用<br/>
    1、安装  cnpm  install  axios --save<br/>
    2、哪里用哪里引入axios
    <button @click="getdata()">获取数据</button>
    <ul>
      <li v-for="(result,index) in returnlist">
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
  import Axios from "axios";

    export default {
        name: "AxiosUse",
      data(){
        return{
          returnlist:[],
        };
      },
      methods:{
        getdata(){
          var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
          Axios.get(url).then((response)=>{
            this.returnlist = response.data.result;
          })
        }
      },
      mounted(){
          this.getdata();
      }
    }
</script>

<style scoped>

</style>

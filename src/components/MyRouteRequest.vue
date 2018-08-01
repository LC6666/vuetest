<template>
    <div>
      <hr/>
      <div><b>19 Vue路由结合请求数据 实现数据渲染</b></div>
      <table>
        <tr>
          <td>序号</td>
          <td>aid</td>
          <td>catid</td>
          <td>dataline</td>
          <td>pic</td>
          <td>title</td>
          <td>username</td>
        </tr>
          <tr v-for="(news,index) in newslist" >
            <th>{{index+1}}</th>
            <td><router-link :to="'/myrouterequestdetail?aid='+news.aid">{{news.aid}}</router-link></td>
            <td><router-link :to="'/myrouterequestdetail2/'+news.aid">{{news.catid}}</router-link></td>
            <td>{{news.dataline}}</td>
            <td>{{news.pic}}</td>
            <td>{{news.title}}</td>
            <td>{{news.username}}</td>
          </tr>
      </table>
    </div>
</template>

<script>
    import Router from "./MyRouter";
    export default {
      name: "MyRouteRequest",
      components: {Router},
      data(){
        return{
          newslist:[],
        }
      },
      methods:{
        getData(){
          var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
          this.$http.get(url).then((response)=>{
              this.newslist = response.body.result;
          });
        },

      },
      mounted(){
        this.getData();
      }

    }
</script>

<style scoped>

</style>

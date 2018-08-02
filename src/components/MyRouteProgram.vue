<template>
    <div>
      <hr/>
      <div><b>20 Vue路由编程式导航以及hash模式</b></div>
      <div>
        <div>第一种跳转方式</div>
        get传值获取
        <div>this.$router.push({path:"myrouterequestdetail?aid="+aid})</div>
        路由动态传值获取
        <div>this.$router.push({path:"myrouterequestdetail2/"+aid});</div>
        <div>第二种跳转方式</div>
        <div>先对路由进行命名</div>
        get传值获取
        <div>this.$router.push({name:"myrouterequestdetail",query:{aid:aid}})</div>
        路由动态传值获取
        <div>this.$router.push({name:"myrouterequestdetail2",params:{aid:aid}})</div>
      </div>

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
          <td><button @click="getDetailData(news.aid)">{{news.aid}}</button></td>
          <td><button @click="getDetailData2(news.aid)">{{news.catid}}</button></td>
          <td><button @click="getDetailData3(news.aid)">{{news.dataline}}</button></td>
          <td>{{news.pic}}</td>
          <td>{{news.title}}</td>
          <td><button @click="getDetailData4(news.aid)">{{news.username}}</button></td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
      name: "MyRouteProgram",
      data(){
        return{
          newslist:[],
        }
      },
      methods:{
        getPageData(){
          var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
          this.$http.get(url).then((response)=>{
            this.newslist = response.body.result;
          });
        },
        getDetailData(aid){
            this.$router.push({path:"myrouterequestdetail2/"+aid});
        },
        getDetailData2(aid){
          this.$router.push({path:"myrouterequestdetail?aid="+aid});
        },
        getDetailData3(aid){
          // 命名的路由
          this.$router.push({name:"myrouterequestdetail",query:{aid:aid}});
        },
        getDetailData4(aid){
          // 带查询参数，变成 /myrouterequestdetail2?aid=aid
          this.$router.push({name:"myrouterequestdetail2",params:{aid:aid}});
        }
      },
      mounted(){
        this.getPageData();
      }
    }
</script>

<style scoped>

</style>

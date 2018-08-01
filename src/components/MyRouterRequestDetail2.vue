<template>
  <div>
    <table>
      <tr v-for="(news,index) in newsdetail" @dbclick="getDetail(news.aid)">
        <th>{{index+1}}</th>
        <td><router-link :to="'/myrouterequestdetail?aid='+news.aid">{{news.aid}}</router-link></td>
        <td>{{news.catid}}</td>
        <td>{{news.dataline}}</td>
        <td>{{news.summary}}</td>
        <td>{{news.pic}}</td>
        <td>{{news.title}}</td>
        <td>{{news.username}}</td>
      </tr>
    </table>

  </div>

</template>

<script>
    export default {
      name: "MyRouterRequestDetail",
      data(){
        return{
          newsdetail:[],
        }
      },
      methods:{
        getDetail(aid){
          var url = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+aid;
          this.$http.get(url).then((response)=>{
            // console.log(response);
            this.newsdetail = response.body.result;
          },function(err){
            console.log(err);
          });
        },
      },
      mounted(){
        var aid1=this.$route.params.aid;
        this.getDetail(aid1);

      },
    }
</script>

<style scoped>

</style>

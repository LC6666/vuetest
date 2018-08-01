<template>
    <div>
      <hr>
      <div><b>14 Vue父组件给子组件传值方法，传方法，传整个实例</b></div>
      <div>父组件给子组件传值</div>
      <div>1.父组件调用子组件的时候 绑定动态属性&lt;v-header :title="title"&gt;&lt;/v-header&gt;</div>
      <div>2、在子组件里面通过 props接收父组件传过来的数据</div>
      <div>{{msg}}</div>
      <button @click="fun('I\'m sun')">点我！接收父类传送的方法</button>
      <hr>
      <div><b>15父组件主动获取子组件的数据和方法  子组件主动获取父组件的数据和方法</b></div>
      <div>父组件主动获取子组件的数据和方法：</div>
      <div>1.调用子组件的时候定义一个ref&nbsp;&nbsp;&nbsp;&lt;v-header ref="header"&gt;&lt;/v-header&gt;</div>
      <div>2.在父组件里面通过 this.$refs.header.属性&nbsp;&nbsp;&nbsp; this.$refs.header.方法</div>
      <div>子组件主动获取父组件的数据和方法：</div>
      <div>this.$parent.数据</div>
      <div>this.$parent.方法</div>
      <button @click="getparentfun()">点我！主动获取父类传送的方法</button><br/>
      <input type="text" v-model="msgs"/>
      <button @click="senddata()">点我！给小伙伴传值</button>
    </div>
</template>

<script>
  import VueEvent from "../model/VueEvent.js";
    export default {
      name: "ByVal",
      data(){
        return{
          byvalmsg:"I'm child",
          msgs:"",
        }
      },
      // props:["msg","fun"],
      props:{
        "msg":String,
        "fun":Function,
      },
      methods:{
        sonfun(str){
          alert("I'm child fun  "+str);
        },
        getparentfun(){
          this.$parent.fatherfun();
        },
        senddata(){
          VueEvent.$emit("from-byval",this.msgs);
        },
      },
      mounted(){
        VueEvent.$on('from-byvalboth',function(data){
        console.log("ByVal"+data);
        })
      },
    }
</script>

<style scoped>

</style>

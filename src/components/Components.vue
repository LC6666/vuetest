<template>
    <div id="App1">
      <v-hello></v-hello>
      <hr>
      <div>10 Vue中创建单文件组件 注册组件  以及组件的使用</div>
      <div>1、引入组件</div>
      <div>2、挂载组件</div>
      <div>3、在模板中使用</div>
      <h3>{{msg}}</h3>
      <v-model></v-model>
      <v-todo></v-todo>
      <v-storage></v-storage>
      <v-life></v-life>
      <v-vueuse></v-vueuse>
      <v-axios></v-axios>
      <v-interface></v-interface>
      <button @click="fatherfun()">点我获取子组件的方法</button>
      <v-byval :msg="msg" :fun="run" ref="byval"></v-byval>
      <v-byvalboth></v-byvalboth>
      <v-bottom></v-bottom>
    </div>
</template>

<script>

  import Hello from "./Hello";
  import BottomNav from "./BottomNav"
  import Life from "./Life"
  import StorageBind from "./StorageBind";
  import TodoList from "./Todolist";
  import Vmodel from "./VmodelBind";
  import VueresourceUse from "./VueresourceUse";
  import AxiosUse from "./AxiosUse"
  import ByVal from "./ByVal"
  import ByValBoth from "./ByValBoth"
  import Interface from "./interface"


    export default {
      name: "App",
      data(){
          return{
            msg:"Hello! I'm the APP",
          }
      },
      components:{
        "v-hello":Hello,
        "v-life":Life,
        "v-storage":StorageBind,
        "v-todo":TodoList,
        "v-model":Vmodel,
        "v-vueuse":VueresourceUse,
        "v-bottom":BottomNav,
        "v-axios":AxiosUse,
        "v-byval":ByVal,
        "v-byvalboth":ByValBoth,
        "v-interface":Interface,
      },
      methods:{
        run(data){
          alert("I'm father!  "+data+"  "+this.msg);
        },
        fatherfun(){
          // alert(this.$refs.byval.byvalmsg)
          this.$refs.byval.sonfun("I'm father!");
        }
      },

    }
</script>

<style lang="scss" scoped>
h3{
  color: blue;
}
</style>

<template>
  <div>
    <hr>
    <div><b>16 非父子组件传值</b></div>
    <div>非父子组件传值</div>
    <div>1、新建一个js文件   然后引入vue  实例化vue  最后暴露这个实例</div>
    <div>2、在要广播的地方引入刚才定义的实例</div>
    <div>3、通过 VueEmit.$emit('名称','数据')</div>
    <div>4、在接收收数据的地方通过 $on接收广播的数据
      VueEmit.$on('名称',function(){   })</div>
    <input type="text" v-model="msg"/>
    <button @click="emitmsg()">点我！给小伙伴传值</button>


  </div>

</template>

<script>
    import VueEvent from "../model/VueEvent.js";
    export default {
      name: "ByByValBoth",
      data(){
          return{
           msg:"",
          }
      },
      methods:{
        emitmsg(){
          VueEvent.$emit("from-byvalboth",this.msg)
        },
      },
      mounted(){
        VueEvent.$on("from-byval",function (msg) {
          console.log("ByValBoth"+msg);
        });
      },
    }
</script>

<style scoped>

</style>

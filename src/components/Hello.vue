<template>
  <div>
    <hr>
    vue里面所有的内容要被一个要节点包含起来
    <div :class="{red:flag}">
      这里是通过vue来绑定的样式
      {{messages}}
    </div>
    <div v-for="(k,v,index) in person" :class="{red:!flag,blue:flag}">
      这里是通过vue来选择的样式
      {{index}}----{{v}}:{{k}}
    </div>

    <div v-for="p in personlist">
      {{p.name}}
      {{p.sex}}
      {{p.age}}
    </div>

    <div v-bind:title="title">鼠标划到这里试试</div>
    <div :title="title">鼠标划到这里试试，我是属性简写</div>
    <img src="../assets/web.jpg"/>
    <!--<img :src="{./assets/picname}">-->
    <div v-html="varh1" title="HTML格式输出"></div>
    <div v-text="varh1" title="TEXT格式输出"></div>
    <div :style="{backgroundColor:vbgcolor,color:vfontcolor,width:vdivwidth+'px'}">
      {{messages}}
    </div>
    <div class="hello">
      <hr>
      css  局部作用域  scoped
      <div @click="run()">{{msg}}</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "hello",
        data(){
          return{
            msg:"This is the home! Click here!",
            messages: "Hello,这里是样式绑定",
            person:{"name":"David","sex":"male","age":"20"},
            personlist:[{"name":"David","sex":"male","age":"20"},{"name":"Sasa","sex":"famale","age":"18"},{"name":"Momo","sex":"famale","age":"21"}],
            title:"我是title",
            picname:"web.jpg",
            varh1:"<h4>hello</h4>",
            flag:true,
            vbgcolor:"grey",
            vfontcolor:"red",
            vdivwidth:"300",
          }
        },
      methods:{
          run(){
            alert(this.msg)
          }
      },
    }
</script>

<style lang="scss" scoped>
  /*css  局部作用域  scoped*/
  .hello{
    color: red;
  }
</style>

<template>
    <div>
      <hr>
      <div >Vue事件 定义方法 执行方法  获取数据 改变数据 执行方法传值 以及事件对象</div>
      <input type="button" value="点我" @click="setlist()">
      <div v-for="l in list">{{l}}</div>
      <input type="button" value="执行方法传值" @click="getparam(messages)" >
      <button type="button" @click="getEvent($event)" data-wp="自定义属性">事件对象</button>
    </div>
</template>

<script>
    export default {
        name: "EventFn",
      data(){
        return{
          messages: "Hello My Darling",
          list:[],
        }
      },
      methods:{
        setlist(){
          for(var i=0;i<10;i++){
            this.list.push(i);
          }
        },
        getparam(param){
          alert(param);
        },
        getEvent(e){
          console.log(e);
          alert(e.pageX)
          alert(e.srcElement.dataset.wp);
        },
      }
    }
</script>

<style scoped>

</style>

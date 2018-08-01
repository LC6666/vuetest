<template>
  <div>
    <hr>
    <div>09 Vue 中的模块化以及封装Storage实现todolist 待办事项 已经完成 和进行中持久化</div>
    <input type="text" ref="todo2" @keydown="doAdd($event)"/>
    <button @click="addtodo2()" >增加</button>
    <div><b>未完成</b></div>
    <div v-for="(todo,index) in todolist3" v-if="!todo.status" >
      <input type="checkbox" checked="todo.status" v-model="todo.status" @change="savelist()">
      {{todo.thing}}
      <button @click="deletetodo2(index)">删除</button>
    </div>
    <div><b>已完成</b></div>
      <div v-for="(todo,index) in todolist3" v-if="todo.status" >
        <input type="checkbox" checked="todo.status" v-model="todo.status" @change="savelist()">
        {{todo.thing}}
        <button @click="deletetodo2(index)">删除</button>
      </div>
  </div>

</template>

<script>
  import storage from '../model/storage';
    export default {
        name: "StorageBind",
      data(){
          return{
            todolist3:[],
          }
      },
      methods:{
        doAdd(e){
          if(e.keyCode==13){
            this.todolist3.push({thing:this.$refs.todo2.value,status:false})
            this.$refs.todo2.value="";
            storage.set("todolist3",this.todolist3);
          }
        },
        addtodo2(){
          this.todolist3.push({thing:this.$refs.todo2.value,status:false})
          this.$refs.todo2.value="";
          storage.set("todolist3",this.todolist3);
        },
        deletetodo2(del){
          this.todolist3.splice(del,1);
          storage.set("todolist3",this.todolist3);
        },
        savelist(){
          storage.set("todolist3",this.todolist3);
        },
      },
      mounted(){
      // var list = JSON.parse(localStorage.getItem("todolist3"));
      var list = storage.get("todolist3");

      if(list){  /!*注意判断*!/
        this.todolist3=list;
        }
      }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <hr>
    <div>07 Vue 事件结合双向数据绑定实现todolist</div>
    <input type="text" ref="todo" @keydown="gettext($event)"/>
    <button @click="addtodo()" >增加</button>
    <div v-for="(todo,index) in todolist" @click="deletetodo(index)" style="cursor: pointer">
      {{todo}}
    </div><br/>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <div>08 Vue 事件结合双向数据绑定实现todolist 待办事项 已经完成 和进行中，将数据存入缓存</div>
    <input type="text" ref="todo2" @keydown="doAdd($event)"/>
    <button @click="addtodo2()" >增加</button>
    <div><b>未完成</b></div>
    <div v-for="(todo,index) in todolist2" v-if="!todo.status" >
      <input type="checkbox" checked="todo.status" v-model="todo.status" @change="savelist()">
      {{todo.thing}}
      <button @click="deletetodo2(index)">删除</button>
    </div>
    <b>已完成</b>
    <div v-for="(todo,index) in todolist2" v-if="todo.status" >
      <input type="checkbox" checked="todo.status" v-model="todo.status" @change="savelist()">
      {{todo.thing}}
      <button @click="deletetodo2(index)">删除</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Todolist",
      data(){
        return{
          todolist:[],
          todolist2:[],
        }
      },
      methods:{
        gettext(e){
          if(e.keyCode==13){
            this.todolist.push(this.$refs.todo.value);
            this.$refs.todo.value="";
          }
        },
        addtodo(){
          this.todolist.push(this.$refs.todo.value);
          this.$refs.todo.value="";

        },
        deletetodo(del){
          this.todolist.splice(del,1);
        },
        doAdd(e){
          if(e.keyCode==13){
            this.todolist2.push({thing:this.$refs.todo2.value,status:false})
            this.$refs.todo2.value="";
            localStorage.setItem("todolist2",JSON.stringify(this.todolist2))
          }
        },
        addtodo2(){
          this.todolist2.push({thing:this.$refs.todo2.value,status:false})
          this.$refs.todo2.value="";
          localStorage.setItem("todolist2",JSON.stringify(this.todolist2))
        },
        deletetodo2(del){
          this.todolist2.splice(del,1);
          localStorage.setItem("todolist2",JSON.stringify(this.todolist2))
        },
        savelist(){
          localStorage.setItem("todolist2",JSON.stringify(this.todolist2))
        },
      },
      mounted(){
        var list = JSON.parse(localStorage.getItem("todolist2"));

        if(list){  /!*注意判断*!/
          this.todolist2=list;
        }
      }
    }
</script>

<style scoped>

</style>

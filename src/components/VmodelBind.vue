<template>
  <div>
    <hr>
    <h4>{{messages}}</h4>
    <input type="text" v-model="messages" />
    <input type="button" value="点我" @click="getMessage()"/>
    <input type="button" value="message改变" @click="setMessage()"/>
    <br><br>
    <input type="text" ref="username"/>
    <input type="button" value="点我改变标题" @click="getinputMessage()"/>
    <br><br>
    <div ref="box" @click="getbox()">ref是用于获取DOM节点的，点击试试~</div>
  </div>

</template>

<script>
    export default {
        name: "VmodelBind",
      data(){
        return{
          messages: "双向数据绑定",
        }
      },
      methods:{
        getMessage(){
          alert(this.messages);
        },
        setMessage(){
          this.messages="双向数据绑定示例";
        },
        getinputMessage(){
          var username = this.$refs.username.value;
          if(username==""){
            alert("请先在输入框中输入");
          }else{
            this.messages = username;
          }


        },
        getbox(){
          this.$refs.box.style.width="300px";
          this.$refs.box.style.background="red";
        },
      }
    }
</script>

<style scoped>

</style>

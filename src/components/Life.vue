<template>
  <div id="life">
    <hr>
    <h4>11 Vue中组件的生命周期函数</h4>
    {{msg}}
    <button @click="change()">点我</button>
    <dl>
      <dt>
        生命周期函数/生命周期钩子：
      </dt>
      <dd>
        组件挂载、以及组件更新、组件销毁、的时候触发的一系列的方法  这些方法就叫做生命周期函数
      </dd>
    </dl>
  </div>
</template>

<script>
    export default {
      name: "Life",
      data(){
          return{
            msg:"是我！",
            el:"#life",
          }

      },
      methods:{
        change(){
          this.msg="我走咯！";
        }
      },
      beforeCreate: function () {
        console.group('beforeCreate 创建前状态===============》');
        console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //undefined
        console.log("%c%s", "color:red","message: " + this.message)
      },
      created: function () {
        console.group('created 创建完毕状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
      },
      beforeMount: function () {
        console.group('beforeMount 挂载前状态===============》');
        console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
      },
      mounted: function () {
        /*请求数据，操作dom , 放在这个里面  mounted*/
        console.group('mounted 挂载结束状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
      },
      beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message);
      },
      updated: function () {
        console.group('updated 更新完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message);
      },
      beforeDestroy: function () {
        console.group('beforeDestroy 销毁前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message);
      },
      destroyed: function () {
        console.group('destroyed 销毁完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message)
      }

    }
</script>

<style scoped>

</style>

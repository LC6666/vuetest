<template>
    <div>
      <hr/>
      使用this.$route.params获取动态路由传值{{id}}
    </div>
</template>

<script>
    export default {
      name: "MyRouterGetMsgTail",
      data(){
        return{
          id:"",
        }

      },
      mounted(){
          // console.log(this.$route.params);
        this.id=this.$route.params.id;
      },

    }
</script>

<style scoped>

</style>

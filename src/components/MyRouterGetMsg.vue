<template>
  <div>
    <hr/>
    使用this.$route.query获取get传值{{id}}
  </div>

</template>

<script>
    export default {
      name: "MyRouterGetMsg",
      data(){
        return{
          id:"",
        }
      },
      mounted(){
        // console.log(this.$route.query);
        this.id = this.$route.query.id;
      },
    }
</script>

<style scoped>

</style>

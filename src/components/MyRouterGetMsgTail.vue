<template>
    <div>
      <hr/>
      我是消息详情
    </div>
</template>

<script>
    export default {
        name: "MyRouterGetMsgTail",
      mounted(){
          console.log(this.$route.params);
      },
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <hr/>
    MyRouterGetMsg
  </div>

</template>

<script>
    export default {
      name: "MyRouterGetMsg",
      mounted(){
        console.log(this.$route.query);
      },
    }
</script>

<style scoped>

</style>

<template>
    <div id="bottomNav">
      <router-link to="/" class="tab">功能测试</router-link>
      <router-link to="/interface" class="tab">接口测试</router-link>
    </div>
</template>

<script>
    export default {
        name: "BottomNav"
    }
</script>

<style scoped>
  #bottomNav{
    display: flex;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding: 0.5rem 0;
    text-align: center;
    border-top: 1px solid #999999;
    /*position: fixed;*/
    left: 0;
    bottom: 0;
  }

  .tab{
    flex: 1;
    text-align: center;
    border-right: 1px solid #999999;
  }

</style>

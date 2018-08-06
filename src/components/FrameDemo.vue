<template>
    <div>
      <hr/>
      <div class="frame">
        <div class="left">
          <ul>
            <li>
              <router-link to="/framedemo/frame1">链接1</router-link>

            </li>
            <li>
              <router-link to="/framedemo/frame2">链接2</router-link>

            </li>
          </ul>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    import Router from "./MyRouter";
    export default {
        name: "framedemo",
      components: {Router}
    }
</script>

<style scoped>
  .frame{
    display: flex;
  }
  .left{
    width: 200px;
  }
</style>

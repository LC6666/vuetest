<template>
    <div>
      路由的嵌套<br>
      1.配置路由<br>
      {<br>
      path: '/user',<br>
      component: User,<br>
      children:[<br>
      { path: 'useradd', component: UserAdd },<br>
      { path: 'userlist', component: Userlist }<br>
      ]<br>
      }<br>
      2.父路由里面配置子路由显示的地方<br>
      &lt;router-view&gt;&lt;/router-view&gt;
    </div>
</template>

<script>
    export default {
        name: "FrameRight1"
    }
</script>

<style scoped>

</style>

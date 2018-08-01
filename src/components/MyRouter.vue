<template>
    <div>
      <hr>
      <div><b>17 vue路由配置：</b></div>
      <div>1.安装</div>
      <span>npm install vue-router  --save   / cnpm install vue-router  --save</span>
      <div>2、引入并 Vue.use(VueRouter)   (main.js)</div>
      <div>import VueRouter from 'vue-router'</div>
      <span>Vue.use(VueRouter)</span>
      <div>3、配置路由</div>
      <div>1、创建组件 引入组件</div>
      <div>2、定义路由  （建议复制）</div>
      <div> const routes = [</div>
      <div> { path: '/foo', component: Foo },</div>
      <div>{ path: '/bar', component: Bar },</div>
      <div>{ path: '*', redirect: '/home' }   /*默认跳转路由*/</div>
      <div>]</div>
      <div>3、实例化VueRouter</div>

      <div>const router = new VueRouter({</div>
      <div>routes // （缩写）相当于 routes: routes</div>
      <div>})</div>
      <div>4、挂载</div>
      <div>new Vue({</div>
      <div>el: '#app',</div>
      <div>router，</div>
      <div>render: h => h(App)</div>
      <div>})</div>

      <div>
        5 、根组件的模板里面放上这句话 <br/>  &lt;router-view&gt;&lt;/router-view&gt;
      </div>
      <div>
        6、路由跳转<br/>
        &lt;router-link to="/foo"&gt;Go to Foo&lt;/router-link&gt;<br/>
        &lt;router-link to="/bar"&gt;Go to Bar&lt;/router-link&gt;</div>


    </div>
</template>

<script>
    export default {
        name: "router"
    }
</script>

<style scoped>

</style>

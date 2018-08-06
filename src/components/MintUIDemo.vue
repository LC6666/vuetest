<template>
    <div>
      <hr>
      改变颜色
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
      <br>
      改变大小
      <mt-button size="small">small</mt-button>
      <mt-button size="large">large</mt-button>
      <mt-button size="normal">normal</mt-button>
      <br>
      禁用按钮
      <mt-button disabled>disabled</mt-button>
      <br>
      幽灵按钮
      <mt-button plain>plain</mt-button>
      <br>
      带图标
      <mt-button icon="back">back</mt-button>
      <mt-button icon="more">更多</mt-button>
      <br>
      自定义图标
      <mt-button>
        <img src="../assets/100.png" height="20" width="20" slot="icon">
        带自定义图标
      </mt-button>
      <br>
      绑定 click 事件
      <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>
    </div>
</template>

<script>
    export default {
        name: "MintUIDemo",
      methods:{
        handleClick(){
          alert("handleClick");
        },
      }
    }
</script>

<style scoped>

</style>

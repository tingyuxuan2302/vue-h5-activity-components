## 我是PopBottom组件
[Home](/)

<template>
  <boi-button @handleClick="handleOpen">打开浮层</boi-button>
  <pop-bottom
    :isShow="isShow"
    @handlePopClose="handlePopClose"
    title="我是标题"
  >我是浮层哈哈哈😄</pop-bottom>
</template>

<script>
  import PopBottom from '../../src/packages/pop-bottom';
  import Button from '../../src/packages/button';
  import '../../lib/styles/button.css';
  import '../../lib/styles/pop-bottom.css';
  export default {
    components: {
      'boi-button': Button,
      'pop-bottom': PopBottom,
    },
    data() {
      return {
        isShow: false,
      }
    },
    methods: {
      handlePopClose() {
        this.isShow = false;
      },
      handleOpen() {
        this.isShow = true;
      }
    }
  }
</script>
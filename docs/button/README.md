## 我是button组件
[Home](/)

<template>
  <boi-button>第一个按钮</boi-button>
</template>

<script>
  import Button from '../../src/packages/button';
  export default {
    components: {
      'boi-button': Button,
    }
  }
</script>
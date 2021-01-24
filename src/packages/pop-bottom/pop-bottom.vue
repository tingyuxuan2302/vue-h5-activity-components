<template>
  <div class="boi-pop-bottom-container">
    <div
      @click="handleClose"
      class="shadow"
      :class="isShow ? 'shadow-show' : ''"
      @touchmove.prevent
    ></div>
    <div class="pop-botm pop-record" :class="`${className} ${isShow ? 'pop-botm-show' : ''}`">
      <i class="icon-closed" @click="handleClose"></i>
      <div class="pop-botm-hd">{{ title }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "PopBottom",
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
    // 抽屉标题
    title: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: '',
    }
  },
  methods: {
    handleClose(e) {
      const a = "2";
      this.$emit("handlePopClose");
    }
  },
};
</script>

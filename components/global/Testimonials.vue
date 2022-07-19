<template>
  <div class="w-full">
    <Vue-Horizontal ref="myVueHorizontal" class="full">
      <slot></slot>
    </Vue-Horizontal>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.myVueHorizontal.refresh();
  },
};
</script>

<style scoped></style>

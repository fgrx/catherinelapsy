<template>
  <div>
    <div class="flex flex-wrap justify-center">
      <img
        :src="require(`@/static/logos/${image}.webp`)"
        alt=""
        height="150"
        width="150"
        class="object-center"
      />
    </div>
    <blockquote>
      <p class="italic">
        <slot></slot>
      </p>
      <cite>{{ author }}</cite>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "woman1",
    },
    author: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
</style>

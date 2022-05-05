<template>
  <div class="text-center">
    <a :href="url" :target="target">
      <Btn class="">
        <slot></slot>
      </Btn>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "",
    },
  },
};
</script>

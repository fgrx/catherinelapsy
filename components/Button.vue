<template>
  <div>
    <button
      :class="`inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-${color} rounded shadow ripple hover:shadow-lg hover:bg-${color}-600 focus:outline-none`"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "rose-600",
    },
  },
};
</script>

<style scoped>
</style>
